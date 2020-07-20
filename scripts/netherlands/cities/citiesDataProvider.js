const citiesCollection = [ 
    
    {
        name: "Amsterdam",
    },
    {
        name: "Rotterdam", 
    },
    {
        name: "The Hague",
    },
]

export const useCities = () => { 
    return citiesCollection.slice()
}