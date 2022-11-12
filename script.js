function operacao() {
    let inputs = document.querySelectorAll('.input')
    console.log(inputs);

    let result = document.querySelector(".resultado")
    let select = document.querySelector('.select')
   
    let index_select = select.options.selectedIndex

    if (select.options[index_select].innerHTML == '+') {
        result.innerText = parseInt(inputs[0].value) + parseInt(inputs[1].value)
    } else {

    }
}

function calcular() {
    var button = document.getElementById('calcular')

    button.addEventListener('click', () => {
        operacao()
    })
}
calcular()