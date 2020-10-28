import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', event => {
        event.preventDefault()
        const plant = document.querySelector('input').value
        const response = axios.get(`https://trefle.io/api/v1/plants?token=QMoYTqrtuXFuatJhMzVfG1L_e6C_J9_sVNaDovTMrtQ&q=${plant}`)
        console.log(response.data)
    })
})