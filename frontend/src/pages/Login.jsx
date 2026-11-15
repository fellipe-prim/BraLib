function Login() {
  return (
    <main className="min-h-screen bg-[#111111] text-zinc-200 flex items-center justify-center px-6">
      <section className="w-full max-w-md py-16">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-5">
            BraLib Account
          </p>

          <h1 className="text-4xl font-light mb-4">Bem-vindo de volta.</h1>

          <p className="text-sm text-zinc-500">
            Entre na sua conta para continuar.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-zinc-400 mb-3">E-mail</label>

            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full bg-[#1b1b1b] border border-zinc-800 px-5 py-4 text-white placeholder:text-zinc-600 outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400 mb-3">Senha</label>

            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full bg-[#1b1b1b] border border-zinc-800 px-5 py-4 text-white placeholder:text-zinc-600 outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 text-sm font-medium hover:bg-zinc-300 transition-colors cursor-pointer"
          >
            Entrar
          </button>
        </form>
        

        <p className="text-center text-sm text-zinc-500 mt-8">
          Ainda não tem uma conta?{" "}
          <span className="text-white hover:text-zinc-300 cursor-pointer">
            Criar conta
          </span>
        </p>
      </section>
    </main>
  );
}

export default Login;
