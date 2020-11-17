// DOM Elements
const optionsContainer = document.querySelector('#options-container')
const optionsContainers = document.querySelectorAll('.settings__options-container')
const optionSelected = document.querySelectorAll('#selected')

console.log(optionSelected)
console.log(optionsContainers)
// Due the use of an async funtion to retrieve the data
// This var initialize empty and then inside the async function 
// It is filled
var optionsList

async function getCategories(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        // Filling the select box with dinamic data
        optionsContainer.innerHTML = `
            ${data['trivia_categories'].map((category) => {
            return `
               <div class="settings__option">
                    <input type="radio" name="category" id="${category['id']}" class="settings__radio" />
                    <label for="${category['id']}">${category['name']}</label>
               </div>`
        }).join('')}
        `

        // Getting all category options
        optionsList = document.querySelectorAll('.settings__option')

        optionsList.addEventListener('click', () => {
            console.log('Hola')
        })
    }
    catch (error) {
        console.log(error)
    }
}

// Adding event listener 
optionSelected.forEach(option => {
    option.addEventListener('click', () => {
        optionsContainers.forEach(container => {
            if (container != option.parentElement.firstElementChild)
                container.classList.remove('active')
        })
        option.parentElement.firstElementChild.classList.toggle('active')
    })
})

getCategories('https://opentdb.com/api_category.php')
const mainContainer = document.querySelector('main.container')
const toSettingsButton = document.querySelector('#to-settings')

toSettingsButton.addEventListener('click', (event) => {
    mainContainer.classList.add('to-settings')
})  