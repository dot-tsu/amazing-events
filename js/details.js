async function main() {

    const amazingEventsData = await getData();
    const querySearch = document.location.search;
    const id = new URLSearchParams(querySearch).get("id");
    const event = amazingEventsData.events.find(event => event._id == id);

    const cardTemplate = `
<div class="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden border-2 border-secondary-300 mx-5 my-5">
    <!-- Image -->
    <img src="${event.image}" alt="Item Image" class="h-65 md:h-auto md:w-1/2 object-cover">
    <!-- Item Details -->
    <div class="bg-[#0F1113] p-6 md:w-1/2">
        <h2 class="text-2xl font-bold md:mb-4 text-primary-300">Item Details</h2>
        <div class=" md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Name:</h3>
            <p class="inline-block ">${event.name}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Date:</h3>
            <p class="inline-block">${event.date}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Description:</h3>
            <p class="inline-block">${event.description}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Category:</h3>
            <p class="inline-block">${event.category}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Place:</h3>
            <p class="inline-block">${event.place}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Capacity:</h3>
            <p class="inline-block">${event.capacity}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">${event.assistance !== undefined ?
            "Assistance: " : "Assistance Estimate: "}</h3>
            <p class="inline-block">${event.assistance !== undefined ? event.assistance : event.estimate}</p>
        </div>
        <div class="md:mb-4">
            <h3 class="text-lg font-bold inline-block mr-2 text-secondary-300">Price:</h3>
            <p class="inline-block">$${event.price}</p>
        </div>
    </div>
</div> `

    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = cardTemplate;
}
main()