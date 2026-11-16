
<?php

require_once __DIR__ . "/config/database.php";
require_once __DIR__ . "/controllers/LivroController.php";

header("Content-Type: application/json; charset=utf-8");

$controller = new LivroController($pdo);

$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

// ID informado, mas inválido
if ($id === false || ($id !== null && $id <= 0)) {
    http_response_code(400);

    echo json_encode(["erro" => "ID inválido"], JSON_UNESCAPED_UNICODE);
    exit;

// ID válido: busca um livro específico
} elseif ($id !== null) {
    $livro = $controller->buscarPorId($id);

    if ($livro === false) {
        http_response_code(404);

        echo json_encode(["erro" => "Livro não encontrado"], JSON_UNESCAPED_UNICODE);
        exit;
    }

    echo json_encode($livro, JSON_UNESCAPED_UNICODE);

// Nenhum ID informado: lista todos os livros
} else {
    $livros = $controller->listar();

    echo json_encode($livros, JSON_UNESCAPED_UNICODE);
}
