export function FooterBody() {
  return (
    <section className="flex justify-between items-center border-t border-0.5 border-gray-500">
      <div className="">
        <h1>Entre em contato</h1>
        <h1 className="text-[#FF5B50] font-bold">Direto por WhatisApp para suporte</h1>
        <div className="bg-[#5A5757] w-96 justify-between flex items-center pl-5 rounded-sm">
          <strong>+55 21 976818468</strong>
          <button className="text-black p-5 bg-white">Iniciar converça</button>
        </div>
      </div>

      <div className="flex border-l border-0.5 border-gray-500 pl-80 gap-30 py-4">
        <div>
          <h1 className="text-gray-600">Empresa</h1>
          <ul className="flex flex-col gap-2">
            <li>RocketSeat</li>
            <li>Universidade Estacio</li>
            <li>UX Unicórnio</li>
            <li>UI Start</li>
            <li>Six Creative</li>
            <li>Incentive.me</li>
            <li>Satel Brasil</li>
            <li>Empy</li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-600">Links</h1>
          <ul className="flex flex-col gap-2">
            <li>www.rocketseat.com.br</li>
            <li>Universidade Estacio</li>
            <li>www.uxunicornio.vip</li>
            <li>www.uiexpert.com.br</li>
            <li>www.sixcreative.com.br</li>
            <li>www.incentive.me</li>
            <li>www.satel-sa.com.br</li>
            <li>www.empy.com.br</li>
          </ul>
        </div>
      </div>

    </section>
  )
}