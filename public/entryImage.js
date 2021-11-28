let entryImages = $(".entry-image");
entryImages.each(function(){
    if($(this).attr("src") != ""){
        if(!($(this).hasClass("entry-image-styles"))){
            $(this).addClass("entry-image-styles");
        }
    }
    else{
        if(($(this).hasClass("entry-image-styles"))){
            $(this).removeClass("entry-image-styles");
        }
    }
});