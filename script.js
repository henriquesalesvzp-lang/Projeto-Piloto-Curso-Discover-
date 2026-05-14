function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto light mode")
  } else {
    img.setAttribute("alt", "Foto dark mode")
  }
}

/*Troca da imagem do avatar
substituir a imagem
pegar a tag da imagem
se eu tiver light mode, adicionar a imagem light
se eu tiver sem light mode, manter a imagem normal */
