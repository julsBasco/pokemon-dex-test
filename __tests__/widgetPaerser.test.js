import { widgetParser } from "@/app/lib/widgetPaerser";

const widgets = [
    {
        title: "Pokemon colours",
        subtitle: "List of all the colours",
        type: "list",
        api: "https://pokeapi.co/api/v2/pokemon-color/"
    },
    {
        title: "Pokemon Gender",
        subtitle: "List of all the genders",
        type: "list",
        api: "https://pokeapi.co/api/v2/gender/"
    },
]


const falseType = [
    {
        title: "Pokemon colours",
        subtitle: "List of all the colours",
        type: "lists",
        api: "https://pokeapi.co/api/v2/pokemon-color/"
    },
    {
        title: "Pokemon Gender",
        subtitle: "List of all the genders",
        type: "lists",
        api: "https://pokeapi.co/api/v2/gender/"
    },
]

test('returns an array', () => {
    expect(widgetParser(widgets)).toBeTruthy()
})


test('will not render undefined types', () => {
    expect(widgetParser(falseType)).toBeTruthy()
})
