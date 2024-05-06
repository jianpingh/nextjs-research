/*
export default function Page() {
    return <h1>Hello, Dashboard!</h1>
}
*/


async function getData() {
    await new Promise((resolve) =>setTimeout(resolve, 3000))
    return {
        message: 'Hello, Dashboard!',
    }
}
export
default async function DashboardPage(props) {
    const {
        message
    } = await getData()
    return < h1 > {
        message
    } < /h1> }
