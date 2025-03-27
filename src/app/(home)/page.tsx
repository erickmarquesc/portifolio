'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export interface IGitHubRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
}

export default function Home() {

  const icons = [
    { alt: "rocket icon", src: "rocket" },
    { alt: "estacio icon", src: "estacio" },
    { alt: "ux icon", src: "ux" },
    { alt: "uistart icon", src: "uistart" },
    { alt: "ignite icon", src: "ignite" },
  ]

  const iconsTecs = [
    { name: "React", src: "react" },
    { name: "Node.js", src: "node" },
    { name: "Next.js", src: "next" },
    { name: "Vite", src: "vite" },
    { name: "JavaScript", src: "javaScript" },
  ]

  const [repos, setRepos] = useState<IGitHubRepo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Erro ao buscar os repositórios");
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          throw new Error("Os dados retornados não são válidos.");
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    };
    fetchRepos();
  }, []);

  const formtDateRepo = (repoDate: string) => {
    const date = new Date(repoDate);
    const formattedDate = date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="max-w-2xl text-center flex flex-col gap-8 mt-8">

          <h1 className="font-inconsolata text-xl font-light md:text-2xl">Hello World! Meu nome é <strong className="text-[#E3646E]">Erick Marques</strong> e sou</h1>

          <h1 className="font-asap md:text-5xl text-3xl font-bold">Desenvolvedor Full-stack</h1>

          <p className="font-maven-pro text-sm font-light">
            Transformo necessidades em aplicações reais, envolventes e funcionais.
            Desenvolvo sistemas através da minha paixão pela tecnologia,
            contribuindo com soluções inovadoras e eficazes para desafios complexos.
          </p>

        </div>

        <Image
          src="/cracha.svg"
          alt="Next.js logo"
          width={327}
          height={80}
          className="h-auto"
          priority
        />
      </div>

      <main className="flex flex-col gap-12 justify-between">
        <section className="flex flex-col gap-12">
          <div className="flex justify-between">

            <p className="text-lg max-w-96 text-justify">
              Em toda minha jornada, sempre me dediquei a fazer o meu melhor,
              buscando não apenas construir um bom currículo, mas também desenvolver
              minhas soft skills e hard skills de forma contínua.
            </p>
            <h1 className="text-5xl max-w-3xl font-bold font-poppins">
              Veja a jornada <br /> da minha vida <span className="text-[#FF5B50]">PROFISSIONAL</span><br /> e <span className="text-[#FF5B50]">ACADÊMICA</span>
            </h1>

          </div>
          <div className="flex">
            {icons.map((icon) => (
              <Image
                key={icon.src}
                src={`/iconsCourses/${icon.src}.svg`}
                alt={icon.alt}
                width={88}
                height={80}
                className="h-auto w-20"
                priority
              />
            ))}
          </div>
        </section>

        <section className="flex justify-between">
          <section className="bg-[#10101E] border-2 border-[#1E1E2C] px-5 py-10 rounded-lg max-w-3xl flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-4">
                <h1 className="font-extrabold px-3 py-2 rounded-full max-w-52 flex justify-center text-sm bg-gradient-to-r from-[#0d918f] via-[#4d39a1] to-[#901cc3]">ACEITANDO PROPOSTAS</h1>
                <h1 className="font-normal text-3xl">Um pouco mais sobre mim</h1>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center">
                <button className="bg-[#5354FD] px-8 py-4 rounded-sm">Enviar um proposta</button>
                <a>Baixar Currículo</a>
              </div>
            </div>
            <p className="text-justify font-light">
              Sou um desenvolvedor com sólida experiência em desenvolvimento web, atuando com metodologias ágeis como Scrum e Sprint.
              Possuo habilidades em tecnologias como React, TypeScript, JavaScript, Java, Next.js e Tailwind, além de experiência com o
              consumo de APIs e criação de sistemas completos com operações CRUD. Tenho forte foco em UX/UI, garantindo interfaces intuitivas,
              responsivas e funcionais para entregar a melhor experiência ao usuário, sempre priorizando qualidade e eficiência no desenvolvimento.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <h1 className="font-bold">Habilidades técnicas:</h1>
              <li className="font-light">Design: UX e UI.</li>
              <li className="font-light">Backend: Next.js, Prisma;</li>
              <li className="font-light">Ferramentas de Design: Figma;</li>
              <li className="font-light">Controle de Versão: Git e GitHub;</li>
              <li className="font-light">Frontend: React, TypeScript, Tailwind CSS, HTML, CSS;</li>
              <li className="font-light">Desenvolvimento Ágil: Metodologias ágeis e boas práticas de commit;</li>
            </ul>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <h1 className="font-bold">Destaques:</h1>
              <li className="font-light text-justify">Criação de uma plataforma interativa e informativa para um condomínio, com funcionalidades para visualização de despesas e gestão de informações administrativas, incluindo relatórios detalhados.</li>
              <li className="font-light text-justify">Liderança em projetos colaborativos com foco em transparência e inovação tecnológica.</li>
              <li className="font-light text-justify">Experiência direta com stakeholders para implementar funcionalidades que trazem valor para os usuários finais.</li>
            </ul>
            <h1 className="font-bold">O que me motiva:</h1>
            <p className="text-justify font-light">
              Criar experiências digitais impactantes e funcionais, trabalhar em equipe, resolver problemas de forma criativa e aprender continuamente com as novas tendências da tecnologia.
            </p>
            <h1 className="font-bold">Tecnologias</h1>
            <div className="flex justify-between">
              {iconsTecs.map((icon) => (
                <div className="flex items-center gap-2 bg-[#181826] px-2 py-1 rounded-full" key={icon.src}>
                  <Image
                    key={icon.src}
                    src={`/icons/${icon.src}.svg`}
                    alt={icon.name}
                    width={88}
                    height={80}
                    className="h-auto w-6"
                    priority
                  />
                  <strong>{icon.name}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-md">
            <Image
              src="/githubheader.svg"
              alt="Next.js logo"
              width={327}
              height={80}
              className="h-auto mx-auto"
              priority
            />
            <div className="flex items-center justify-between border-t-1 py-2">
              <h1>Meus projetos:</h1>
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/githubicon.svg"
                  alt="Next.js logo"
                  width={40}
                  height={80}
                  className="h-auto w-10"
                  priority
                />
                <span>Ver tudo</span>
              </div>
            </div>

            <ul className="gap-10 flex flex-col">
              {repos.slice(0, 6).map((repo) => (
                <li key={repo.id} className="border-r-4 border-black pr-1 hover:border-blue-700">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <div className="flex justify-between items-center mb-2">
                      <h1 className=" bg-blue-700 px-2 py-1 rounded-sm w-40">
                        {repo.name}
                      </h1>
                      <strong>updated: {formtDateRepo(repo.updated_at)}</strong>
                    </div>
                    <p className="text-justify">
                      {repo.description}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>

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
      </main>
    </section>
  );
}
