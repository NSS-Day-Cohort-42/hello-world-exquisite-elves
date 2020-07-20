const landmarkCollection = [ 
    
    {
        name: "Dam Square",
    },
    {
        name: "Boekhandel Dominicanen", 
    },
    {
        name: "Brouwersgratch",
    },
]

export const useLandmarks = () => { 
    return landmarkCollection.slice()
}