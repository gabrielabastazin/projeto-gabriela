function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./projeto-gabs/avatar-light.png");
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, sem acessórios no rosto além do óculos de grau, com camiseta preta e fundo em gradiente roxo e azul"
    );
  } else {
    img.setAttribute("src", "./projeto-gabs/avatar.png");
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo usando um óculos de sol, com camiseta preta e fundo em gradiente roxo e azul."
    );
  }
}

//ou pode-se usar o html.classList.toggle(light)//
