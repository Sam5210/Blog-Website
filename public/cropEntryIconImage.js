let entryIconImageFile = $("#entry-icon");
let entryIconImage = $("img.crop-preview");
let saveButton = $("#save-entry-icon-button");
let entryIconCroppedResult = $("img.crop-result");
let entryResultMessage = $(".entry-result-message");
let cropper = "";

//Initialize cropper js
$.fn.cropper;
entryIconImageFile.on("change", function(event){
    console.log(typeof event.target.files[0]);
    if(event.target.files.length > 0){
        const imageReader = new FileReader();
        imageReader.onload = function(eventOnImageLoaded){
            if(eventOnImageLoaded.target.result){
                if(cropper != ""){
                    cropper.destroy();
                }
                entryIconImage.attr("src", eventOnImageLoaded.target.result);
                entryIconImage.removeClass("hide");
                saveButton.removeClass("hide");
                if(!(entryResultMessage.hasClass("hide"))){
                    entryResultMessage.addClass("hide");
                }
                if(!(entryIconCroppedResult.hasClass("hide"))){
                    entryIconCroppedResult.addClass("hide");
                }
                cropper = new Cropper(entryIconImage[0], {
                    autoCrop: false,
                    aspectRatio: 1 / 1,
                    minContainerWidth: 50,
                    minContainerHeight: 50,
                    ready(){
                        this.cropper.crop();
                    },
                });
            }
        }
        imageReader.readAsDataURL(event.target.files[0]);
    }
});

saveButton.on("click", function(event){
    //Get the data for the cropped iage
    let croppedImageSrc = cropper.getCroppedCanvas().toDataURL();

    //Show the cropped result of the image
    entryIconCroppedResult.attr("src", croppedImageSrc);
    //Set the value of input file to the cropped image data
    $("#entry-icon-src").attr("value", croppedImageSrc);

    //Show the crop result, message and hide save button
    entryIconCroppedResult.removeClass("hide");
    entryResultMessage.removeClass("hide");
    saveButton.addClass("hide");
});