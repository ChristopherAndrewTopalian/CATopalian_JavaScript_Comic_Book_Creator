// scene_kitchen_001.js

let kitchen_saturation = 0.7;

let scene_kitchen_001  = [
{
    // scene info
    scene: "scene_kitchen_001",
    sceneTitle: "Kitchen",
    description: "Kitchen scene",

    daySetting: 1.0,
    nightSetting: 0.3
},

{
    // sound to play
    soundFile: "furnace_001.mp3",

    // actions
    actions: "actions_kitchen",
},

{
    // background texture
    type: "mp4",
    category: "background",
    className: "theBackground2",
    name: "Beach Scene",
    texture: "src/media/texture/background/hotel/hotel_001.png",
    theUrl: "src/media/video/bg/ocean/beach_waves.mp4",
    theZindex: 0,
    theId: "bgVideo",
    sizeX: 1000,
    theX: 0,
    theY: 0,
},

{
    // positioned wherever main character was located in the previous scene
    //theIdToMove: "ayan1",

    // background texture
    type: "webp",
    category: "background",
    /*className: "theBackground2",*/
    name: "Kitchen",
    texture: "src/media/texture/background/living_room/nice_001.webp",
    theId: "theBgId",
    theLayer: 1,
    sizeX: 1000,
    theX: -10,
    theY: -10,
    rotationAmount: 0 + "deg",
    flipHorizontal: false,
    flipVertical: false,
    tileLevel: true,
    theOpacity: 1.0,
    theContrast: 1.0,
    theBrightness: 0.8,
    theHue: 0,
    theSaturation: 1.0,
    theGrayscale: 0,
    theBlur: 0,
    theInvert: 0,
    theSepia: 0,
    theDropShadowX: "5px",
    theDropShadowY: "5px",
    theDropShadowBlurRadius: "15px",
    theDropShadowColor: "black",
},

// character - ayan1
{
    type: "webp",
    category: "character",
    name: "ayan1",
    texture: "src/media/texture/model/ayan/standing/model_ayan_standing_right.webp",
    theId: "ayan1",
    sizeX: 144,
    theX: 214,
    theY: 361,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    theLayer: 5,
    rotationAmount: 0 + "deg",

    /*
    theBrightness: 1.0,
    theContrast: 1.3,
    theHue: 0,
    theSaturation: 0.5,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "5px",
    theDropShadowY: "5px",
    theDropShadowBlurRadius: "15px",
    theDropShadowColor: "black",
    */
},

// character - ayan1 arm
{
    type: "webp",
    category: "character",
    name: "ayan1",
    texture: "src/media/texture/model/ayan/standing/model_ayan_standing_armRight.webp",
    theId: "ayan1armRight",
    sizeX: 90,
    theX: 215,
    theY: 471,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    theLayer: 5,
    rotationAmount: -5 + "deg",

    /*
    theBrightness: 1.0,
    theContrast: 1.3,
    theHue: 0,
    theSaturation: 0.5,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "10px",
    theDropShadowY: "10px",
    theDropShadowBlurRadius: "10px",
    theDropShadowColor: "black",
    */
    animationToTrigger: "animate023()"
},

{
    type: "webp",
    category: "character",
    name: "maven",
    texture: "src/media/texture/model/maven/full/front.webp",
    theId: "maven",
    sizeX: 400,
    theX: 700,
    theY: 600,
    rotationAmount: 0 + "deg",
    theLayer: 4,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    theOpacity: 1.0,
    theBrightness: 1.0,
    theContrast: 1.3,
    theHue: 0,
    theSaturation: 0.5,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "10px",
    theDropShadowY: "10px",
    theDropShadowBlurRadius: "10px",
    theDropShadowColor: "black",
},

// character - John
{
    type: "webp",
    category: "character",
    name: "john",
    texture: "src/media/texture/model/john/right.webp",
    theId: "john",
    sizeX: 121,
    theX: 310,
    theY: 170,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    theLayer: 5,
    rotationAmount: 0 + "deg",

    /*
    theBrightness: 1.0,
    theContrast: 1.3,
    theHue: 0,
    theSaturation: 0.5,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "5px",
    theDropShadowY: "5px",
    theDropShadowBlurRadius: "15px",
    theDropShadowColor: "black",
    */
},

];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

