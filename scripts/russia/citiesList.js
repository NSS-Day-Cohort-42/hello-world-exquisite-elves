import { citiesHTML } from "./cities.js";
import { useCitiesObject } from "./citiesDataProvider.js";

export const citiesList = () => {
    const targetContent = document.querySelector(".container")

    const objectList = useCitiesObject()


    let HTMLrepresentation = ""
    for (const russiaObj of objectList) {
        HTMLrepresentation += citiesHTML(russiaObj)
}

targetContent.innerHTML += `
    ${HTMLrepresentation}
`
}