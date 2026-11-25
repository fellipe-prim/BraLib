<?php

class UsuarioController
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function cadastrar(array $dados)
    {

        if (
            empty(trim($dados["nome"] ?? "")) ||
            empty(trim($dados["email"] ?? "")) ||
            empty($dados["senha"])
        ) {
            throw new InvalidArgumentException("Preencha todos os campos");
        }

            $nome = $dados["nome"];
            $email = $dados["email"];
            $senha = password_hash($dados["senha"], PASSWORD_DEFAULT);

            $sql = "INSERT INTO usuario (nome, email, senha)
            VALUES (:nome, :email, :senha)";

            $stmt = $this->pdo->prepare($sql);

            $stmt->bindValue(":nome", $nome);
            $stmt->bindValue(":email", $email);
            $stmt->bindValue(":senha", $senha);

            $stmt->execute();

            return $this->pdo->lastInsertId();
    }

    public function login(array $dados)
    {
        $sql = "SELECT * FROM usuario WHERE email = :email";

        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(":email", $dados["email"]);
        $stmt->execute();

        $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$usuario || !password_verify($dados["senha"], $usuario["senha"])) {
            throw new InvalidArgumentException("E-mail ou senha inválidos");
        }

        return [
            "id" => $usuario["id"],
            "nome" => $usuario["nome"],
            "email" => $usuario["email"],
            "nivel_acesso" => $usuario["nivel_acesso"]
        ];
    }
}