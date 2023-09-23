const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", (event) => {
  event.preventDefault() //previne o evento, não recarrega a pagina

  const videoURL = input.value

  // o INCLUDES verifica que a palavra esta inclusiva, se contém no videoURL
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parecer ser um short.")
  }

  // slipt divide o texto
  const [_, params] = videoURL.split("/shorts/")
  console.log(params)
  const [videoID] = params.split("?si")
  console.log(videoID)

  content.textContent = "Obtendo o texto do áudio ..."
})
