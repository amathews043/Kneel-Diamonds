import { getTypes, setType } from"./database.js"

const types = getTypes()

export const typesHTML = () => {
    let html = `<article class="typeOfJewelry" name="type">`
    const list = types.map(type => {
        return `<input type="radio" value="${type.id}" name="type"> ${type.name}`
    })

    html += list.join("")
    html += "</article>"

    return html
}

document.addEventListener(
    "change", (changeEvent) => {
        if (changeEvent.target.name === "type") {
            setType(parseInt(changeEvent.target.value)) } 
    }
)

