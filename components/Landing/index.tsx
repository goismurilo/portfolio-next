export default function Landing() {
    return (
        <>
            <div className="bg-accent-dark bg-cover bg-background-landing h-auto p-2 2xl:py-80">
                {/* <div className="flex-1 w-80"> */}
                <div className="container mx-auto items-center py-10 md:py-40 ">
                    <span className="py-3 px-5 bg-second-dark text-white rounded-md">Olá! Eu sou o...</span>
                    <h1 className="py-2 mt-2 text-5xl text-white font-bold">Murilo Gois</h1>
                    <strong className="py-2 text-white">Desenvolvedor FullStack</strong>
                    <p className="mt-4 py-3 w-96 text-white">Eu sou desenvolvedor FullStack,
                        atualmente trabalho com C# principalmente
                        e curso o último semestre da faculdade de ADS(IFBA).
                        Seja muito bem-vindo e qualquer dúvida ou sugestão
                        me mande mensagem nas minhas redes sociais. Abraços!
                    </p>
                </div>

            </div>
        </>
    );
}