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


fetch("data.json")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(country=>{
            let countryDiv = document.createElement("div")
            countryDiv.innerHTML = `
                <img src="${country.flags.png}" alt = "Flag for ${country.name}" >
                <h2> ${country.name} </h2>
                <p> Population: ${country.population}  </p>
                <p> Capital: ${country.capital } </p>
    
            `
            allCountriesDiv.append(countryDiv)
        })
    })