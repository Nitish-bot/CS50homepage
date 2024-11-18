document.addEventListener("DOMContentLoaded", () => {

    const heroText = document.getElementById('hero-tcontainer');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            Array.from(heroText.children).forEach((el) => el.classList.toggle('show-h', entry.isIntersecting));
        });
    });

    observer.observe(heroText);


    const whyt = document.getElementById('whyt');
    const why = document.getElementById('why');
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            Array.from(why.children).forEach((el) => el.classList.toggle('show-w', entry.isIntersecting));
            whyt.classList.toggle('show-w', entry.isIntersecting);
        });
    });

    observer2.observe(why);

    // const cards = document.getElementsByClass("card");

    // const observer3 = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry);
    //         entry.classList.toggle('show-w', entry.isIntersecting);
    //     });
    // });
    // cards.forEach((card) => observer3.observe(card));

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry);
    //         entry.target.classList.toggle('show', entry.intersectionRatio > 0);
    //     });
    // });
    // const heroText = document.getElementById('hero-tcontainer');
    // Array.from(heroText.children).forEach((el) => observer.observe(el));
});
