document.getElementById('btn_add_name').addEventListener('click', function () {
    const nameField = document.getElementById('name_field')
    const nameValue = nameField.value
    localStorage.setItem('Name', nameValue)
})

document.getElementById('btn_add_age').addEventListener('click', function () {
    const ageField = document.getElementById('age_field')
    const ageValue = ageField.value
    localStorage.setItem('Age', ageValue)
})

const removeName = () => {
    localStorage.removeItem('Name')
}

const removeAge = () => {
    localStorage.removeItem('Age')
}

const clearAll = () => {
    localStorage.clear()
}

