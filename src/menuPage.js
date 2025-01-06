import "./menuPage.css";


const content = document.getElementById("content");
const menuPage = () => {
	content.innerHTML = "";

	const titleContainer = document.createElement("div");
	titleContainer.classList.add("menu-title-container");
	content.appendChild(titleContainer);

	const title = document.createElement("h1");
	title.classList.add("menu-title");
	title.textContent = "theMenu";
	titleContainer.appendChild(title);

	const subtitle = document.createElement("h2");
	subtitle.classList.add("menu-subtitle");
	subtitle.textContent = "True elegance lies in simplicity. Experience a culinary journey that transcends the ordinary, where each dish is a testament to the beauty of restraint.";
	titleContainer.appendChild(subtitle);

	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");
	content.appendChild(menuContainer);

	const menuItems = [{
		svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16,10L15.8,11H13.5A0.5,0.5 0 0,0 13,11.5A0.5,0.5 0 0,0 13.5,12H15.6L14.6,17H12.5A0.5,0.5 0 0,0 12,17.5A0.5,0.5 0 0,0 12.5,18H14.4L14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20L9,15H10.5A0.5,0.5 0 0,0 11,14.5A0.5,0.5 0 0,0 10.5,14H8.8L8,10C8,8.8 8.93,7.77 10.29,7.29L8.9,5.28C8.59,4.82 8.7,4.2 9.16,3.89C9.61,3.57 10.23,3.69 10.55,4.14L11,4.8V3A1,1 0 0,1 12,2A1,1 0 0,1 13,3V5.28L14.5,3.54C14.83,3.12 15.47,3.07 15.89,3.43C16.31,3.78 16.36,4.41 16,4.84L13.87,7.35C15.14,7.85 16,8.85 16,10Z" /></svg>`,
		name: "theCarrot",
		description: "it's a carrot",
		price: "$14.650"
	}, {
		svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5,14.5A7.5,7.5 0 0,1 12,22A7.5,7.5 0 0,1 4.5,14.5C4.5,10.36 7.86,2 12,2C16.14,2 19.5,10.36 19.5,14.5Z" /></svg>`,
		name: "theEgg",
		description: "it's an egg",
		price: "$22.222"
	}, {
		svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M8,18H12V14H8V18Z" /></svg>`,
		name: "theSliceOfBread",
		description: "it's a slice of bread",
		price: "$6587"
	}, {
		svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 12.77A2 2 0 0 1 15.86 10.12A5 5 0 0 0 13.04 2.12A5.74 5.74 0 0 0 12 2A5 5 0 0 0 7 7A5 5 0 0 0 8.11 10.12A2 2 0 0 1 8 12.72A5.5 5.5 0 0 0 10.81 21.87A5.42 5.42 0 0 0 12 22A5.5 5.5 0 0 0 16 12.77M13 5A1 1 0 1 1 12 6A1 1 0 0 1 13 5M11 18A1 1 0 1 1 12 17A1 1 0 0 1 11 18M12 15A1 1 0 1 1 13 16A1 1 0 0 1 12 15M14 19A1 1 0 1 1 15 18A1 1 0 0 1 14 19Z" /></svg>`,
		name: "thePeanut",
		description: "it's a peanut",
		price: "$9999,99"
	}, {
		svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20,10C22,13 17,22 15,22C13,22 13,21 12,21C11,21 11,22 9,22C7,22 2,13 4,10C6,7 9,7 11,8V5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5V3H13V8C15,7 18,7 20,10Z" /></svg>`,
		name: "theApple",
		description: "it's an apple",
		price: "$10.000"
	}, {
		svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11C21.11 11 22 11.9 22 13S21.11 15 20 15H18.2L14.2 11H20M20.42 19.77L20.42 19.76L17.66 17H17.65L15.65 15H15.66L11.66 11H11.66L9.66 9H9.66L2.39 1.73L1.11 3L4.12 6C3 7.5 3 9 3 9H7.11L9.11 11H4C2.9 11 2 11.9 2 13S2.9 15 4 15H13.11L15.11 17H3V18C3 19.66 4.34 21 6 21H18C18.33 21 18.65 20.93 18.94 20.83L20.84 22.73L22.11 21.46L20.42 19.77M21 9C21 9 21 3 12 3C9.88 3 8.28 3.34 7.05 3.85L12.2 9H21Z" /></svg>`,
		name: "theDeliciousAndTastefulHamburger",
		description: "A fleeting moment of culinary perfection, a synthesis of simple elements, a microcosm of the universe contained within a bun",
		price: "SOLD OUT"
	}];

	menuItems.forEach(item => {
		const menuItem = document.createElement("div");
		menuItem.classList.add("menu-item");
		menuContainer.appendChild(menuItem);

		const itemSvg = document.createElement("div");
		itemSvg.classList.add("menu-item-svg");
		itemSvg.innerHTML = item.svg;
		menuItem.appendChild(itemSvg);

		const itemName = document.createElement("h3");
		itemName.classList.add("menu-item-name");
		itemName.textContent = item.name;
		menuItem.appendChild(itemName);

		const itemDescription = document.createElement("p");
		itemDescription.classList.add("menu-item-description");
		itemDescription.textContent = item.description;
		menuItem.appendChild(itemDescription);

		const itemPrice = document.createElement("p");
		itemPrice.classList.add("menu-item-price");
		itemPrice.textContent = item.price;
		menuItem.appendChild(itemPrice);
	})
}
export default menuPage;