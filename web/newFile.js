import { server } from "./server.js"
import { form, content, input } from "./form.js"

form.addEventListener("submit", async (event) => {
  event.preventDefault() //previne o evento, não recarrega a pagina
  content.classList.add("placeholder")

  const videoURL = input.value

  // o INCLUDES verifica que a palavra esta inclusiva, se contém no videoURL
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parecer ser um short.")
  }

  // slipt divide o texto
  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do áudio ..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Realizando o resumo ..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = summary.data.result
  content.classList.remove("placeholder")
})
