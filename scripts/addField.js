// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// quando clicar no botão 

// executar uma ação 
function cloneField() {
    // duplicar os campos -> que campo?
    // Node se refere a elementos do html
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // seleciona tds valores que estão nos campos de tipo input
    const fields = newFieldContainer.querySelectorAll('input')
    // limpar os campos de fields
    fields.forEach(function(field) {
        // pegar o field e limpa
        field.value - ""
    })

    // colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(fields)
}