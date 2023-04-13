
var data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
        {
            label: "sales",
            data: [10, 20, 40, 30],
        },
    ],
};

var options = {
    responsive: true,
    maintainAspectRatio: false,
}

var render = document.querySelector("#chart").getContext("2d");
var chart = new Chart(render, {
    type: "bar", 
    data: data,
    options: options,
});