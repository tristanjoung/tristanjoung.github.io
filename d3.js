// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const width = 700;
const height = 700;
const maxCircles = 10;
const circleRadius = 15;
let circles = [];
let svgArt;
let circleId = 0;

function drawVis(){
    svgArt=d3.select("#canvas")
    .attr("width", width)
    .attr("height", height);


    svgArt.on("click", function(event){
        const coords = d3.pointer(event);

        circles.push({ x: coords[0], y: coords[1], id: circleId++ });

        if (circles.length > maxCircles){
            circles.shift();
        }
        updateCircles();
    });
}


function updateCircles(){
    const selection = svgArt.selectAll("circle").data(circles, d =>d.id);

    selection.exit().remove();

    selection
        .transition()
        .duration(500)
        .attr("cx", d =>d.x)
        .attr("cy", d =>d.y);

    selection.enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 0) 
        .attr("fill", "red")
        .transition()
        .duration(500)
        .attr("r", circleRadius);

    
}

function runApp() {
    drawVis();
}

runApp();