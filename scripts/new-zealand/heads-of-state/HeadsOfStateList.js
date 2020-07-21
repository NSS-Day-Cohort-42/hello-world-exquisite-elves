import { arrayOfHeadsOfStateCopy } from "./HeadsOfStateDataProvider.js"
import { HeadsOfStateList } from "./HeadsOfStateHTMLConverter.js";


export const addHeadsOfStateToDOM = (countryDataArray, selector, htmlStructure) => {
    const contentTarget = document.querySelector(selector)

     countryDataArray.forEach(
         headOfStateObject => {
             contentTarget.innerHTML += htmlStructure(headOfStateObject)
         }
     );
 }


 export const headsOfStateList = () => {
     const HeadsOfStateArray = arrayOfHeadsOfStateCopy()
     const headOfStateSelector = ".head-of-state__list"
     const htmlStructure = HeadsOfStateList

     addHeadsOfStateToDOM(HeadsOfStateArray, headOfStateSelector, htmlStructure )
 }