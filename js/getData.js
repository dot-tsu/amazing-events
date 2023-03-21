/* API Data retriever*/
async function getData() {
    const localDataPath = "../json/data.json"
    try {
        const response = await fetch("https://mindhub-xj03.onrender.com/api/amazing");
        const data = await response.json();
        console.info("Data successfully retrieved from the API. 🐱");
        return data;
    } catch (error) {
        console.error(error, "\nFailed to retrieve data from the API, using local data. 😿");
        const localResponse = await fetch(localDataPath);
        const localData = await localResponse.json();
        console.info("Data successfully retrieved from local JSON. 🐱");
        return localData;
    }
}