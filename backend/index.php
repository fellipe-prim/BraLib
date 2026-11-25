<?php
header("Access-Control-Allow-Origin: http://localhost:5173"); // comunicação com o frontend React
header("Access-Control-Allow-Credentials: true"); // envio dos cookies de sessão
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); // métodos HTTP permitidos
header("Access-Control-Allow-Headers: Content-Type"); // envio do cabeçalho JSON

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

session_start();

require_once __DIR__ . "/config/database.php";
require_once __DIR__ . "/controllers/LivroController.php";
require_once __DIR__ . "/controllers/UsuarioController.php";

header("Content-Type: application/json; charset=utf-8");

$livroController = new LivroController($pdo);
$usuarioController = new UsuarioController($pdo);
$metodo = $_SERVER["REQUEST_METHOD"];
$rota = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

if ($rota === "/livros" && $metodo === "POST") {
    $json = file_get_contents("php://input");
    $dados = json_decode($json, true);

    if (!is_array($dados)) {
        http_response_code(400);
        echo json_encode(["erro" => "JSON inválido"]);
        exit;
    }

    try {
        $id = $livroController->cadastrar($dados);
        http_response_code(201);

        echo json_encode([
            "mensagem" => "Livro cadastrado com sucesso",
            "id" => $id
        ]);
    } catch (InvalidArgumentException $e) {
        http_response_code(400);
        echo json_encode(["erro" => $e->getMessage()]);
        exit;
    }

} elseif ($rota === "/livros" && $metodo === "GET") {
    $id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);

    // ID informado, mas inválido
    if ($id === false || ($id !== null && $id <= 0)) {
        http_response_code(400);

        echo json_encode(["erro" => "ID inválido"], JSON_UNESCAPED_UNICODE);
        exit;

    // ID válido: busca um livro específico
    } elseif ($id !== null) {
        $livro = $livroController->buscarPorId($id);

        if ($livro === false) {
            http_response_code(404);

            echo json_encode(["erro" => "Livro não encontrado"], JSON_UNESCAPED_UNICODE);
            exit;
        }

        echo json_encode($livro, JSON_UNESCAPED_UNICODE);

    // Nenhum ID informado: lista todos os livros
    } else {
        $livros = $livroController->listar();

        echo json_encode($livros, JSON_UNESCAPED_UNICODE);
    }
} elseif ($rota === "/usuarios" && $metodo === "POST") {
    $json = file_get_contents("php://input");
    $dados = json_decode($json, true);

    if (!is_array($dados)) {
        http_response_code(400);
        echo json_encode(["erro" => "JSON inválido"]);
        exit;
    }

    // Cadastro do usuário
    try {
        $id = $usuarioController->cadastrar($dados);

        http_response_code(201);

        echo json_encode([
            "mensagem" => "Usuário cadastrado com sucesso",
            "id" => $id
        ]);
    } catch (InvalidArgumentException $e) {
        http_response_code(400);
        echo json_encode(["erro" => $e->getMessage()]);
    }
} elseif ($rota === "/login" && $metodo === "POST") {
    $json = file_get_contents("php://input");
    $dados = json_decode($json, true);

    if (
        !is_array($dados) ||
        empty($dados["email"]) ||
        empty($dados["senha"])
    ) {
        http_response_code(400);
        echo json_encode(["erro" => "Informe o e-mail e a senha"]);
        exit;
    }

    try {
        $usuario = $usuarioController->login($dados);

        session_regenerate_id(true);
        $_SESSION["usuario"] = $usuario;

        echo json_encode($usuario);
    } catch (InvalidArgumentException $e) {
        http_response_code(401);
        echo json_encode(["erro" => $e->getMessage()]);
    }
}