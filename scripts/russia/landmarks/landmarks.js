export const landHTML = (russiaObj) => {
    return `
         <section class="list__2">
            <h3>Landmarks</h3>
                <ul>
                    <li>${russiaObj.landmarks.first}</li>
                     <li>${russiaObj.landmarks.second}</li>
                     <li>${russiaObj.landmarks.third}</li>
                </ul>
        </section>
`
}