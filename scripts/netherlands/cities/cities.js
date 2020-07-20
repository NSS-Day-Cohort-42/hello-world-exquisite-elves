import { useCities } from "./citiesDataProvider.js";
import { citiesAsHTML } from "./citiesHTMLConverter.js";

export const citiesList = () => { 
    const contentElement = document.querySelector(".country__list")

    const cities = useCities()

    let citiesHTMLRep = ""
    for (const city of cities) { 
        citiesHTMLRep += citiesAsHTML(city)
    }

    contentElement.innerHTML += `
    <section class="country__list">
        ${citiesHTMLRep}
    </section>
    `
}