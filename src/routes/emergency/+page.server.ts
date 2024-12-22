export const load = async (event) => {
    const id = event.url.searchParams.get('id')
    console.log(id)
    return {
        id
    }
}