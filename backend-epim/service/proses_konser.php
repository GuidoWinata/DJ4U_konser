<?php
require_once("koneksi.php");

if (!isset($conn) || !$conn instanceof mysqli) {
    die("gagal koneksi databse");
}

function generateCode($lenght = 8)
{
    $karakter = "ABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789";
    return substr(str_shuffle($karakter), 0, $lenght);
}

$nama = $_POST["nama"];
$nomor_tlp = $_POST["nomor_tlp"];
$email = $_POST["email"];
$alamat = $_POST["alamat"];
$metode_pembayaran = $_POST["metode_pembayaran"];
$konser_id = $_POST["konser_id"];
$harga = $_POST["harga"];
$codePesan = generateCode();

if (mysqli_affected_rows($conn) > 0) {
    //berhasil///
}

$idTerakhir = getdata("SELECT id FROM data_diri ORDER BY id DESC LIMIT 1");
$idTerakhir = $idTerakhir[0]["id"];


mysqli_query($conn, "INSERT INTO payment VALUES ('', '$idTerakhir', '$konser_id', '$codePesan','$metode_pembayaran', 'pamdding', '$harga' ) ");

header("location :../metode_pembayaran.php?order_id=$codePesan");

if (mysqli_affected_rows($conn) > 0) {
    //berhasill//
}
