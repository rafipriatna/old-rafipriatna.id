---
date: 2019-08-20
title: 'Codeigniter Authentication'
template: post
thumbnail: '../thumbnails/codeigniter.png'
slug: codeigniter-authentication
categories:
  - Codeigniter
tags:
  - codeigniter
  - authentication
  - php
---

Untuk mengakses sebuah halaman khusus (misalnya halaman admin) dalam sebuah website, kita perlu melakukan otentikasi. Dimana hanya orang-orang tertentu saja yang bisa mendapatkan akses tersebut. Pada artikel kali ini, kita akan membahas tentang otentikasi yang bisa kita lakukan di codeigniter.

### Apa itu Authentication?
Authentication atau otentikasi adalah suatu proses yang menentukan apakah seseorang yang melakukan kombinasi (biasanya kombinasi email dan password) cocok dengan yang ada di database dan berhak mendapatkan akses masuk. Jika kombinasinya tidak cocok, maka tidak berhak mendapatkan akses masuk.

### Authentication dalam praktiknya
Ada beberapa hal yang bisa kita lakukan untuk membuat otentikasi di website kita :
- Hash Password biasanya menggunakan custom hash, md5 (algoritma cepat dan mudah <i>dibruteforce</i>.), bcrypt (algoritma lambat tapi sulit <i>dibruteforce</i>.)
- Pakai level - Bedakan antara user admin dan user biasa berdasarkan levelnya.

## Authentication pada codeigniter
Pada artikel ini saya akan mempraktikan bagaimana mengimplementasikan otentikasi menggunakan hash rekomendasi codeigniter yaitu Bcrypt.

### Pengaturan awal
Pastikan codeigniternya sudah diatur seperti ini :
<div class="filename">config/autoload.php</div>

```php
$autoload['libraries'] = array('database', 'session');
$autoload['helper'] = array('url');
```

<div class="filename">config/database.php</div>

```php
'hostname' => 'localhost',
	'username' => 'root',
	'password' => '', // Jika pake xampp biasanya tidak ada passwordnya
	'database' => 'db_rafi', // Nama databasenya.
	'dbdriver' => 'mysqli',
```

Table di database.
<div class="filename">tb_pengguna</div>

```sql
-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Agu 2019 pada 16.26
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rafi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pengguna`
--

CREATE TABLE `tb_pengguna` (
  `id` int(11) NOT NULL,
  `nama` varchar(55) NOT NULL,
  `email` varchar(125) NOT NULL,
  `password` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_pengguna`
--

INSERT INTO `tb_pengguna` (`id`, `nama`, `email`, `password`) VALUES
(1, 'Rafi', 'rafi@rafipriatna.id', '$2y$12$KISBE1B/zm3cMb2NoPBYvOVb3UpBMaTvcyqzL8K21V8wK8XxTjDLO');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_pengguna`
--
ALTER TABLE `tb_pengguna`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_pengguna`
--
ALTER TABLE `tb_pengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

```

### Controllers & Routes
Saya akan membuat controller `Auth` yang akan digunakan untuk otentikasi login.
Saya juga mengubah `default_controller` pada `routes.php` menjadi `Auth/login`.
<div class="filename">config/routes.php</div>

```php
$route['default_controller'] = 'Auth/login';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
```

Sekarang saatnya kita buat controller `Auth`.
<div class="filename">Auth.php</div>

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	public function index(){
		// Panggil function login
		$this->login();
	}

    public function login(){
		$this->load->view('auth/login');
	}
	
}
```
Jika kita membuat url `localhost/directory/index.php/auth/login` maka akan dibuka halaman login yang terletak pada `Application/views/auth/login.php`. (Pastikan kalian sudah memiliki halaman login sendiri ya).

Selanjutnya, buat fungsi untuk cek loginnya.
<div class="filename">Auth.php</div>

```php
public function ceklogin(){
        $this->load->model('AuthModel');
        // Ambil input post dari view login.
		$email	= $this->input->post('email',true);
		$pass	= $this->input->post('password',true);

        $proses = $this->AuthModel->login($email, $pass);
        // Jika nilai true
		if ($proses){
			echo "berhasil";
		}else{
        // Jika nilai false
			echo "gagal";
		}
	}
```
Di fungsi `ceklogin` tersebut, kita akan mengirim data berupa `Email` dan `Password` ke `AuthModel` yang akan kita buat nanti. Setelah itu `AuthModel` akan mengembalikan datanya dan diproses kembali di controller.
Jika kembalian datanya bernilai `true` maka akan memunculkan tulisan 'berhasil' jika tidak maka akan memunculkan tulisan 'gagal'.

### Model
Sekarang kita buat model untuk memproses data yang dikirim dari controller tadi.
<div class="filename">AuthModel.php</div>

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AuthModel extends CI_Model {

    public function login($email, $pass){
       // Cari data yang emailnya sesuai dengan yang dimasukkan user.
        $this->db->where('email', $email);
        $sql = $this->db->get('tb_pengguna');
        $row = $sql->row();
        // Jika ada datanya, maka cek passwordnya.
        if (isset($row)){
            if (password_verify($pass, $row->password)){
                return $row;
            }
        }
    }

}
```
Disini kita menggunakan `password_verify` yaitu fungsi bawaan dari php untuk memverifikasi password yang di input dengan password yang sudah dihash dengan bcrypt.

### View
Saya menggunakan form input sederhana tanpa css.
<div class="filename">auth/login.php</div>

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">

<form class="user" action="<?php echo base_url('auth/ceklogin')?>" method="POST">
    <div class="form-group">
      <input type="text" name="email" placeholder="Enter Email Address...">
    </div>
    <div class="form-group">
      <input type="password" name="password" placeholder="Password">
    </div>
    <input type="submit" class="btn" value="Login">
    </a>
</form>

</html>

```

Sampai sini kita sudah berhasil membuat otentikasi login sederhana menggunakan hash bcrypt. Sisanya bisa kalian kreasikan, misalnya penambahan level, form validation, dan lain sebagainya.