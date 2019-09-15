---
date: 2019-09-15
title: 'Belajar PHP: Syntax Alternatif'
template: post
thumbnail: '../thumbnails/php.png'
slug: belajar-php-syntax-alternatif
categories:
  - Belajar
tags:
  - php
  - alternatif
  - syntax
  - control
  - kondisi
  - perulangan
---

Kita sudah belajar pengkondisian dan perulangan pada artikel sebelumnya, kali ini kita akan belajar syntax alternatif dari pengkondisian dan perulangan. PHP versi 4, 5, dan 7 sudah mendukung syntax alternatif, dimana kita bisa menggunakan syntax yang lebih mudah dibaca.

Syntax alternatif biasanya digunakan jika kita menggabungkan php control (kondisi / perulangan) dengan html. Cara menggunakannya adalah dengan mengganti `{` dengan `:` dan diakhiri `end<namatag>`.

Contoh :

<div class="filename">index.php</div>

```php
<?php

// IF
if ($x > 0):
    // kode lainnya disini
endif;

// IF ELSEIF ELSE
if ($x > 0):
    // kode lainnya disini
elseif ($x = 0):
    // Kode lainnya disini
else:
    // Kode lainnya disini
endif;

// SWITCH CASE
$x = 2;
switch ($x):
    case 1:
     // Kode lainnya disini
endswitch;
?>
```

Sebagai perbandingan, ini adalah kode dengan syntax normal :

<div class="filename">index.php</div>

```php

<table>
  <tr>
    <th>Nama</th>
    <th>NPM</th>
    <th>Kelas</th>
  </tr>
  <tr>
    <?php
        while ($data as $sql->fetch_assoc()) {
    ?>
  <?php ?>
    <td><?php echo $data['nama'];?></td>
    <td><?php echo $data['npm'];?></td>
    <td><?php echo $data['kelas'];?></td>
    <?php 
        }
    ?>
  </tr>
</table>

```

Ini adalah kode dengan syntax alternatif :

<div class="filename">index.php</div>

```php

<table>
  <tr>
    <th>Nama</th>
    <th>NPM</th>
    <th>Kelas</th>
  </tr>
  <tr>
    <?php
        while ($data as $sql->fetch_assoc()):
    ?>
  <?php ?>
    <td><?php echo $data['nama'];?></td>
    <td><?php echo $data['npm'];?></td>
    <td><?php echo $data['kelas'];?></td>
    <?php 
        endwhile;
    ?>
  </tr>
</table>

```

Tentunya lebih mudah dibaca yang pakai syntax alternatif kan? Kita jadi tidak perlu pusing mencari simbol `{`.
Untuk contoh syntax alternatif lainnya, bisa dibaca di [PHP Manual](https://www.php.net/manual/en/control-structures.alternative-syntax.php).