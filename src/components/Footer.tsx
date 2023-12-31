export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "block",
          height: "1px",
          border: 0,
          "border-top": "1px solid #ccc",
          margin: "1em 0",
          padding: 0,
        }}
      ></div>
      <div class="flex flex-col text-2xl items-center gap-3 md:grid md:grid-flow-col">
        <a href="https://twitter.com/nikitavoloboev">X</a>
        <a href="https://github.com/nikitavoloboev">GitHub</a>
        <a href="https://instagram.com/nikitavoloboev">Instagram</a>
        <a href="https://open.spotify.com/user/nikitavoloboev">Spotify</a>
        <a href="https://www.youtube.com/channel/UCEKqrUfr_FMKIO9XSJS4vDw">
          YouTube
        </a>
        <a href="https://t.me/niki_log">Telegram</a>
      </div>
      <div
        style={{
          width: "5%",
          "margin-top": "20px",
          "margin-left": "auto",
          "margin-right": "auto",
        }}
      >
        <a href="https://github.com/nikitavoloboev/nikiv.dev">
          <img src="./github.svg" />
        </a>
      </div>
    </>
  )
}
