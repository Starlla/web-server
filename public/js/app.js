console.log('javascript file')

const fetchData= (location) =>{
  fetch('http://localhost:3000/weather?search='+location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
        messageTwo.textContent = ''
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forcastData
      }
  
    })
  })
}


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value
  fetchData(location)
})