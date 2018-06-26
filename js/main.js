/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
var data = [25, 20, 10, 12, 15];

var svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400);

var rects = svg.selectAll("rect")
  .data(data);

  rects.enter()
  .append("rect")
  .attr("y", (d, i) => {
    return (i * 50) + 25;
  })
  .attr("width", function(d, i){
    return 25;
  })
  .attr("height", function(d){
    return 25;
  })
  .attr("fill", function(d){
      return "red"
    }
  });
