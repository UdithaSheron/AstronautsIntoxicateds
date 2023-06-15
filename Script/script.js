//// JavaScript code goes here
//// You can add any necessary functionality using JavaScript


    // Get the canvas element
    var ctx = document.getElementById('myChart').getContext('2d');

    // Define the data for the chart
    var data = {
        labels: ['Java', 'JavaScript', '.NET', 'Python'],
    datasets: [{
        label: 'Using',
    data: [120, 190, 300, 400],
    backgroundColor: 'rgba(75, 192, 192, 0.5)', // Specify the bar color
    borderColor: 'rgba(75, 192, 192, 1)', // Specify the border color
    borderWidth: 1 // Specify the border width
        }]
    };

    // Create the chart
    var myChart = new Chart(ctx, {
        type: 'bar',
    data: data,
    options: {
        responsive: true,
    scales: {
        y: {
        beginAtZero: true,
    ticks: {
        color: 'white' // Set the font color of the y-axis labels to white
                    }
                },
    x: {
        ticks: {
        color: 'white' // Set the font color of the x-axis labels to white
                    }
                }
            },
    plugins: {
        tooltip: {
        callbacks: {
        labelColor: function (context) {
                            return {
        borderColor: 'white',
    backgroundColor: 'white'
                            };
                        },
    label: function (context) {
                            return data.datasets[0].data[context.dataIndex].toString();
                        }
                    }
                }
            }
        }
    });

