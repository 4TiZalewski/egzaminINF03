<?php
$conn = mysqli_connect("localhost", "root", "", "wedkarstwo");

if (!$conn) {
    echo "Nie udało się połączyć z bazą";
    die();
}

if (isset($_POST['lowisko'])) {
    $sql = "INSERT INTO zawody_wedkarskie 
        (zawody_wedkarskie.Karty_wedkarskie_id, zawody_wedkarskie.Lowisko_id, zawody_wedkarskie.data_zawodow, zawody_wedkarskie.sedzia) 
        VALUES (0, ".($_POST['lowisko']).", \"".($_POST['data'])."\", \"".($_POST['sedzia'])."\");";

    mysqli_query($conn, $sql);
}

mysqli_close($conn);
?>