---
date: 2019-09-01
title: 'Belajar PHP: Syntax Dasar'
template: post
thumbnail: '../thumbnails/php.png'
slug: belajar-php-syntax-dasar
categories:
  - Belajar
tags:
  - syntax
  - php
---

Halo semua, selamat datang di seri Belajar PHP. Di seri ini, kita akan belajar bareng tentang pemrograman PHP, untuk artikel pertama ini kita akan belajar tentang syntax-syntax dasar php.

### Apa yang kita butuhkan?
Pastikan di PC kalian sudah terinstall aplikasi-aplikasi pendukung berikut :
- Local server + bahasa program PHP (XAMPP, MAMP, WAMP, LAMP, dsb).
- Text Editor (VSCode, Atom, Bracket, dsb).

## File PHP
Sebelum menuliskan syntax php, pastikan kita sudah membuat file php. File php adalah file teks yang berekstensi .php (dot php). Misalnya : index.php. Setelah itu, simpan file tersebut di local server kalian. Jika menggunakan XAMPP, silakan simpan file tersebut di htdocs.

## Tag PHP
Supaya server dapat membaca bahasa php, kita perlu menggunakan tag php. Silakan buka file php yang sudah kita buat, lalu buat tag phpnya. Tag php itu di awali dengan `<?php` dan diakhiri dengan `?>`

<div class="filename">index.php</div>

```php
<?php

?>
```

Lalu kita bisa tulis syntaxnya di antara tag tersebut. Php juga tidak berpengaruh terhadap penulisan spasi. Misalnya :

<div class="filename">index.php</div>

```php
<?php




?>
```

Spasi yang banyak seperti itu tidak berpengaruh ke kodingan yang kita buat.

## Komentar
Komentar adalah tulisan yang tidak akan dieksekusi oleh compiler / interpreter. Biasanya komentar digunakan oleh programmer untuk mendokumentasikan atau menjelaskan fungsi dari codenya, atau bisa juga untuk menonaktifkan kode yang tak terpakai.
Ada 2 cara yang bisa kita lakukan untuk menuliskan komentar di php :

<div class="filename">index.php</div>

```php
<?php

//  Ini cara pertama, untuk komentar sebaris.

/*
    Ini cara kedua untuk komentar
    yang lebih dari sebaris.
*/

?>
```

## Output
Sama seperti bahasa program lainnya, php juga punya syntax untuk menampilkan tulisan ke layar. Syntax yang dapat digunakan ada 4 :
- `echo` & `print` perintah untuk mencetak string / tulisan biasa / variabel.
- `print_r` perintah untuk melihat isi dari array atau mencetak string / tulisan biasa.
- `var_dump` perintah untuk melihat isi dari variabel.

Untuk syntax `print_r` dan `var_dump` hanya digunakan untuk debugging, jadi kita tidak menggunakan kedua variabel tersebut untuk membuat website kita. Untuk lebih jelasnya, kita bisa langsung praktik saja :D

<div class="filename">index.php</div>

```php
<?php

echo "Halo dunia!";

// Ketika dibuka di browser, maka outputnya akan seperti ini :
// Halo dunia!

?>
```

<div class="filename">index.php</div>

```php
<?php

// echo "Halo dunia!";
print "Halo dunia!";

// Ketika dibuka di browser, maka outputnya akan seperti ini :
// Halo dunia!

?>
```

<div class="filename">index.php</div>

```php
<?php

// echo "Halo dunia!";
// print "Halo dunia!";
print_r ("Halo dunia!");

// Ketika dibuka di browser, maka outputnya akan seperti ini :
// Halo dunia!

?>
```

<div class="filename">index.php</div>

```php
<?php

// echo "Halo dunia!";
// print "Halo dunia!";
//print_r ("Halo dunia!");
var_dump ("Halo dunia!");

// Ketika dibuka di browser, maka outputnya akan seperti ini :
// string(11) "Halo dunia!"
// Penjelasannya :
// string => tipe data.
// 11 => jumlah karakter.
// "Halo dunia!" => karakter yang dicetak.

?>
```

## Variabel
Untuk membuat variabel, kita cukup menuliskan `$<nama_variabel>`, kita tidak perlu mendefinisikan tipe datanya.
Ada aturan penulisan variabel, yaitu tidak boleh diawali dengan angka tapi boleh mengandung angka.

<div class="filename">index.php</div>

