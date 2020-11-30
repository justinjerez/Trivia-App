const mainContainer = document.querySelector('main.container')

// Transition to the setting section
document.querySelector('#to-settings')
    .addEventListener('click', () => {
        mainContainer.classList.remove('to-quiz')
        mainContainer.classList.add('to-settings')
    })


// Transition to the quiz
document.querySelector('#start')
    .addEventListener('click', (event) => {
        mainContainer.classList.remove('to-settings')
        mainContainer.classList.add('to-quiz')
    })

