<?php

$config = parse_ini_file(__DIR__ . "/../.env");

$host = $config["DB_HOST"];
$dbname = $config["DB_NAME"];
$user = $config["DB_USER"];
$password = $config["DB_PASSWORD"];

$pdo = new PDO(
    "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
    $user,
    $password
);