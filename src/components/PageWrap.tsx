import Footer from "./Footer"
import { JSX } from "solid-js"

interface Props {
  children: JSX.Element
  noFooter?: boolean
}

export default function PageWrap({ children, noFooter }: Props) {
  return (
    <article class="p-5 md:p-0 container w-full mx-auto prose prose-sm md:prose dark:prose-dark mt-5">
      {children}
      {!noFooter && <Footer />}
    </article>
  )
}
