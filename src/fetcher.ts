export async function fetchUrl(url: string): Promise<string> {
    const result = await fetch(url)
    const body = result.body.text()
    return body
}
