const svgArt = document.getElementById("artViz");
const svgData = document.getElementById("dataViz");

svgArt.innerHTML="";
svgData.innerHTML="";

const width = parseFloat(svgArt.getAttribute("width"));
const height = parseFloat(svgArt.getAttribute("height"));

//making an array of colors
const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF"];

const rows = 8;
const cols = 12;
const padding = 10;
const circleRadius = 20;

for (let row = 0; row < rows; row++){
    for (let col = 0; col < cols; col++){
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        const cx = padding + col * (circleRadius * 2 + padding) + circleRadius;
        const cy = padding + row * (circleRadius * 2 + padding) + circleRadius;


        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("r", circleRadius);
        circle.setAttribute("fill", colors[(row+col)% colors.length]);
        circle.setAttribute("stroke","#000000");
        circle.setAttribute("stroke-width","2");

        svgArt.appendChild(circle);
        
    }
}


//fake data i created
const data = [
    {label: "Luffy", value:150},
    {label: "Zoro", value:120},
    {label:"Nami", value:130},
    {label:"Sanji", value:100},
    {label:"Chopper", value:110},
    {label:"Robin", value:90},
    {label:"Franky", value:60},
    {label:"Brooke", value:80},
    {label:"Jinbei", value:50},
];

const width2 = parseFloat(svgData.getAttribute("width"));
const height2 = parseFloat(svgData.getAttribute("height"));
const barWidth = 50;
const barGap = 20;

data.forEach((item, i)=>{
    const barHeight = (item.value / 100) * height;

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", i * (barWidth + barGap));
    rect.setAttribute("y", height2 - barHeight);
    rect.setAttribute("width", barWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("fill", "#262bb7");
    svgData.appendChild(rect);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", i * (barWidth + barGap) + barWidth / 2);
    text.setAttribute("y", height2 - barHeight - 5);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "#000");
    text.setAttribute("font-size", "12px");
    text.textContent = item.value;
    svgData.appendChild(text);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("x", i * (barWidth + barGap) + barWidth / 2);
  label.setAttribute("y", height2 - 5);
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("fill", "#FFFFFF");
  label.setAttribute("font-size", "12px");
  label.textContent = item.label;
  svgData.appendChild(label);


});
