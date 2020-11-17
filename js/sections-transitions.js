const mainContainer = document.querySelector('main.container')
const toSettingsButton = document.querySelector('#to-settings')

toSettingsButton.addEventListener('click', (event) => {
    mainContainer.classList.add('to-settings')
})  