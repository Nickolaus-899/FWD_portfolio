import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime)

const button = document.getElementById("button-for-api") as HTMLButtonElement
const titleElement = document.getElementById("title") as HTMLParagraphElement
const imgElement = document.getElementById("image") as HTMLImageElement
const dateElement = document.getElementById("date") as HTMLParagraphElement
const releasedElement = document.getElementById("released") as HTMLParagraphElement

const email: string = 'n.petukhov@innopolis.university'

interface Joke {
    alt: string,
    day: number,
    img: string,
    month: number,
    safe_title: string,
    year: number,
}

type ID = string

button.addEventListener("click", async () => {
    const params1: URLSearchParams = new URLSearchParams()
    params1.append('email', email)

    const id: ID = await fetch(`https://fwd.innopolis.university/api/hw2?` + params1.toString())
        .then(r => r.json());

    const params2: URLSearchParams = new URLSearchParams()
    params2.append('id', id)

    const res: Response = await fetch('https://fwd.innopolis.university/api/comic?' + params2.toString())
    const data: Joke = await res.json()

    const { month, year, day, safe_title, img, alt } = data

    titleElement.textContent = safe_title
    dateElement.textContent = "Date: " + day + ":" + month + ":" + year

    releasedElement.textContent = "Released: " + dayjs(new Date(year, month, day)).fromNow()

    imgElement.src = img
    imgElement.alt = alt
})