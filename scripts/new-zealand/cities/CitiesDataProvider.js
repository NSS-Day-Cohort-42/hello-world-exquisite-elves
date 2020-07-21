const arrayOfCities = [
    {
        city: "Christchurch"
    },
    {
        city: "Auckland"
    },
    {
        city: "Wellington"
    },
    {
        city: "Dunedin"
    },
]

export const arrayOfCitiesCopy = () => {
    return arrayOfCities.slice()
}