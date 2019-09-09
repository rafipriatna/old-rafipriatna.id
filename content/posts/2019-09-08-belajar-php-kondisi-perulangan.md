---
date: 2019-09-08
title: 'Belajar PHP: Kondisi dan Perulangan'
template: post
thumbnail: '../thumbnails/php.png'
slug: belajar-php-kondisi-perulangan
categories:
  - Belajar
tags:
  - perulangan
  - kondisi
  - php
---

Sebelumnya kita sudah belajar tentang syntax-syntax dasar php. Sekarang, kita lanjutkan dengan belajar kondisi dan perulangan yang ada di php.

## Apa itu kondisi?
Kondisi di php adalah pengecekan "jika-maka" dari suatu pernyataan. Pengkondisian seperti ini biasanya digunakan saat kita akan menerapkan logika yang memerlukan pengecekan suatu nilai.
Ada banyak pengkondisian di php :
- IF ... ELSE
- IF ... ELSE IF ... ELSE
- SWITCH CASE

#### IF ... ELSE
Pengkondisian `if ... else` bisa dilakukan dengan menuliskan kode `if ( <kondisi> )`. Jadi jika kondisi didalam `if` bernilai `true / benar` maka block kode `if` dijalankan. Jika kondisi bernilai `false / salah` maka block kode `else` akan dijalankan.

<div class="filename">index.php</div>

```php
<?php

  // Apakah 1 lebih kecil dari 5
  if ( 1 < 5 ){
    // Jika kondisi bernilai true
    echo "Benar!";
  } else {
    // Jika kondisi bernilai false
    echo "Salah!";
  }

  /*
    Output:
    Benar!
  */

?>
```

#### IF ... ELSE IF ... ELSE
Else if dilakukan jika kita ingin menyisipkan kondisi lagi didalam sebuah kondisi `if ... else`.

<div class="filename">index.php</div>

```php
<?php

  // Apakah 1 lebih kecil dari 5
  if ( 1 == 5 ){
    // Jika kondisi bernilai true
    echo "1 sama dengan 5";
  } else if ( 1 < 5 ){
    // Jika kondisi 1 < 5 bernilai false, maka cek kondisi ini
    // Jika kondisi bernilai true
    echo "1 kurang dari 5";
  } else {
    // Jika kedua kondisi diatas bernilai false
    echo "Salah";
  }

  /*
    Output:
    1 kurang dari 5
  */

?>
```

#### SWITCH CASE
Biasanya kondisi ini digunakan jika kondisi `if else` sudah terlalu rumit. Untuk penggunaannya sebenarnya sama saja seperti `if else`.

<div class="filename">index.php</div>

```php
<?php

  $x = 2;
  switch ($x){
    case 1:
      echo "x adalah 1";
      break;
    case 2:
      echo "x adalah 2";
      break;
    case 3:
      echo "x adalah 3";
    break;
  }

  /*
    Output :
    x adalah 2
  */

?>
```

## Apa itu perulangan?
Perulangan di php adalah menulis ulang suatu block program secara berulang-ulang, tanpa harus menulis manual kode block program tersebut. Jadi kita bisa meminta phpnya untuk menulis suatu block program sebanyak keinginan kita.
Ada banyak perulangan di php :
- FOR
- WHILE
- DO ... WHILE
- FOREACH

#### FOR
Untuk melakukan perulangan for, kita bisa menuliskan kode `for ( <inisialisasi> <kondisi> <naik/turun> )`.

- `inisiaslisasi` berguna untuk menentukan variabel dan nilai awal yang akan digunakan untuk perulangannya.
- `kondisi` berguna untuk menentukan kapan perulangan berhenti.
- `naik/turun` berguna untuk menentukan perulangannya naik atau turun.

<div class="filename">index.php</div>

```php
<?php

  for ( $i = 1; $i < 8; $i++ ){
    echo "Ini pengulangan ke-" . $i;
    echo "<br>";
  }

  /*
    Inisialisasi = $i bernilai 1
    kondisi = $i kurang dari 8
    naik 1 tiap diulang

    Jadi, awalnya saya punya variabel i yang nilai nya 1
    Lalu mau saya ulang selama nilai i kurang dari 8
    Tiap di ulang variabel i nya ditambah nilainya sebanyak 1

    Outputnya :
    Ini pengulangan ke-1
    Ini pengulangan ke-2
    Ini pengulangan ke-3
    Ini pengulangan ke-4
    Ini pengulangan ke-5
    Ini pengulangan ke-6
    Ini pengulangan ke-7
  */

?>
```

#### WHILE
Untuk menuliskan perulangan while, kita bisa menuliskan kode `while ( <kondisi> )` <br>
Mirip-mirip dengan perulangan `for`.

<div class="filename">index.php</div>

```php
<?php

$i = 1; // Ini deklarasi variabel i
while ( $i < 8 ){
  echo "Ini pengulangan ke-" . $i;
  echo "<br>";
  $i++; // Naik 1 jika kondisi $i < 8 itu benar.
}

/*
  Inisialisasi = $i bernilai 1
  kondisi = $i kurang dari 8
  naik 1 tiap diulang

  Outputnya :
  Ini pengulangan ke-1
  Ini pengulangan ke-2
  Ini pengulangan ke-3
  Ini pengulangan ke-4
  Ini pengulangan ke-5
  Ini pengulangan ke-6
  Ini pengulangan ke-7
*/

?>
```

#### DO ... WHILE
Perulangan ini sama seperti `while` hanya saja ada yang ditambahkan kodenya.
`while` akan mengecek kondisinya terlebih dahulu baru melakukan tugas, `do while`
akan melakukan tugasnya terlebih dahulu baru mengecek kondisinya.

<div class="filename">index.php</div>

```php
<?php

$i = 1;
do {
  echo "Ini pengulangan ke-" . $i;
  echo "<br>";
  $i++;
} while ( $i < 8 )

/*
  Outputnya: 
  Ini pengulangan ke-1
  Ini pengulangan ke-2
  Ini pengulangan ke-3
  Ini pengulangan ke-4
  Ini pengulangan ke-5
  Ini pengulangan ke-6
  Ini pengulangan ke-7
*/

?>
```

#### FOREACH
Untuk perulangan yang satu ini sebenarnya dilakukan jika kita melakukan perulangan yang datanya dalam bentuk array.
Karena kita belum belajar array, mungkin nanti akan sedikit membingungkan. Nanti akan dibuatkan artikel khusus untuk array.

Sebenarnya perulangannya mirip seperti `for`, yang membedakan `foreach` datanya menggunakan array.

<div class="filename">index.php</div>

```php
<?php

  // Buat arraynya
  $data = array (
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
  );

  foreach ( $data as $x ){
    echo $x;
    echo "<br>";
  }

  /*
    Outputnya :
    Senin
    Selasa
    Rabu
    Kamis
    Jumat
  */

?>
```

Untuk lebih memahami tentang pengkondisian dan perulangan di php, kalian bisa mencoba sendiri syntax-syntaxnya. :D