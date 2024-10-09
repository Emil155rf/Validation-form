const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/
const lastNameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputAll = document.querySelector('.feedback__input')
const reset = document.querySelector('.reset')
const myForm = document.getElementById('myForm')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let inp3 = document.querySelector('.inp3')
let inp4 = document.querySelector('.inp4')
let span = document.querySelector('.span-number')
let span2 = document.querySelector('.span-number-2')
let span3 = document.querySelector('.span-number-3')
let span4 = document.querySelector('.span-number-4')


let sub = document.querySelector('.feedback__arrow')




sub.onclick = function (e) {
    e.preventDefault()
    if (!validate(nameRegex, inp1.value) || inp1.value.length <= 1) {
        notValid(inp1, span, 'Проверка не пройдена')
    } else {
        Valid(inp1, span, '')
    } if (!validate(regex, inp2.value)) {
        notValid(inp2, span2, 'Проверка не пройдена')
    } else {
        Valid(inp2, span2, '')
    } if (!validate(lastNameRegex, inp3.value) || inp3.value.length <= 1) {
        notValid(inp3, span3, 'Проверка не пройдена')
    } else {
        Valid(inp3, span3, '')
    }  if (!validate(emailRegex, inp4.value)) {
        notValid(inp4, span4, 'Проверка не пройдена')
    } else {
        Valid(inp4, span4, '')
    }

    
}

function clear() {
    reset.addEventListener('click', () => {
        myForm.reset()
    })
}

clear()



function validate(val1, val2) {
    return val1.test(val2)
}


function notValid(inp2, el, mess) {
    el.innerHTML = mess
}
function Valid(inp2, el, mess) {
    el.innerHTML = mess
}


function clickEnter(val1, val2) {
    val1.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            val2.click()
        }
    })
}


clickEnter(myForm, sub)

