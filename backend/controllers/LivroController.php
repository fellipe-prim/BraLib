<?php

class LivroController
{

    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function listar()
    {
        $stmt = $this->pdo->query("SELECT * FROM livro");
        $livros = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $livros;
    }

    public function buscarPorId(int $id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM livro WHERE id = :id");

        $stmt->bindValue(":id", $id, PDO::PARAM_INT);
        $stmt->execute();

        $livro = $stmt->fetch(PDO::FETCH_ASSOC);

        return $livro;
    }

    public function cadastrar(array $dados)
    {
        // Validação do titulo
        $dados["titulo"] = trim($dados["titulo"] ?? "");

        if (empty($dados["titulo"])) {
            throw new InvalidArgumentException("O título é obrigatório");
        }

        // Validação do tamanho do título
        if (mb_strlen($dados["titulo"]) > 200) {
            throw new InvalidArgumentException(
                "O título deve ter no máximo 200 caracteres"
            );
        }

        // Validação do autor
        $dados["autor"] = trim($dados["autor"] ?? "");

        if (empty($dados["autor"])) {
            throw new InvalidArgumentException("O autor é obrigatório");
        }

        // Validação do tamanho do autor
        if (mb_strlen($dados["autor"]) > 150) {
            throw new InvalidArgumentException(
                "O autor deve ter no máximo 150 caracteres"
            );
        }

        // Validação do preço
        if (
            !isset($dados["preco"]) ||
            !is_numeric($dados["preco"]) ||
            $dados["preco"] < 0 ||
            $dados["preco"] > 99999999.99 // limite do banco
        ) {
            throw new InvalidArgumentException("Preço inválido");
        }

        // Formatação do preço
        $dados["preco"] = number_format((float) $dados["preco"], 2, ".", "");

        // Validação da descrição (opcional)
        $dados["descricao"] = trim($dados["descricao"] ?? "");

        if ($dados["descricao"] === "") {
            $dados["descricao"] = null;
        }

        $sql = "INSERT INTO livro (titulo, autor, descricao, preco)
            VALUES (:titulo, :autor, :descricao, :preco)";

        $stmt = $this->pdo->prepare($sql);

        $stmt->bindValue(":titulo", $dados["titulo"], PDO::PARAM_STR);
        $stmt->bindValue(":autor", $dados["autor"], PDO::PARAM_STR);
        $stmt->bindValue(
            ":descricao",
            $dados["descricao"],
            $dados["descricao"] === null ? PDO::PARAM_NULL : PDO::PARAM_STR
        );
        $stmt->bindValue(":preco", $dados["preco"]);

        $stmt->execute();

        return $this->pdo->lastInsertId();
    }
}
