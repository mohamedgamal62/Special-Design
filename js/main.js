// landing background page 
let page = document.querySelector(".landing")
let backgroundInterval ;
let backgroundOption = true

let photosArr = ["01.jpg" , "02.jpg" , "03.jpg" , "04.jpg" , "05.jpg"]

function BackgroundsChange () {
    if (backgroundOption === true) {
            backgroundInterval = setInterval (() => {
    let randomPage = Math.floor(Math.random() * photosArr.length)
    page.style.backgroundImage = `url("photos/${photosArr[randomPage]}")`

},3000) 
    }
}
BackgroundsChange()
//settings 
let buttonSettings = document.querySelector(".settings .toggle i")
let Settings = document.querySelector(".settings")
buttonSettings.addEventListener("click" , () => {
    buttonSettings.classList.toggle("fa-spin")
    Settings.classList.toggle("open")
})

// colors list
let colorli = document.querySelectorAll(".settings-container .colors li")
colorli.forEach(li => {
    li.addEventListener("click" , (el) => {
        document.documentElement.style.setProperty('--main-color' , el.target.dataset.color)
        localStorage.setItem("color-option" , el.target.dataset.color)
        colorli.forEach(li => {
            li.classList.remove("active")
        })
        el.target.classList.add("active")
    })
})

// add colors to localstorge
let mainColors = localStorage.getItem("color-option")
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color-option"))
            colorli.forEach(li => {
            li.classList.remove("active")
            if (li.dataset.color === mainColors){
                li.classList.add("active")
            }
        })
}

//Random Backgrounds list 
let randomBackgrounds = document.querySelectorAll(".settings-container .Backgrounds span")

randomBackgrounds.forEach(span => {
    span.addEventListener("click" , (el) => {
        randomBackgrounds.forEach(span => {
            span.classList.remove("active")
        })
        el.target.classList.add("active")

        if (el.target.dataset.Background === 'yes') {
            backgroundOption = true
            BackgroundsChange()
        }else {
            backgroundOption = false
            clearInterval(backgroundInterval)
        }
    })
})