<?php
$connection = mysqli_connect("localhost", "root", "", "baza");

if (mysqli_connect_error()) {
        echo "Połączenie z bazą nieudane!";
        die();
}

$data = $_POST['data'];
$ile_osob = $_POST['ile'];
$telefon = $_POST['telefon'];

$sql = "INSERT INTO rezerwacje (data_rez, liczba_osob, telefon) VALUES (\"$data\", $ile_osob, \"$telefon\");";

mysqli_query($connection, $sql);

echo "Dodano rezerwację do bazy";

mysqli_close($connection);
?>