```php
<?php

$1nama = "Rafi"; // Ini gak boleh.
$nama = "Rafi"; // Ini boleh.

?>
```

## Operator
Ada banyak operator di php :

1. Aritmatika, matematika biasa. 

| Operator   | Fungsi                          |
| ---------- | ------------------------------- |
| `+`        | Untuk menambahkan.                |
| `-`        | Untuk mengurangi.                 |
| `/`        | Untuk membagi.                    |
| `%`        | Untuk mendapatkan hasil bagi.     |

2. Concat, untuk menggabungkan string.

| Operator   | Fungsi                          |
| ---------- | ------------------------------- |
| `.`        | Untuk menggabungkan string.     |

3. Assignment, untuk penugasan.

| Operator   | Fungsi                                           |
| ---------- | ------------------------------------------------ |
| `=`        | Sama dengan.                                     |
| `+=`       | Ditambah lalu sama dengan.                       |
| `-=`       | Dikurang lalu sama dengan.                       |
| `*=`       | Dikali lalu sama dengan.                         |
| `/=`       | Dibagi lalu sama dengan.                         |
| `%=`       | Diambil hasil bagi (modulus) lalu sama dengan.   |
| `.=`       | Digabungkan lalu sama dengan.                    |

4. Perbandingan, untuk memandingan antar nilai.

| Operator   | Fungsi                                           |
| ---------- | ------------------------------------------------ |
| `<`        | Lebih kecil dari.                                |
| `>`        | Lebih besar dari.                                |
| `<=`       | Lebih kecil atau sama dengan.                    |
| `>=`       | Lebih besar atau sama dengan.                    |
| `==`       | Sama dengan                                      |
| `!=`       | Tidak sama dengan.                               |

5. Identitas, hampir sama seperti perbandingan hanya saja tipe datanya dicek juga.

| Operator   | Fungsi                                           |
| ---------- | ------------------------------------------------ |
| `===`      | Sama dengan                                      |
| `!==`      | Tidak sama dengan.                               |

6. Logika, untuk pengkondisian.

| Operator   | Fungsi                                           |
| ---------- | ------------------------------------------------ |
| `&&`       | Dan.                                             |
| `||`       | Atau.                                            |
| `!`        | Tidak.                                           |

<div class="filename">index.php</div>

```php
<?php

// Aritmatika
echo 2 + 4;
// Outputnya : 6.

?>
```
<div class="filename">index.php</div>

```php
<?php

// Concat
$salam = "Selamat pagi ";
$nama = "Rafi";
echo $salam . $nama;
// Outputnya: Selamat pagi Rafi

?>
```
<div class="filename">index.php</div>

```php
<?php

// Assignment
// Berfungsi untuk menambahkan nilai yang sudah ada.
$r = 1;
$r += 2;

echo $r;
// Outputnya: 3

?>
```
<div class="filename">index.php</div>

```php
<?php

// Perbandingan
// Biasanya untuk pengkondisian, dan tidak mengecek tipe datanya.
var_dump(10 == "10");
// Outputnya: bool(true)

?>
```
<div class="filename">index.php</div>

```php

<?php

// Identitas
// Sama seperti perbandingan, tapi mengecek tipe datanya.
var_dump(10 === "10");
// Outputnya: bool(false)

?>
```

## Menggabungkan PHP dengan HTML
Ada 2 cara untuk menggabungkan php dengan html :
- Memasukkan syntax php didalam html.
- Memasukkan tag html didalam php.

Contoh memasukkan syntax php didalam html :

<div class="filename">index.php</div>

```php
<?php

// Saya akan mencetak variabel php didalam html.
$nama = "Rafi"; // variabel nama.

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Belajar php</title>
</head>
<body>
    <p>
        Halo <?php echo $nama; ?>
    </p>
</body>
</html>

// Ketika dibuka di browser, maka outputnya akan seperti ini :
// Halo Rafi

```

Contoh memasukkan tag html didalam php :

<div class="filename">index.php</div>

```php

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Belajar php</title>
</head>
<body>

<?php echo "<p>Halo Rafi</p>" ?>


</body>
</html>

// Ketika dibuka di browser, maka outputnya akan seperti ini :
// Halo Rafi

```

Cukup sekian untuk artikel syntax dasar. Nanti akan ada lanjutannya lagi dan pasti akan lebih seru lagi :D
Supaya lebih paham lagi, kalian bisa coba-coba sendiri syntax phpnya.