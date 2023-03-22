async function main() {
  const amazingEventsData = await getData();
  const querySearch = document.location.search;
  const id = new URLSearchParams(querySearch).get("id");
  const event = amazingEventsData.events.find((event) => event._id == id);

  const cardTemplate = `
    <div id="details-container" class="max-w-5xl">
    <div
        class="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
        <!-- Image -->
        <img src="${
          event.image
        }" alt="Item Image" class="h-65 md:h-auto md:w-1/2 object-cover">
        <!-- Item Details -->
        <div class="bg-[#0F1113] md:w-1/2">
            <table class="table table-auto w-full overflow-hidden">
                <caption>
                    <h2 class="font-bold text-xl md:text-2xl text-primary-400 p-3">Item Details</h2>
                </caption>
                <thead class="bg-black/30">
                    <tr>
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Property</h2>
                        </th>
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Value</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Name</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${event.name}</p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Date</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${event.date}</p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Description</h2>
                        </th>
                        <td>
                            <p
                                class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${event.description}</p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Category</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${event.category}
                            </p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Place</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${event.place}</p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Capacity</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${event.capacity}</p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">${
                              event.assistance !== undefined
                                ? "Assistance"
                                : "Estimated Assistance"
                            }</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                ${
                                  event.assistance !== undefined
                                    ? event.assistance
                                    : event.estimate
                                }</p>
                        </td>
                    </tr>
                    <tr class="odd:bg-black/10 even:bg-black/20">
                        <th>
                            <h2 class="font-bold md:text-lg text-secondary-400 p-3">Price</h2>
                        </th>
                        <td>
                            <p
                                class="p-3 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">
                                $${event.price}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`;

  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = cardTemplate;
}
main();
