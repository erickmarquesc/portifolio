import Image from "next/image";

export default function Home() {

  const icons = [
    { alt: "rocket icon", src: "rocket" },
    { alt: "estacio icon", src: "estacio" },
    { alt: "ux icon", src: "ux" },
    { alt: "uistart icon", src: "uistart" },
    { alt: "ignite icon", src: "ignite" },
  ]
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
          priority
        />
      </div>

      <main className="flex flex-col gap-12 justify-between">
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
              priority
            />
          ))}
        </div>
      </main>

      <footer>
        <h1> eu sou o footer</h1>
      </footer>
    </section>
  );
}
