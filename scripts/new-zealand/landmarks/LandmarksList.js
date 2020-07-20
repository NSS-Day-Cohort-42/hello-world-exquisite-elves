import { arrayOfLandmarksCopy } from "./LandmarksDataProvider.js"
import { LandmarksList } from "./LandmarksHTMLConverter.js";


export const addLandmarksToDOM = (countryDataArray, selector, htmlStructure) => {
    const contentTarget = document.querySelector(selector)

     countryDataArray.forEach(
         headOfStateObject => {
             contentTarget.innerHTML += htmlStructure(headOfStateObject)
         }
     );
 }


 export const theLandmarksList = () => {
     const HeadsOfStateArray = arrayOfLandmarksCopy()
     const headOfStateSelector = ".landmarks__list"
     const htmlStructure = LandmarksList

     addLandmarksToDOM(HeadsOfStateArray, headOfStateSelector, htmlStructure )
 }