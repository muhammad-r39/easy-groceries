<?php
$dbHost = 'localhost';
$dbName = 'easy_groceries';
$dbUser = 'root';
$dbPass = '';

try {
    $conn = new PDO("mysql:host=".$dbHost.";dbname=".$dbName, $dbUser, $dbPass);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $conn->setAttribute(PDO::ATTR_PERSISTENT, true);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
     $e->getMessage();
     exit();
}
?>
