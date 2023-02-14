allEvents = [
    {
        id: 1,
        name: "Birthday",
        seats: 10,
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: 2,
        name: "Buffet Breakfast",
        seats: 6,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
    },
    {
        id: 3,
        name: "Movie",
        seats: 3,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
    },
    {
        id: 4,
        name: "Buffet Lunch",
        seats: 0,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
    },
    {
        id: 5,
        name: "Buffet Dinner",
        seats: 20,
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
    }
];

content = ``;

allEvents.forEach(event => {
    event = `<div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style="background-image: url('${event.image}');">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${event.name}</h3>
                            <p>Seats Left : ${event.seats}</p>
                            <p id="p_${event.id}"></p>
                            <button id="${event.id}">Book Now</button>
                        </div>
                    </div>
            </div>`;
    content += event;
});

document.getElementById("eventList").innerHTML = content;

allButtons = document.querySelectorAll("button");

allButtons.forEach((item) => {
    item.addEventListener('click', ()=>{checkAvailablity(item)})
});

function checkAvailablity(button) {
    buttonID = button.id;
    totalSeats = allEvents[buttonID-1].seats;
    console.log(totalSeats);
    if (totalSeats > 0) {
        // document.getElementById("isAvailable").innerText = "Available";
        document.getElementById("p_"+buttonID).innerText = "Available";
    } else {
        // document.getElementById("isAvailable").innerText = "Not Available!";
        document.getElementById("p_"+buttonID).innerText = "Not Available";
    }
}



