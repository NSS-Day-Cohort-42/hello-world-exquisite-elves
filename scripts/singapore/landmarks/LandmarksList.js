import { useLandmarks } from "./LandmarksDataProvider.js"
import { landmarkToHTML } from "./LandmarksHTML.js"



export const landmarkList = () =>{

    const contentElement = document.querySelector(".landmark__list")

    const landmarkArr = useLandmarks()

    landmarkArr.forEach(landmark => {
        const landmarkHTML = landmarkToHTML(landmark)

        contentElement.innerHTML += ` ${landmarkHTML} `
    });

}