const input = document.getElementById("input");
const  ADDbutton = document.getElementById("adicionar");
// const adicionarTexto = document.getElementById("adicionarTexto") 

const addBotao = () => {
    console.log(input.value) // <-- pegar o valor escrito no input
    const text = document.createElement("div")
    const RemoveButton = document.createElement("button")
    RemoveButton.textContent = "Remover"
    text.innerText = input.value
    text.appendChild(RemoveButton)
    document.body.appendChild(text)
    input.value = ''
}



const adicionar_elemento = (texto) => {
    // adicionarTexto.innerText = texto
}

ADDbutton.addEventListener("click", () => {
    if (input.value == ''){
        window.alert("insira algo no input");
    } else{
    addBotao()
    }
})