import {fetchUrl} from "./fetcher.ts";
import {findUrls} from "./parser.ts"
import Scraper from "./core.ts"

fetchUrl('https://google.com').then((body) => console.log(body));
