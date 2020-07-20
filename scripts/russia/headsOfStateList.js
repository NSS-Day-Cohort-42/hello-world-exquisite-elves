import { stateHTML } from "./headsOfState.js";
import { useStateObject } from "./headsOfStateDataProvider.js";

export const stateList = () => {
    const targetContent = document.querySelector(".container")

    const objectList = useStateObject()


    let HTMLrepresentation = ""
    for (const russiaObj of objectList) {
        HTMLrepresentation += stateHTML(russiaObj)
}

targetContent.innerHTML += `
    ${HTMLrepresentation}
`
}