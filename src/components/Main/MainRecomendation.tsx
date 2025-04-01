export function MainRecomendation() {
  return (
    <section className="flex flex-col justify-center items-center gap-6 ">
      <h1 className="font-extrabold text-4xl">O que falam sobre meu trabalho</h1>
      <a href="https://www.linkedin.com/in/erickmarquescabral/details/recommendations/?detailScreenTabIndex=0" target="_blank" className="underline underline-offset-4">
        Recomendações feitas no Linkdin, confira clicando aqui.
      </a>
      <div className="flex gap-2 items-start">
        <div className="flex flex-col gap-2">
          <div className="border border-0.5 p-5 flex flex-col gap-3 rounded-xl border-[#19191A] bg-[#050505] max-w-96">
            <h1 className="text-[#FF5B50] font-bold">Jean Lima</h1>
            <p className="text-justify">
              Erick além de um ótimo e completo profissional, é uma pessoa extremamente comunicativa e solícita,
              sempre se coloca a disposição para ajudar o time no que for preciso.
              Atende muito bem demandas de desenvolvimento e design. Foi um prazer trabalhar em projetos com ele.
            </p>
            <h2 className="text-sm font-light border-t pt-2">Em 10 de dezembro de 2024, Jean era sênior em relação a Erick, mas não supervisionava Erick diretamente.</h2>
          </div>

          <div className="border border-0.5 p-5 flex flex-col gap-3 rounded-xl border-[#19191A] bg-[#050505] max-w-96">
            <h1 className="text-[#FF5B50] font-bold">Merylane Estrela</h1>
            <p className="text-justify">
              O Erick é dedicado e resiliente e não se deixa vencer pelas adversidades. Trabalhamos lado a lado no setor de tecnologia e informação durante meses.
              O Erick sempre tratou os colegas de trabalho com simplicidade e empatia. Destaca-se pela sua proatividade e criatividade.
              Guardo excelentes memórias dos tempos em que trabalhamos juntos e não hesito em recomendar o Erick para qualquer função no universo da tecnologia.
            </p>
            <h2 className="text-sm font-light border-t pt-2">Em 28 de setembro de 2023, Merylane trabalhava com Erick na mesma equipe</h2>
          </div>
        </div>

        <div className="border border-0.5 p-5 flex flex-col gap-3 rounded-xl border-[#19191A] bg-[#050505] max-w-96 h-auto">
          <h1 className="text-[#FF5B50] font-bold">Alan Silva</h1>
          <p className="text-justify">
            É com grande satisfação que recomendo o Erick, com quem tive o privilégio de trabalhar na Incentiveme.
            Durante nosso tempo juntos, Erick demonstrou como programador suas habilidades técnicas que fizeram diferença em nosso ambiente
            de trabalho, entregando soluções inovadoras e cumprindo prazos rigorosos.
            A empresa que estiver em busca de um profissional confiável e talentoso para sua equipe, não hesite em considerar Erick.
            Ele é um programador dedicado e altamente competente, cujo compromisso com a excelência é evidente em seu trabalho diário.
          </p>
          <h2 className="text-sm font-light border-t pt-2">Em 3 de outubro de 2023, Alan trabalhava com Erick na mesma equipe</h2>
        </div>
      </div>
    </section>
  )
}