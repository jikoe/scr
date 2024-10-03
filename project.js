function upDate(previewPic){
    console.log("Hover ever trigger");
    console.log("Image alt:", previewPic.alt);
    console.log("Image src:", previewPic.src);
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

}
function undo(){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}