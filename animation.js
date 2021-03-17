document.addEventListener('DOMContentLoaded', () => {
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1,
    {width: '100%'}, 
    {width: '0%', delay: 2, ease: Expo.easeInOut})
    
    .fromTo('.navbar', 0.7,
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.pokedex', 0.9,
    {y: -50, opacity: 0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

})