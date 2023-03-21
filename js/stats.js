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
}
main();
