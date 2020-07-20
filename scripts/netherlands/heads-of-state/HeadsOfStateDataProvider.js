const headsOfStateCollection = [ 
    
    {
        name: "Mark Rutte",
    },
    {
        name: "Hugo de Jonge", 
    },
    {
        name: "Kajsa Ollongren",
    },
]

export const useHeadsOfState = () => { 
    return headsOfStateCollection.slice()
}