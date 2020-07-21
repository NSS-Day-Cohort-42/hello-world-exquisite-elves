import { arrayOfCitiesCopy } from "./CitiesDataProvider.js"
import { CityList } from "./CitiesHTMLConverter.js";


export const addCitiesToDOM = (countryDataArray, selector, htmlStructure) => {
    const contentTarget = document.querySelector(selector)

     countryDataArray.forEach(
         cityObject => {
             contentTarget.innerHTML += htmlStructure(cityObject)
         }
     );
 }


 export const citiesList = () => {
     const cityArray = arrayOfCitiesCopy()
     const citySelector = ".city__list"
     const htmlStructure = CityList

     addCitiesToDOM(cityArray, citySelector, htmlStructure )
 }