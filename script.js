function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Jorge Posando para a foto no cruzeiro")
  } else {
    //se não estiver com light mode, matem a mesma imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt")
  }
}