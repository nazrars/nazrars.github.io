import { Resume } from './resume.graphql'


/*
 * Observing if scrolled
 */

// create the observer
const observer = new IntersectionObserver(entries => {
    // entries is an array of observed dom nodes
    // we're only interested in the first one at [0]
    // because that's our .sentinal node.
    // Here observe whether or not that node is in the viewport
    document.body.classList.toggle('scrolled', !entries[0].isIntersecting);
});

// give the observer some dom nodes to keep an eye on
observer.observe(document.querySelector('.sentinal') as HTMLElement);


const SPACE = "y5q3314w81ij";
const ACCESS_TOKEN = "hIhiDXWQxfTiuh6AVgsJzHXrPxej92E9AWbyVF-G6uI";

const variables = {
    preview: false,
    locale: 'en',
    person: "Andreas Lindberg"
};

const query = `
    `.trim();

fetch(`https://graphql.contentful.com/content/v1/spaces/${SPACE}`, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    mode: "cors",
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});
