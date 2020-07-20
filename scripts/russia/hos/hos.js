export const stateHTML = (russiaObj) => {
    return `
        <section class="list__3">
            <h3>Heads of State</h3>
                <ul>
                    <li>${russiaObj.headsOfState.first}</li>
                    <li>${russiaObj.headsOfState.second}</li>
                    <li>${russiaObj.headsOfState.third}</li>
                </ul>
        </section>
`
}