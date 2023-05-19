console.log('Prompt JS connected!')
// alert('Hello World!')
const showAlert = () => {
    alert('Hello World!')
}

const askSomething = () => {
    const decision = confirm('Are you doing it?')
    console.log(decision)
    if (decision === true) {
        alert("You're most welcome!")
    }
    else {
        alert('Go to hell!')
    }
}

const getUserInfo = () => {
    const name = prompt('Write down your name please: ')
    if (!!name) {
        alert(name)
    }
    else {
        alert('Empty!')
    }
}