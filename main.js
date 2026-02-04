
const images = document.querySelectorAll(".carousel img");

images.forEach(img=>{
    img.addEventListener("mouseenter",() => {
        img.style.transform = "scale(1.05)";
        img.style.boxShadow = "0px 10px 25px rgba(0,0,0,0.3)";

    });

    img.addEventListener("mouseleave", ()=>{
        img.style.transform = "scale(1)";
        img.style.boxShadow = "none";
    });
});