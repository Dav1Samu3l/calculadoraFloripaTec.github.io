





function operacao() {
    let inputs = document.querySelectorAll('.input')
    let result = document.querySelector(".resultado")
    let select = document.querySelector('.select')
    let value = inputs
    let index_select = select.options.selectedIndex

    if (select.options[index_select].innerHTML == '+') {
        result.innerText = parseInt(value[0]) + parseInt(value[1])
    } else {

    }
}


function calcular() {
    let button = document.getElementById('calcular')

    button.addEventListener('click', () => {
        operacao()
    })
}
calcular()
console.log(operacao());