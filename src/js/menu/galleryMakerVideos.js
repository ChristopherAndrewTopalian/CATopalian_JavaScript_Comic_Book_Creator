// galleryMakerVideos.js

// combine arrays together into one array
let everythingVideos = [
    {
        name: "Rainy Street with Benches",
        texture: "src/media/video/bg/rain/night/rainy_street_with_benches.mp4",
        theId: "rainy_street_with_benches",
        sizeX: "300",
        posX: "0", 
        posY: "20",
        theOpacity: 1,
        type: "mp4",
        category: "video",
        realName: "rainy_street_with_benches",
        theLayer: 5,
        flipHorizontal: false,
        flipVertical: false,
        className: "characterStyle",
        rotationAmount: 0 + "deg",
        theBrightness: 1.0,
        theContrast: 1.3,
        theHue: 0,
        theSaturation: 1.0,
        theBlur: 0,
        theInvert: 0,
        theGrayscale: 0,
        theSepia: 0,
        theDropShadowX: "10px",
        theDropShadowY: "10px",
        theDropShadowBlurRadius: "10px",
        theDropShadowColor: "black",
        info: "It's a rainy street that has benches"
    },

{
    name: "trees_blowing_in_wind",
    texture: "src/media/video/bg/trees/trees_blowing_in_the_wind.mp4",
    theId: "trees_blowing_in_wind",
    sizeX: "300",
    posX: "0", 
    posY: "20",
    theOpacity: 1,
    type: "mp4",
    category: "video",
    realName: "trees_blowing_in_wind",
    theLayer: 5,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    rotationAmount: 0 + "deg",
    theBrightness: 1.0,
    theContrast: 1.3,
    theHue: 0,
    theSaturation: 1.0,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "10px",
    theDropShadowY: "10px",
    theDropShadowBlurRadius: "10px",
    theDropShadowColor: "black",
    info: "Information about the"
},

{
    name: "beach_waves",
    texture: "src/media/video/bg/ocean/beach_waves.mp4",
    theId: "beach_waves",
    sizeX: "300",
    posX: "0", 
    posY: "20",
    theOpacity: 1,
    type: "mp4",
    category: "video",
    realName: "beach_waves",
    theLayer: 5,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    rotationAmount: 0 + "deg",
    theBrightness: 1.0,
    theContrast: 1.3,
    theHue: 0,
    theSaturation: 1.0,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "10px",
    theDropShadowY: "10px",
    theDropShadowBlurRadius: "10px",
    theDropShadowColor: "black",
    info: "Beach waves moving"
}

];

function galleryMakerVideos(whichArray, whichCategory)
{
    if (ge("characterGalleryId"))
    {
        ge("characterGalleryId").remove();
    }
    else
    {
        sortByNameAndCategory(everythingVideos, "up");

        let mainDiv = ce("div");
        mainDiv.style.position = "fixed";
        mainDiv.style.left = 20 + "px";
        mainDiv.style.top = 30 + "px";
        mainDiv.style.width = 800 + "px";
        mainDiv.style.height = 600 + "px";
        mainDiv.style.overflowY = "scroll";
        mainDiv.className = "gridContainerStyle";
        mainDiv.id = "characterGalleryId";
        mainDiv.style.zIndex = "2000000";
        ba(mainDiv);

        //-//

        // close button
        // mainDiv.append(closeButton('characterGalleryId'));

        //-//

        let theCloseX = ce("button");
        theCloseX.textContent = "X";
        theCloseX.className = "ourButton";
        theCloseX.style.width = 25 + "px";
        theCloseX.style.height = 25 + "px";
        theCloseX.onclick = function()
        {
            ge("characterGalleryId").remove();
        };
        mainDiv.append(theCloseX);

        //-//

        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].category == whichCategory)
            {
                let theVideo = ce("video");
                theVideo.className = "gridItemStyle";
                theVideo.src = whichArray[x].texture;
                theVideo.style.width = whichArray[x].sizeX;

                theVideo.title = whichArray[x].name + "\n" + whichArray[x].texture;

                theVideo.style.position = "relative";

                theVideo.style.left = whichArray[x].posX;

                theVideo.style.top = whichArray[x].posY;

                idToMove = whichArray[x].theId;

                //-//

                theVideo.onclick = function()
                {
                    let theCreatedVideo = ce("video");

                    theCreatedVideo.style.position = "absolute";

                    theCreatedVideo.style.left = 400 + "px";
                    theCreatedVideo.style.top = 400 + "px";

                    theCreatedVideo.style.width = whichArray[x].sizeX + "px";

                    theCreatedVideo.style.zIndex = 5;

                    theCreatedVideo.id = whichArray[x].name + "_" + x;

                    menuOptions(theCreatedVideo.id);

                    theCreatedVideo.src = whichArray[x].texture;

                    theCreatedVideo.className = whichArray[x].className;

                    setMenuOptionsValues(whichArray, x);

                    idToMove = theCreatedVideo.id;

                    theCreatedVideo.oncontextmenu = function()
                    {
                        idToMove = theCreatedVideo.id;

                        menuOptions(theCreatedVideo.id);

                        dragElement(theCreatedVideo.id);

                        menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, "animation");

                        setMenuOptionsValues(whichArray, x);
                    };
                    ba(theCreatedVideo);
                };
                mainDiv.append(theVideo);
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

