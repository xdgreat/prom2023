export async function getAcceptedGuests(orderNumber) {
  try {
    const response = await fetch("https://prom.org/api/accept/guests", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    const filteredData = data.filter((guest) => {
      if (parseInt(guest.orderNumber) === parseInt(orderNumber)) {
        return guest;
      } else {
        return null;
      }
    });
    return filteredData;
  } catch (err) {
    console.error(err);
    return null;
  }
}
