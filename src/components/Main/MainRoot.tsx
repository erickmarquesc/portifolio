import { ReactNode } from "react"

interface IMainRoot {
  children: ReactNode
}

export function MainRoot({ children }: IMainRoot) {
  return (
    <main className="flex flex-col gap-12 justify-between">
      {children}
    </main>
  )
}