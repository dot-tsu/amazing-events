/* Category Selector and Search Bar */

// Display Category Checkboxes
function displayCheckboxes() {
    // Use spread constructor and Set() operator to fill the array with unique categories
    const categories = [...new Set(amazingEventsData.events.map(event => event.category))];
    let checkboxSet = "";
    const checkboxContainerHTML = document.getElementById("checkbox-container");

    categories.forEach(category => {
        const checkboxTemplate = `
      <div class="checkbox-wrapper-58">
        <label class="switch">
          <input type="checkbox" name="category" value="${category}" class="form-checkbox">
          <span class="slider"></span>
        </label>
        <span class="text-secondary-300 ml-1 mb-1 font-semibold">${category}</span>
      </div>
    `;
        checkboxSet += checkboxTemplate;
    });
    // Check if the HTML id exists  and fills in the checkboxes set with the dynamic data
    Boolean(checkboxContainerHTML) ? checkboxContainerHTML.innerHTML = checkboxSet : console.log("No HTML elements were found to update 😿");
}
displayCheckboxes();

// Event filter
let filteredEvents = [];
const searchBar = document.querySelector("#searchBar");
const checkboxes = document.querySelectorAll(".form-checkbox");

function filterEvents() {
    const nameFilter = searchBar.value.trim().toLowerCase();
    const categoryFilters = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    filteredEvents = amazingEventsData.events.filter(event => {
        const nameMatch = event.name.toLowerCase().includes(nameFilter);
        const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(event.category);
        return nameMatch && categoryMatch;
    });
}

// Display Event Cards
function displayContent() {

    let pastEventsGallery = "";
    let upcomingEventsGallery = "";
    const pastEventsGalleryHTML = document.getElementById("pastEventsGallery");
    const upcomingEventsGalleryHTML = document.getElementById("upcomingEventsGallery");
    const allEventsGalleryHTML = document.getElementById("allEventsGallery");

    filterEvents();

    // Loop that generates a dynamic template for each card
    filteredEvents.forEach(event => {
        const cardTemplate = `
        <!-- Card -->

        <!-- Mobile -->
        <div class="md:hidden">
            <a class="overflow-hidden group mb-4 md:mb-0 md:max-w-md">
                <img class="object-cover w-full h-64 rounded-t-xl" src="${event.image}" alt="">
                <div class="p-5 flex flex-col justify-between bg-[#0F1113] rounded-b-xl">
                    <h1 class="text-center 2-xl md:text-3xl pb-1.5 font-bold text-secondary-400">
                        ${event.name}
                    </h1>
                    <p class="text-lg text-light leading-relaxed font-semibold">${event.description}</p>
                    <p class="text-lg mt-2 text-green-400 font-bold">$${event.price}</p>
                    <button class="bg-secondary-500 text-white font-bold py-2 px-4 rounded-xl"><a
                            href="../details.html?id=${event._id}">Details</a></button>
                </div>
            </a>
        </div>
        <!-- Desktop -->
        <a href="../html/details.html?id=${event._id}" class="hidden md:flex relative rounded-xl overflow-hidden group">
            <img class="object-cover w-full h-64 group-hover:blur-[2px] transition-all duration-200 ease-out"
                src="${event.image}" alt="">
            <div
                class="card-title inset-0 absolute p-5 flex flex-col justify-between bg-dark/75 opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                <h1 class="text-center 2-xl md:text-3xl pb-1.5 font-bold text-secondary-400">
                    ${event.name}
                </h1>
                <p class="text-lg text-light leading-relaxed font-semibold">${event.description}</p>
                <p class="text-lg mt-2 text-green-400 font-bold">$${event.price}</p>
            </div>`
        if (amazingEventsData.currentDate > event.date) {
            pastEventsGallery += cardTemplate;
        }
        else {
            upcomingEventsGallery += cardTemplate;
        }
    });

    let allEvents = pastEventsGallery + upcomingEventsGallery;

    // Check if the HTML id exists, clears the innerHTML and fills in the gallery with the dynamic data
    switch (true) {
        case Boolean(pastEventsGalleryHTML):
            pastEventsGalleryHTML.innerHTML = "";
            pastEventsGalleryHTML.innerHTML = pastEventsGallery;
            break;
        case Boolean(upcomingEventsGalleryHTML):
            upcomingEventsGalleryHTML.innerHTML = "";
            upcomingEventsGalleryHTML.innerHTML = upcomingEventsGallery;
            break;
        case Boolean(allEventsGalleryHTML):
            allEventsGalleryHTML.innerHTML = "";
            allEventsGalleryHTML.innerHTML = allEvents;
            break;
        default:
            console.log("No HTML elements found to update 😿");
    }
}

displayContent();

// Event Listeners
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", event => {
        displayContent();
    })
})
searchBar.addEventListener("input", event => {
    displayContent();
});