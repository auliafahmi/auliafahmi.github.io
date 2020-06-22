fetch('data/paper.csv')
    .then(response => response.text())
    .then((data) => {

        /* deklarasi data sebagai array */
        const namaDosen = [];
        const paper = [];
        const rows = data.split("\n");

        rows.forEach(r => {
            const item = r.split(",");
            namaDosen.push(item[0]);
            paper.push(+item[1]);
        });

        namaDosen.shift(); // hapus baris pertama kolom nama dosen
        paper.shift(); // hapus baris pertama kolom paper

        /* cek data di console */
        console.log(namaDosen);
        console.log(paper);

        draw(namaDosen, paper);
    });

function draw(labels, values){

    const label = "Paper";
    const title = "Paper Dosen";
    color = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#c3253f"];

    Chart.defaults.scale.ticks.beginAtZero = true;

    const dataObj = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: values,
                borderWidth: 1,
                backgroundColor: color,
                borderColor: "#bcbcbc",
                fill: false
            }
        ]
    }

    const options = {
        legend: { display: false },
        title: {
          display: true,
          text: title,
          fontSize: 20
        }
    }

    const barChart = document.getElementById("bar-chart");
    new Chart(barChart, {
        type: "bar",
        data: dataObj,
        options: options
    });

    const hrChart = document.getElementById("hr-chart");
    new Chart(hrChart, {
        type: "horizontalBar",
        data: dataObj,
        options: options
    });

    const lineChart = document.getElementById("line-chart");
    new Chart(lineChart, {
        type: "line",
        data: dataObj,
        options: options
    });

    const pieChart = document.getElementById("pie-chart");
    new Chart(pieChart, {
        type: "pie",
        data: dataObj,
        options: options
    });
}
