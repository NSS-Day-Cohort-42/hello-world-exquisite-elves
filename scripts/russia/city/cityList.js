import { citiesHTML } from "./city.js";
import { useCitiesObject } from "./cityData.js";

export const citiesList = () => {
    const targetContent = document.querySelector(".list__container")

    const objectList = useCitiesObject()


    let HTMLrepresentation = ""
    for (const russiaObj of objectList) {
        HTMLrepresentation += citiesHTML(russiaObj)
}

targetContent.innerHTML += `
    ${HTMLrepresentation}
`
}