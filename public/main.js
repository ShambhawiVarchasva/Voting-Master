
var event;



fetch("http://localhost:3000/poll")
    .then(res => res.json())
    .then(data => {
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: "Placements Record - 2018"
                },
                data: [{
                    type: "pie",
                    startAngle: 240,
                    yValueFormatString: "##0.00\"%\"",
                    indexLabel: "{label} {y}",

                    dataPoints: [
                        {y: 20, label: "CSE"},
                        {y: 40, label: "Mechanical"},
                        {y: 15,label: "ECE"},
                        {y: 25,label: "Chemical"}
                        
                ]
                  
                }]
            });
            chart.render();

        
             
              
             
        

});
