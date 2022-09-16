// initialize variables
const input = document.getElementById('input')
const myForm = document.getElementById('form')
const todos = document.getElementById('todos')


myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addNewTodo()

})


function addNewTodo() {
    if (input !== "") {
        console.log('proceed')

        // add newTodo
        const newTodos = document.createElement('li')
        newTodos.innerHTML = input.value
        todos.appendChild(newTodos)
        

        // try to use for loops

        // const inputs = input.value
        // inputs.forEach(inp => {
        //     todos.innerHTML += `
        //     <li>
        //         ${inputs}
        //     </li>
        // `
        // });

        

        // pending todos



        // delete todos


        // myForm.reset()
    } else {
        console.log('please fill in the form')
    }

    myForm.reset()

}




















