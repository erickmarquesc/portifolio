import Image from "next/image";

export function HeroSection() {
  return (
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
  )
}