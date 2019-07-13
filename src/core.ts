import {fetchUrl} from "./fetcher.ts";
import {findUrls} from "./parser.ts"

const MAX_CONCURRENCY = 20

export async function fetchUrls(startingUrl: string): Promise<string[]> {
    const inProgress: Promise<string[]>[] = []
    const newUrls: string[] = []
    const visitedUrls = new Set<string>()

    newUrls.push(startingUrl)
    while(newUrls.length > 0 || inProgress.length > 0) {
        while (newUrls.length > 0 && inProgress.length < MAX_CONCURRENCY) {
            const url = newUrls.pop()
            const p = processUrl(url)
            processAndRemove(p, inProgress)
            p.then(urls => urls.forEach(u => !visitedUrls.has(u) && visitedUrls.add(u) && newUrls.push(u)))
        }

        await Promise.race(inProgress)
    }
    return Array.from(visitedUrls)
}

async function processAndRemove(p: Promise<any>, inProgress: Promise<any>[]) {
    inProgress.push(p)
    const result = await p
    inProgress.splice(inProgress.indexOf(p), 1)
    return result
}

async function processUrl(url: string): Promise<string[]> {
    console.log(`Fetching ${url}`)
    try {
        const html = await fetchUrl(url)
        const urls = findUrls(html)
        console.log(`Fetched ${url} - found ${urls.length} urls`)
        return urls
    } catch(e) {
        console.error(`Failed to fetch ${url}`)
        return []
    }

}
