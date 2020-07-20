const stateObject = [
    {
    headsOfState: { first: "Vladimir Putin", second: "Dmitry Medvedev", third: "Boris Yeltsin" }
    }
];

export const useStateObject = () => {
    return stateObject.slice()
}