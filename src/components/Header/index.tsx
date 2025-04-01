import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-between items-center pt-2">
      <ul className="md:flex gap-2 hidden">
        <li>Início</li>
        <li>Início</li>
        <li>Início</li>
      </ul>
      <Image
        src="/logo.svg"
        alt="Next.js logo"
        width={80}
        height={80}
        className="h-auto w-20"
        priority
      />
      <button className="bg-[#4B2DBB] text-white px-4 py-1 rounded-lg">
        Work Flow
      </button>
    </header>
  )
}