import Nav from "~/components/Nav"
import PageWrap from "~/components/PageWrap"
import LikesContent from "~/mdx/likes.md"

export default function Likes() {
  return (
    <PageWrap>
      <Nav activePage={"Likes"} />
      <LikesContent />
    </PageWrap>
  )
}
