import PageWrap from "~/components/PageWrap"
import Nav from "~/components/Nav"
import { createSignal } from "solid-js"

// TODO: focus on input when page loads
// TODO: style it nicely
// TODO: use https://github.com/LyraSearch/lyra
// TODO: search over everything, best include the search at `/`
// this page is for experiments
export default function Search() {
  const [text, setText] = createSignal("")

  return (
    <PageWrap noFooter>
      <Nav activePage={"Search"} />
      <div class="mt-1">
        <input
          onInput={(e) => {
            setText(e.currentTarget.value)
          }}
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </PageWrap>
  )
}
