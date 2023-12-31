import Nav from "~/components/Nav"
import PageWrap from "~/components/PageWrap"
import IndexContent from "~/mdx/index.md"

// TODO: import from mdx
export default function Home() {
  return (
    <PageWrap>
      <Nav activePage={"About"} />
      <IndexContent />
    </PageWrap>
  )
}
