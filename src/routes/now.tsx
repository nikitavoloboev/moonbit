import { A } from "@solidjs/router"
import Nav from "~/components/Nav"
import PageWrap from "~/components/PageWrap"

export default function Now() {
  return (
    <PageWrap>
      <Nav activePage={"Now"} />
      <p>
        <A href="../projects">Building ideas</A> &amp; completing my{" "}
        <a href="https://wiki.nikiv.dev/focusing/goals">goals</a> to live a{" "}
        <a href="https://wiki.nikiv.dev/future/">better future</a>.
      </p>
      <p>
        Writing monthly{" "}
        <a href="https://wiki.nikiv.dev/looking-back/">look backs</a> reflecting
        on what I worked &amp; thought about.
      </p>
      {/* <p>
        Currently spending time in Saint Petersburg.{" "}
        <a href="https://twitter.com/nikitavoloboev">Say 👋</a>.
      </p> */}
    </PageWrap>
  )
}
