const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const description = document.querySelector(".description");
const modalcontainer = document.querySelector(".modalcontainer");
const link = document.querySelector(".button1")

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        modalcontainer.classList.add("open");
        original.classList.add("open");

        //Dynamic
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./assets/${originalSrc}`
        const altText = preview.alt;
        caption.textContent = altText;
        const desc = preview.getAttribute("data-description");
        description.textContent = desc;
        const linknew = preview.getAttribute("linkto");
        link.href = `./${linknew}`
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        modalcontainer.classList.remove("open");
        original.classList.remove("open");


    }
});