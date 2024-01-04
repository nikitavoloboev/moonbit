import Nav from "~/components/Nav"
import PageWrap from "~/components/PageWrap"
import NowContent from "~/mdx/now.md"

export default function Now() {
  return (
    <PageWrap>
      <Nav activePage={"Now"} />
      <NowContent />
    </PageWrap>
  )
}
