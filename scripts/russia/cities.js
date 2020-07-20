export const citiesHTML = (russiaObj) => {
    return `
        <section class="list__1">
            <h3>Cities</h3>
                <ul>
                    <li>${russiaObj.city.first}</li>
                    <li>${russiaObj.city.second}</li>
                    <li>${russiaObj.city.third}</li>
                </ul>
        </section>
`
}