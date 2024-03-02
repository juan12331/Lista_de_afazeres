const input = document.getElementById("input");
const  ADDbutton = document.getElementById("adicionar");
// const adicionarTexto = document.getElementById("adicionarTexto") 


ADDbutton.addEventListener("click", () => {
    if (input.value == ''){
        window.alert("insira algo no input");
    } else{
        console.log(input.value); // <-- pegar o valor escrito no input
        var text = document.createElement("div");
        var RemoveButton = document.createElement("button");
        RemoveButton.textContent = "Remover";
        text.innerText = input.value;
        text.appendChild(RemoveButton);
        document.body.appendChild(text);
        input.value = '';
    }
    RemoveButton.addEventListener('click', () =>{
        text.remove();
    })
});
