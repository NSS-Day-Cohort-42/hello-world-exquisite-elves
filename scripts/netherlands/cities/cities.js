import { useCities } from "./citiesDataProvider.js";
import { citiesAsHTML } from "./citiesHTMLConverter.js";

export const citiesList = () => { 
    const contentElement = document.querySelector(".cities__list")

    const cities = useCities()

    let citiesHTMLRep = ""
    for (const city of cities) { 
        citiesHTMLRep += citiesAsHTML(city)
    }

    contentElement.innerHTML += `
    <h3 class="country__listTitle">Cities</h3>
        ${citiesHTMLRep}
    `
}