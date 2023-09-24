// export async function getGuests(name) {
//   return new Promise((resolve) => {
//     const member = membersData[name];
//     if (member) {
//       resolve(member);
//     } else {
//       resolve(null);
//     }
//   });
// }

export async function getAcceptedGuests(orderNumber) {
  try {
    const response = await fetch("http://localhost:3000/api/accept/guests", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(orderNumber);
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
