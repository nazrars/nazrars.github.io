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
observer.observe(document.querySelector('.sentinal'));
