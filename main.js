const inputF = document.querySelector("#choose_f");


const zoomM = document.querySelector(".zoom-btn-m");

const zoomP = document.querySelector(".zoom-btn-p");

const zoomVal = 0.1;

const image = document.querySelector("#crop_can");

const downloadBtn = document.querySelector("#download"); 
console.log("1");

let cropper = new Cropper(image, {
        aspectRatio: 1 / 1
    });


inputF.addEventListener("change", () => {
    if (typeof cropper != "undefined") {
      cropper.destroy();
    };
    let imageF = inputF.files[0];
    imageF = URL.createObjectURL(imageF);

    
    

    image.src = imageF;
    
    cropper = new Cropper(image, {
        aspectRatio: 1 / 1
    });
    

});


zoomM.addEventListener("click", () => {
    cropper.zoom(-zoomVal);
});

zoomP.addEventListener("click", () => {
    cropper.zoom(zoomVal);
});

downloadBtn.addEventListener("click", () => {
   if(image.getAttribute('src') !== ""){
       console.log(image.getAttribute('src'));
       let imgCroppedSrc = cropper.getCroppedCanvas({fillColor:"#000000"}).toDataURL();
       downloadBtn.download = "cropped_image.png";
       downloadBtn.setAttribute("href", imgCroppedSrc);
   };

});




