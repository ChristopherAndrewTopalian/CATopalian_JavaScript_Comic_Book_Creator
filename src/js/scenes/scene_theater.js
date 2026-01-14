// scene_theater.js

let scene_theater = [
{
    // scene info
    scene: "scene_theater",
    sceneTitle: "Theater",
    description: "Entertainment at the theater",
    //theIdToMove: "ayan1",

    daySetting: 1.0,
    nightSetting: 0.3,

    // background texture
    type: "webp",
    category: "background",
    className: "theBackground2",
    name: "The background",
    texture: "src/media/texture/background/theater/movieTheater002.webp",
    theId: "theBgId",
    sizeX: 800,
    //theX: 0,
    //theY: 105,
    // cover: "cover" // cover  // contain
},

// character - ayan1
{
    type: "webp",
    category: "character",
    name: "ayan1",
    texture: "src/media/texture/model/ayan/standing/model_ayan_standing_right.webp",
    theId: "ayan1",
    sizeX: 20,
    theX: 373,
    theY: 245,
    flipHorizontal: false,
    flipVertical: false,
    className: "characterStyle",
    theLayer: 4,
    // rotationAmount: 90 + "deg",
    theBrightness: 1.2,
    theContrast: 1.5,
},

{
    type: "mp4",
    category: "prop",
    theUrl: "src/media/video/bg/ocean/beach_waves.mp4",
    sizeX: 220,
    theX: 290,
    theY: 110,
    theId: "tvMovies",
    className: "propStyle",
    theLayer: 3,
    //theBrightness: 0.4,
    //theContrast: 1.0,
},

];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

