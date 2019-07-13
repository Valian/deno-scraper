export function findUrls(html: string): string[] {
    const urls = html.match(/\bhttps?:\/\/[^">< ]+/gi) || []
    return urls.filter(u => u.length < 30);
}
