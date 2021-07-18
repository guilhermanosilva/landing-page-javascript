const btnSubmit = document.querySelector("button[type='submit']")
const form = document.querySelector('#form')
const modal = document.querySelector('.modal')

form.addEventListener('submit', e => {
  e.preventDefault()

  if (!isEmptyLocalStorage()) {
    alert('Você já está cadastrado!')
    return
  }

  saveInLocalStorage()
  showModal()
})

const saveInLocalStorage = () => {
  const inputName = document.querySelector("#input-name").value
  const inputEmail = document.querySelector("#input-email").value

  const data = {
    name: inputName,
    email: inputEmail,
  }

  localStorage.setItem('login', JSON.stringify(data))
}

const isEmptyLocalStorage = () => {
  if (localStorage.getItem('login')) {
    return false
  }
  return true
}

const showModal = () => {
  const userName = document.querySelector('#user-name')
  const userEmail = document.querySelector('#user-email')

  const data = getFromLocalStorage()

  userName.innerText = data.name
  userEmail.innerText = data.email

  modal.style.display = 'flex'
}

const getFromLocalStorage = () => {
  const data = localStorage.getItem('login')

  return JSON.parse(data)
}

modal.addEventListener('click', (e) => {
  if (e.target.className == 'modal') {
    modal.style.display = 'none'
  }
})