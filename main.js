const getCategories = () => {
    fetch('https://opentdb.com/api_category.php')
        .then(res => res.json())
        .then(res => insertCategories(res))
        .then(res => expandContainers())
        .then(res => optionsListener())
        .catch(res => console.log(res))
}

const insertCategories = (data) => {
    document.querySelector('#options-container').innerHTML =
        `
        ${data['trivia_categories'].map((category) => {
            return `
        <div class="settings__option">
                <input type="radio" name="category" id="${category['id']}" class="settings__radio" />
                <label for="${category['id']}">${category['name']}</label>
        </div>`
        }).join('')}
    `

    return document.querySelectorAll('.settings__option')
}

const expandContainers = () => {
    document.querySelectorAll('.settings__selected').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.settings__options-container')
                .forEach(container => {
                    if (container != option.previousElementSibling) {
                        container.classList.remove('active')
                    }
                })
            option.previousElementSibling.classList.toggle('active')
        })
    })
}

const optionsListener = () => {
    document.querySelectorAll('.settings__option')
        .forEach(option => {
            option.addEventListener('click', () => {
                option.parentElement.classList.remove('active')
                option.parentElement.nextElementSibling.innerHTML = option.lastElementChild.innerHTML
                option.parentElement.nextElementSibling.id = option.firstElementChild.id
            })
        })
}

getCategories()
const mainContainer = document.querySelector('main.container')
const toSettingsButton = document.querySelector('#to-settings')

toSettingsButton.addEventListener('click', (event) => {
    mainContainer.classList.add('to-settings')
})  