// scene_tv_room_001.js

let scene_tv_room_001 = [
{
    // scene info
    scene: "scene_tv_room_001",
    sceneTitle: "TV",
    description: "Enjoy some TV",
    daySetting: 1.0,
    nightSetting: 0.4
},

{
    // theIdToMove: "ayan1",

    // background texture
    type: "webp",
    category: "background",
    className: "theBackground2",
    name: "The background",
    texture: "src/media/texture/background/apartment_002/001.webp",
    theId: "apartmentStudio", //theBgId
    theLayer: 1,
    sizeX: 800,
    theX: 0,
    theY: 0,
    rotationAmount: 0 + "deg",
    theContrast: 1.3,
    theBrightness: 1.0,
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
    tileLevel: false,
    daySetting: 1.0,
    nightSetting: 0.3
},

{
    // background texture
    type: "mp4",
    category: "background",
    className: "theBackground2",
    name: "Beach Scene",
    texture: "src/media/texture/background/hotel/hotel_001.png",
    theUrl: "src/media/video/bg/ocean/beach_waves.mp4",
    theZindex: 1,
    theId: "bgVideo",
    sizeX: 1500,
    theX: -100,
    theY: 0,
},

// character - ayan1
{
    type: "webp",
    category: "character",
    name: "ayan",
    texture: "src/media/texture/model/ayan/standing/model_ayan_standing_right.webp",
    theId: "ay2",
    sizeX: 70,
    theX: 257,
    theY: 129,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    theLayer: 10,
    rotationAmount: 0 + "deg",
    theBrightness: 1.0,
    theContrast: 1.0,
    theHue: 0,
    theSaturation: 1.0,
    theBlur: 0,
    theInvert: 0,
    theGrayscale: 0,
    theSepia: 0,
    theDropShadowX: "5px",
    theDropShadowY: "5px",
    theDropShadowBlurRadius: "10px",
    theDropShadowColor: "black",
},

// div container for hiding tv screen
{
    type: "div",
    category: "prop",
    name: "tv_container",
    //texture: "src/media/texture/prop/tv/tv1/prop_tv_001.webp",
    theId: "tv_container",
    theX: 401,
    theY: 228,
    sizeX: 225,
    className: "propStyle",
    //kind: 'contain',
    theLayer: 5,
    // theBrightness: 0.4,
    // theContrast: 1.0,
    rotationAmount: 0 + "deg",
},

// prop - prop_tv_001
{
    type: "webp",
    category: "prop",
    name: "prop_tv_001",
    texture: "src/media/texture/prop/tv/tv1/prop_tv_001.webp",
    theId: "prop_tv_001",
    theX: 401,
    theY: 228,
    sizeX: 225,
    className: "propStyle",
    theLayer: 5,
    // theBrightness: 0.4,
    // theContrast: 1.0,
    rotationAmount: 0 + "deg",
},

// prop - prop_tv_001
{
    type: "webp",
    category: "prop",
    name: "prop_tv_screen_dark",
    texture: "src/media/texture/prop/tv/tv1/prop_tv_screen_dark.webp",
    theId: "prop_tv_screen_dark",
    theX: 414,
    theY: 240,
    sizeX: 210,
    //className: "propStyle",
    theLayer: 2,
    // theBrightness: 0.4,
    // theContrast: 1.0,
    rotationAmount: 0 + "deg",
},

{
    type: "mp4",
    category: "prop",
    theUrl: "src/media/video/bg/ocean/beach_waves.mp4",
    theX: 414,
    theY: 240,
    sizeX: 210,
    theId: "tvMovies",
    className: "propStyle",
    theLayer: 3,
    // theBrightness: 0.4,
    // theContrast: 1.0,
},

{
    type: "webp",
    category: "prop",
    name: "prop_table_001",
    texture: "src/media/texture/prop/table/round/prop_table_001.webp",
    theId: "prop_table_001",
    theX: 414,
    theY: 372,
    sizeX: 200,
    className: "propStyle",
    theLayer: 3,
    theBrightness: 0.4,
    rotationAmount: 0 + "deg",
    theContrast: 1.0,
    theBrightness: 0.6,
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
},

];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

