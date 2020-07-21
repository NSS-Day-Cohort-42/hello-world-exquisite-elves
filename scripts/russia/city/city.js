export const citiesHTML = (russiaObj) => {
    return `
        <section class="country__list">
            <h3 class="country__listTitle">Cities</h3>
                <ul>
                    <li>${russiaObj.city.first}</li>
                    <li>${russiaObj.city.second}</li>
                    <li>${russiaObj.city.third}</li>
                </ul>
        </section>
`
}