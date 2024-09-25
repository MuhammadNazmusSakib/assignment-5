function fieldValueById(id) {
    const inputValue = document.getElementById(id).innerText
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}


function inputFieldValueById(id) {
    const inputValue = document.getElementById(id).value

    digits = '0123456789.'
    let decimalCount = 0
    for (let i = 0; i <inputValue.length; i++) {
        if (!digits.includes(inputValue[i])) {
            return NaN
        }

        if (inputValue[i] === '.') {
            decimalCount++
        }
        
        if (decimalCount > 1) {
            return NaN
        }
    }
    let inputNumber = Math.floor(inputValue)
    return inputNumber
}

