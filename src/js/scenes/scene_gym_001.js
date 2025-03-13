// scene_gym_001.js

let scene_gym_001 = [
    {
        scene: "scene_gym_001",
        sceneTitle: "Gym",
        description: "Gym with Weights",

        daySetting: 1.0,
        nightSetting: 0.4
    },

    {
        // background texture
        type: "jpg",
        category: "background",
        className: "theBackground2",
        name: "The background",
        texture: "src/media/texture/background/gym/gym_001.webp",
        theId: "theBgId",
        sizeX: 1000,
        theX: 0,
        theY: 0,
        theContrast: "1.5",
        theBrightness: "0.6",
        tileLevel: false
    },
    
    // character - ayan1
    {
        type: "webp",
        category: "character",
        name: "ayan",
        texture: "src/media/texture/model/ayan/standing/model_ayan_standing_right.webp",
        theId: "ayan",
        sizeX: 25,
        theX: 360,
        theY: 295,
        flipHorizontal: false,
        flipVertical: false,
        className: "characterStyle",
        theLayer: 6,
        //rotationAmount: 90 + "deg", 
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
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

