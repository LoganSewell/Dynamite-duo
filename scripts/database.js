const database = {
    heroes: [
        {
            id: 1,
            name: "Spider-Man",
            power: "Spider Like Powers"
        },
        {
            id: 2,
            name: "Quick Silver",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Goblin",
            power: "Strength"
        },
        {
            id: 2,
            name: "Ultron",
            power: "Robot Strength"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}
export {database}