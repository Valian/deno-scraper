export async function fetchUrl(url: string): Promise<string> {
    return (await fetch(url)).body.text()
}
