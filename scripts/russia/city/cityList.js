import { citiesHTML } from "./city.js";
import { useCitiesObject } from "./cityData.js";

export const citiesList = () => {
    const targetContent = document.querySelector(".container__russia")

    const objectList = useCitiesObject()


    let HTMLrepresentation = ""
    for (const russiaObj of objectList) {
        HTMLrepresentation += citiesHTML(russiaObj)
}

targetContent.innerHTML += `
    ${HTMLrepresentation}
`
}