import { onMount } from "solid-js"

export default function Thanks() {
  onMount(async () => {
    location.href = "https://github.com/sponsors/nikitavoloboev"
  })
  return <></>
}
