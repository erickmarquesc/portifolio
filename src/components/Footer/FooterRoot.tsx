import { ReactNode } from "react";

interface IFooterRoot {
  children: ReactNode
}
export function FooterRoot({ children }: IFooterRoot) {
  return (
    <footer>
      {children}
    </footer>
  )
}
