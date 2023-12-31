import { A } from "@solidjs/router"

interface Props {
  activePage: string
}

export default function Nav({ activePage }: Props) {
  return (
    <>
      <h1>{activePage}</h1>
      <div class="nav-line">
        {activePage !== "About" && (
          <A class="nav-link" href="/">
            About
          </A>
        )}
        {activePage !== "Projects" && (
          <A class="nav-link" href="/projects">
            Projects
          </A>
        )}
        <a class="nav-link" href="https://wiki.nikiv.dev">
          Wiki
        </a>
        {activePage !== "Likes" && (
          <A class="nav-link" href="/likes">
            Likes
          </A>
        )}
        {activePage !== "Now" && (
          <A class="nav-link" href="/now">
            Now
          </A>
        )}
        <a class="nav-link" href="https://github.com/nikitavoloboev/ama">
          AMA
        </a>
        <a
          rel="external"
          class="nav-link"
          href="https://www.linkedin.com/in/nikitavoloboev"
        >
          CV
        </a>
        {/* TODO: link once I build a nice CV in web, not just .pdf | interactive and nice */}
        {/* <a rel="external" class="nav-link" href="./cv.pdf">
          CV
        </a> */}
        <a class="nav-link" href="https://github.com/sponsors/nikitavoloboev">
          ♥️
        </a>
      </div>
    </>
  )
}
