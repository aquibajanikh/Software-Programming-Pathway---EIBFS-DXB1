allBookings = [];

// 1. Detect book now button
function storeBooking() {
    // 2. Read the data from the form
    newAppointment = {
        userName: document.getElementById("userName").value,
        userPhone: document.getElementById("userPhone").value,
        userReason: document.getElementById("userReason").value,
        userDate: document.getElementById("userDate").value,
        userTime: document.getElementById("userTime").value
    }
    // 3. Store the data in the list
    allBookings.push(newAppointment);
    // 4. Clear the form
    document.getElementById("userName").value = "";
    document.getElementById("userPhone").value = "";
    document.getElementById("userReason").value = "";
    document.getElementById("userDate").value = "";
    document.getElementById("userTime").value = "";
    console.log(allBookings);
}

// 1. Detect show bookings button
function showBookings() {
    document.getElementById("bookingContent").innerHTML = "";
    sNo=1;
    // 2. Read the data from the list
    allBookings.forEach(booking => {
        document.getElementById("bookingContent").innerHTML += `<tr>
        <td>${sNo++}</td>
        <td>${booking.userName}</td>
        <td>${booking.userPhone}</td>
        <td>${booking.userReason}</td>
        <td>${booking.userDate}</td>
        <td>${booking.userTime}</td>
    </tr>`
    });
    // 3. Display the data on the screen
}

