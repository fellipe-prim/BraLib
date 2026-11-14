function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 flex flex-col md:flex-row items-center gap-16">

        {/* Texto principal */}
        <div className="w-full md:w-1/2">
          <div className="w-16 h-px bg-zinc-500 mb-8" />

          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">
            BraLib Book Store
          </p>

          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Descubra sua
            <br />
            próxima leitura.
          </h1>

          <p className="text-zinc-400 leading-8 max-w-md">
            Explore histórias, descubra novos autores e encontre
            livros que vão transformar sua próxima leitura.
          </p>
        </div>

        {/* Imagem principal */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/foto1.jpg"
            alt="Livros em destaque"
            className="w-full h-[480px] object-cover"
          />
        </div>

      </section>
    </main>
  );
}

export default Home;