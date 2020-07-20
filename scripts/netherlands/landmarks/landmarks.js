import { useLandmarks } from "./landmarksDataProvider.js";
import { landmarkAsHTML } from "./landmarksHTMLConverter.js";

export const landmarkList = () => { 
    const contentElement = document.querySelector(".landmark__list")

    const landmarks = useLandmarks()

    let landmarkHTMLRep = ""
    for (const landmark of landmarks) { 
        landmarkHTMLRep += landmarkAsHTML(landmark)
    }

    contentElement.innerHTML += `
    <h3 class="landmark__listTitle">Landmarks</h3>
        ${landmarkHTMLRep}
    `
}