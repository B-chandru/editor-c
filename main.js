//assigning th evariables for all elements
var img=document.getElementById("img");
var width=document.getElementById("num");
var height=document.getElementById("num1");
var file=document.getElementById("file");
var left=document.getElementById("left");
var color=document.getElementById("color");
var h2=document.getElementById("h2");

var blur=document.getElementById("blur");
var brightness=document.getElementById("brightness");
var contrast=document.getElementById("contrast");
var grayscale=document.getElementById("grayscale");
var huerotate=document.getElementById("hue");
var invert=document.getElementById("invert");
var opacity=document.getElementById("opacity");
var saturate=document.getElementById("saturate");
var sepia=document.getElementById("sepia");

// to make the uploaded file to diplay on screen

file.addEventListener("change",()=>{
    let reader=new FileReader();
    reader.onload=()=>{
        h2.style="display:none"
        img.src=reader.result;   
 };
  reader.readAsDataURL(event.target.files[0])
});


color.addEventListener("change",()=>{
   left.style=`background:${color.value}`

})


//change the value of width and height based on ur input value

width.addEventListener("keyup",()=>{
    if (width.value >="651px") {
        alert("please enter the value below this:)!")
        
    } else {
        img.setAttribute("width",`${width.value}px`);
    }
})

height.addEventListener("keyup",()=>{

if (height.value >= "561px") {
    alert("please enter the value below this:)!")
} else {
    img.setAttribute("height",`${height.value}px`) 
}   
})


//changing the filter for the uploaded image

blur.addEventListener("change",()=>{
    img.style=`filter: blur(${blur.value}px)`
})


brightness.addEventListener("change",()=>{
    img.style=`filter: brightness(${brightness.value})`
})

contrast.addEventListener("change",()=>{
    img.style=`filter:contrast(${contrast.value})`
})



grayscale.addEventListener("change",()=>{
    img.style=`filter:grayscale(${grayscale.value});`
})

huerotate.addEventListener("change",()=>{
    img.style=`filter:hue-rotate(${huerotate.value}deg);`
})

invert.addEventListener("change",()=>{
    img.style=`filter:invert(${invert.value})`
})

opacity.addEventListener("change",()=>{
    img.style=`filter:opacity(${opacity.value})`
})

saturate.addEventListener("change",()=>{
    img.style=`filter:saturate(${saturate.value})`
})

sepia.addEventListener("change",()=>{
    img.style=`filter:sepia(${sepia.value})`
})



