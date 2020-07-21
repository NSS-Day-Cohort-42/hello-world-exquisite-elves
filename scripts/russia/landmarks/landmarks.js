export const landHTML = (russiaObj) => {
    return `
         <section class="country__list">
            <h3 class="country__listTitle">Landmarks</h3>
                <ul>
                    <li>${russiaObj.landmarks.first}</li>
                     <li>${russiaObj.landmarks.second}</li>
                     <li>${russiaObj.landmarks.third}</li>
                </ul>
        </section>
`
}