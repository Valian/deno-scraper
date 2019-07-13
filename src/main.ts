import {fetchUrls} from "./core.ts"

fetchUrls('https://schema.org/').then(urls =>
    console.log(urls)
)
