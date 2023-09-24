// export async function getAcceptedGuests(orderNumber) {
//   console.log(orderNumber);
//   try {
//     const response = await fetch("/api/accept/guests", {
//       method: "GET",
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data)
//     return data;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }
