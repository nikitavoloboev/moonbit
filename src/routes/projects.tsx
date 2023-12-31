import Nav from "~/components/Nav"
import PageWrap from "~/components/PageWrap"
// @ts-ignore
import ProjectsContent from "~/mdx/projects.md"

export default function Projects() {
  return (
    <PageWrap>
      <Nav activePage={"Projects"} />
      <ProjectsContent />
    </PageWrap>
  )
}
