async function main() {
  // Retrieve data from the API
  const amazingEventsData = await getData();

  const upcomingEvents = [];
  const pastEvents = [];

  amazingEventsData.events.forEach((event) => {
    amazingEventsData.currentDate > event.date
      ? pastEvents.push({
          name: event.name,
          assistance: event.assistance,
          capacity: event.capacity,
          category: event.category,
          percentage: ((event.assistance * 100) / event.capacity).toFixed(2),
          price: event.price,
          revenues: event.assistance * event.price,
        })
      : upcomingEvents.push({
          name: event.name,
          estimate: event.estimate,
          capacity: event.capacity,
          category: event.category,
          percentage: ((event.estimate * 100) / event.capacity).toFixed(2),
          price: event.price,
          revenues: event.estimate * event.price,
        });
  });

  const sortedAttendancePercentages = [...pastEvents].sort(
    (a, b) => b.attendance - a.attendance
  );

  const sortedCapacity = [...amazingEventsData.events].sort(
    (a, b) => b.capacity - a.capacity
  );

  // Statistics Table
  const statisticsTableTemplate = `
    <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${
      sortedAttendancePercentages[0].name
    } (${sortedAttendancePercentages[0].percentage}%)
  </td>
  <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${
    sortedAttendancePercentages[sortedAttendancePercentages.length - 1].name
  } (${
    sortedAttendancePercentages[sortedAttendancePercentages.length - 1]
      .percentage
  }%)
  </td>
  <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${
    sortedCapacity[0].name
  } (${sortedCapacity[0].capacity})</td>
</main>
    `;
  document.getElementById("statisticsTable").innerHTML =
    statisticsTableTemplate;

  /* Stats by categories */
  // Use spread constructor and Set() operator to fill the array with unique categories
  const upcomingEventsCategories = [
    ...new Set(upcomingEvents.map((event) => event.category)),
  ];
  const pastEventsCategories = [
    ...new Set(pastEvents.map((event) => event.category)),
  ];

  const upcomingEventsStats = [];
  upcomingEventsCategories.forEach((category) => {
    const categoryEvents = upcomingEvents.filter(
      (event) => event.category === category
    );
    const categoryRevenues = categoryEvents.reduce(
      (total, event) => total + event.revenues,
      0
    );
    const categoryAttendance = categoryEvents.reduce(
      (total, event) => total + event.estimate,
      0
    );
    const categoryCapacity = categoryEvents.reduce(
      (total, event) => total + event.capacity,
      0
    );
    const categoryAttendancePercentage = (
      (categoryAttendance * 100) /
      categoryCapacity
    ).toFixed(2);
    upcomingEventsStats.push({
      category,
      revenues: categoryRevenues,
      percentage: categoryAttendancePercentage,
    });
  });

  let upcomingEventsStatsTable = "";
  upcomingEventsStats.forEach((event) => {
    const statisticsByCategoryTemplate = `
    <tr class="odd:bg-black/10 even:bg-black/20">
      <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${event.category}</td>
      <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${event.revenues}</td>
      <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${event.percentage}%</td>
    </tr>`;

    upcomingEventsStatsTable += statisticsByCategoryTemplate;
  });
  document.getElementById("upcomingEventsStatsTableHTML").innerHTML =
    upcomingEventsStatsTable;

  const pastEventsStats = [];
  pastEventsCategories.forEach((category) => {
    const categoryEvents = pastEvents.filter(
      (event) => event.category === category
    );
    const categoryRevenues = categoryEvents.reduce(
      (total, event) => total + event.revenues,
      0
    );
    const categoryAttendance = categoryEvents.reduce(
      (total, event) => total + event.assistance,
      0
    );
    const categoryCapacity = categoryEvents.reduce(
      (total, event) => total + event.capacity,
      0
    );
    const categoryAttendancePercentage = (
      (categoryAttendance * 100) /
      categoryCapacity
    ).toFixed(2);
    pastEventsStats.push({
      category,
      revenues: categoryRevenues,
      percentage: categoryAttendancePercentage,
    });
  });

  let pastEventsStatsTable = "";
  pastEventsStats.forEach((event) => {
    const statisticsByCategoryTemplate = `
    <tr class="odd:bg-black/10 even:bg-black/20">
      <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${event.category}</td>
      <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${event.revenues}</td>
      <td class="p-1 hover:font-semibold hover:text-primary-300 hover:bg-white/5 transition-all">${event.percentage}%</td>
    </tr>`;

    pastEventsStatsTable += statisticsByCategoryTemplate;
  });
  document.getElementById("pastEventsStatsTableHTML").innerHTML =
    pastEventsStatsTable;
}
main();
