import "./aboutPage.css";

const content = document.getElementById("content");

const aboutPage = () => {
    content.innerHTML = "";

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("about-title-container");
    content.appendChild(titleContainer);

    const title = document.createElement("h1");
    title.classList.add("about-title");
    title.textContent = "theMinimalRestaurant";
    titleContainer.appendChild(title);

    const subtitle = document.createElement("h2");
    subtitle.classList.add("about-subtitle");
    subtitle.textContent = "The place where food sooth your soul";
    titleContainer.appendChild(subtitle);

    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = `At theMinimalRestaurant, we believe in the power of simplicity. Our culinary philosophy revolves around the principle of "less is more," where restraint guides every decision, from ingredient selection to plate presentation.
            We meticulously source the finest, seasonal ingredients, prioritizing quality over quantity. Each dish is a carefully composed symphony of flavors, textures, and aromas, celebrating the unique character of each ingredient. We strive to showcase the inherent beauty and integrity of every element, allowing its natural flavors to shine through.
            Our menu is a reflection of this philosophy, featuring thoughtfully curated dishes that prioritize quality over abundance. We believe that true culinary artistry lies in highlighting the essence of each ingredient, rather than overwhelming it with excessive embellishments.
            At theMinimalRestaurant, we invite you to embark on a culinary journey of restraint. Experience the profound satisfaction of savoring exceptional flavors and appreciating the beauty of simplicity.`
    content.appendChild(paragraph);


    const contactButton = document.createElement("button");
    contactButton.classList.add("contact-button");
    contactButton.textContent = "Click here to contact us";
    content.appendChild(contactButton);

    const contactMessage = document.createElement("p");
    contactMessage.classList.add("contact-message");
    contactMessage.textContent = "Unfortunately, we do not take complaints at the moment.";
    content.appendChild(contactMessage);

    contactButton.addEventListener("click", () => {
        contactMessage.classList.toggle("active");
    })

}

export default aboutPage;