export function findUrls(html: string): string[] {
    return html.match(/\bhttps?:\/\/\S+/gi);
}
