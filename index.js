/* Display Data */
let amazingEventsData = {
    "currentDate": "2022-01-01",
    "events": [
        {
            _id: 1,
            "image": "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            _id: 2,
            "image": "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            "name": "Korean style",
            "date": "2022-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            _id: 3,
            "image": "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            _id: 4,
            "image": "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            _id: 5,
            "image": "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            _id: 6,
            "image": "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            _id: 7,
            "image": "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            _id: 8,
            "image": "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            _id: 9,
            "image": "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Soccer field",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            _id: 10,
            "image": "https://i.postimg.cc/zv67r65z/15kny.jpg",
            "name": "15K NY",
            "date": "2022-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            _id: 11,
            "image": "https://i.postimg.cc/Sst763n6/book1.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            _id: 12,
            "image": "https://i.postimg.cc/05FhxHVK/book4.jpg",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            _id: 13,
            "image": "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            "name": "Batman",
            "date": "2021-03-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            _id: 14,
            "image": "https://i.postimg.cc/T3C92KTN/scale.jpg",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
};

let pastEventsGallery = "";
let upcomingEventsGallery = "";
const pastEventsGalleryHTML = document.getElementById('pastEventsGallery');
const upcomingEventsGalleryHTML = document.getElementById('upcomingEventsGallery');
const allEventsGalleryHTML = document.getElementById('allEventsGallery');

// Loop that generates a dynamic template for each card
for (let event of amazingEventsData.events) {
    if (amazingEventsData.currentDate > event.date) {
        pastEventsGallery += `
            <!-- Card -->
            <div class="w-full md:w-2/4 xl:w-1/4 2xl:w-2/5">
                <div class="bg-secondary-50 rounded-lg shadow-md overflow-hidden mx-2 my-4 border-2 border-secondary-300 h-full">
                    <img class="object-cover object-center w-full h-40" src="${event.image}" alt="Card Image">
                    <div class="p-4">
                        <h2 class="font-bold text-lg mb-2 text-primary-300">${event.name}</h2>
                        <div class="h-20 overflow-hidden">
                            <p class="text-gray-700 text-base mb-4">${event.description}</p>
                        </div>
                        <div class="flex justify-between items-center">
                            <p class="text-gray-900 font-bold text-xl">$${event.price}</p>
                            <button
                                class="bg-secondary-500 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-100"><a
                                    href="./details.html">Details</a></button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    else {
        upcomingEventsGallery += `
        <!-- Card -->
        <div class="w-full md:w-2/4 xl:w-1/4 2xl:w-2/5">
            <div class="bg-secondary-50 rounded-lg shadow-md overflow-hidden mx-2 my-4 border-2 border-secondary-300 h-full">
                <img class="object-cover object-center w-full h-40" src="${event.image}" alt="Card Image">
                <div class="p-4">
                    <h2 class="font-bold text-lg mb-2 text-primary-300">${event.name}</h2>
                    <div class="h-20 overflow-hidden">
                        <p class="text-gray-700 text-base mb-4">${event.description}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p class="text-gray-900 font-bold text-xl">$${event.price}</p>
                        <button
                            class="bg-secondary-500 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-100"><a
                                href="./details.html">Details</a></button>
                    </div>
                </div>
            </div>
        </div>`;
    }
}
let allEvents = pastEventsGallery + upcomingEventsGallery;

// Check if the HTML id exists and fills in the gallery with the dynamic data
switch (true) {
    case Boolean(pastEventsGalleryHTML):
        pastEventsGalleryHTML.innerHTML = pastEventsGallery;
        break;
    case Boolean(upcomingEventsGalleryHTML):
        upcomingEventsGalleryHTML.innerHTML = upcomingEventsGallery;
        break;
    case Boolean(allEventsGalleryHTML):
        allEventsGalleryHTML.innerHTML = allEvents;
        break;
    default:
        console.log("No HTML elements found to update 😿");
}


/* Navbar */
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});