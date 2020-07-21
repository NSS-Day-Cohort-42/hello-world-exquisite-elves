export const stateHTML = (russiaObj) => {
    return `
        <section class="country__list">
            <h3 class="country__listTitle">Heads of State</h3>
                <ul>
                    <li>${russiaObj.headsOfState.first}</li>
                    <li>${russiaObj.headsOfState.second}</li>
                    <li>${russiaObj.headsOfState.third}</li>
                </ul>
        </section>
`
}