import { landHTML } from "./landmarks.js";
import { useLandObject } from "./landmarksData.js";

export const landList = () => {
    const targetContent = document.querySelector(".container__russia")

    const objectList = useLandObject()


    let HTMLrepresentation = ""
    for (const russiaObj of objectList) {
        HTMLrepresentation += landHTML(russiaObj)
}

targetContent.innerHTML += `
    ${HTMLrepresentation}
`
}