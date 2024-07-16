const themeChanger = document.querySelector("#theme-changer")
const header = document.querySelector("header")
const main = document.querySelector("main")


themeChanger.addEventListener("click", ()=>{
    if(header.classList.contains("light")){
        header.classList.remove("light")
        header.classList.add("dark")
        main.classList.remove("light")
        main.classList.add("dark")
    }else{
        header.classList.remove("dark")
        header.classList.add("light")
        main.classList.remove("dark")
        main.classList.add("light")
    }
})


const allCountriesDiv = document.querySelector(".countries")
let allCountries = []

fetch("data.json")
    .then(res=>res.json())
    .then(data=>{
        renderCountries(data)
        allCountries = data
    })

function renderCountries(data){
    allCountriesDiv.innerHTML =""
    data.forEach(country=>{
        let countryDiv = document.createElement("div")

        if(country.region.split(" ").length>1){
            countryDiv.classList.add(country.region.split(" ").join(""))
        }else{
            countryDiv.classList.add(country.region)
        }
        
        countryDiv.classList.add("nchi")
        countryDiv.innerHTML = `
            <img src="${country.flags.png}" alt = "Flag for ${country.name}" >
            <h2> ${country.name} </h2>
            <p> Population: ${country.population}  </p>
            <p> Capital: ${country.capital } </p>
            <p> Region: <span> ${country.region} <span> <p>
        
        `
        allCountriesDiv.append(countryDiv)
    })
}


const filterButtons = document.querySelectorAll("#regions button")

filterButtons.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        let region = e.target.textContent
        region = region + ""
        console.log(region);
        let filteredCountries = allCountries.filter(country=>country.region.toLowerCase() ===region.toLowerCase())
        renderCountries(filteredCountries)
    })

})

document.getElementById("searchForm").addEventListener("submit", (e)=>{
    e.preventDefault()
    let searchWord = document.getElementById("search").value
    let filteredCountries = allCountries.filter(country=>country.name.toLowerCase().startsWith(searchWord.toLowerCase()) )
    renderCountries(filteredCountries)
})

document.getElementById("search").addEventListener("keyup", (e)=>{
    e.preventDefault()
    let searchWord = document.getElementById("search").value
    let filteredCountries = allCountries.filter(country=>country.name.toLowerCase().startsWith(searchWord.toLowerCase()) )
    renderCountries(filteredCountries)
})