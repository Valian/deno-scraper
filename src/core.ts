export default class Scraper {

    private visitedUrls: Set<string>;

    constructor(private startingUrl: string) {}

    async fetchUrls(): Promise<string[]> {
        return Promise.resolve([])
    }
}
