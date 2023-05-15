const botaoAlterarTema = document.querySelector("#botao-alterar-tema")

const body = document.querySelector("body") //pode selecionar uma tag

const imagemBotaoTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroAtivo) {// verificação se no body contém a class

        //body.classList.remove("modo-escuro") substituidos por toggle
        imagemBotaoTema.setAttribute("src", "./src/imagens/sun.png")

    } else {

        //body.classList.add("modo-escuro") substituidos por toggle

        imagemBotaoTema.setAttribute("src", "./src/imagens/moon.png") //setamos ao atributo src a imagem lua

    }
})