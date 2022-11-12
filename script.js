





function operacao() {
    const inputs = document.querySelectorAll('.input')
    const result = document.querySelector(".resultado")
    const select = document.querySelector('.select')
    const value_input = inputs
    const index_select = select.options.selectedIndex

    if (select.options[index_select].innerHTML == '+') {
        result.innerText = parseInt(value_input[0]) + parseInt(value_input[1])
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
