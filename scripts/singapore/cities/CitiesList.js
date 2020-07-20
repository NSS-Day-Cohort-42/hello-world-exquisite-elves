import { useCities } from "./CitiesDataProvider.js"
import { cityToHTML } from "./CitiesHTML.js"



export const citiesList = () =>{

    const contentElement = document.querySelector(".cities__list")

    const cityArr = useCities()

    cityArr.forEach(city => {
        const cityHTML = cityToHTML(city)

        contentElement.innerHTML += ` ${cityHTML} `
    });

}