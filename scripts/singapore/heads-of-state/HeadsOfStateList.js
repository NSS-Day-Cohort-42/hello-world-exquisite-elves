import { useHos } from "./HeadsOfStateDataProvider.js"
import { hosToHTML } from "./HeadsOfStateHTML.js"



export const hosList = () =>{

    const contentElement = document.querySelector(".hos__list")

    const hosArr = useHos()

    hosArr.forEach(hos => {
        const hosHTMLrep = hosToHTML(hos)

        contentElement.innerHTML += `${hosHTMLrep} `
    });

}