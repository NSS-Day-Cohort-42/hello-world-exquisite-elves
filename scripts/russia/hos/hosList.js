import { stateHTML } from "./hos.js";
import { useStateObject } from "./hosData.js";

export const stateList = () => {
    const targetContent = document.querySelector(".list__container")

    const objectList = useStateObject()


    let HTMLrepresentation = ""
    for (const russiaObj of objectList) {
        HTMLrepresentation += stateHTML(russiaObj)
}

targetContent.innerHTML += `
    ${HTMLrepresentation}
`
}