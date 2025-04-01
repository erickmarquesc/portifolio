import Image from "next/image";

export function MainJourney() {
  const icons = [
    { alt: "rocket icon", src: "rocket" },
    { alt: "estacio icon", src: "estacio" },
    { alt: "ux icon", src: "ux" },
    { alt: "uistart icon", src: "uistart" },
    { alt: "ignite icon", src: "ignite" },
  ]

  return (
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
  )
}