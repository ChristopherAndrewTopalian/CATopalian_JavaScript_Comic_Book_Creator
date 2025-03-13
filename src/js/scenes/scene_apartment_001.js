// scene_apartment_001.js

let scene_apartment_001  = [
    {
        // scene info
        scene: "scene_apartment_001",
        sceneTitle: "Apartment",
        description: "A nice apartment",

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
        // positioned wherever main character was located in the previous scene
        //theIdToMove: "ayan1",

        // background texture
        type: "jpg",
        category: "background",
        className: "theBackground2",
        name: "Apartment",
        texture: "src/media/texture/background/apartment_001/001.webp",
        theZindex: 1,
        theId: "theBgId",
        sizeX: 900,
        theX: 0,
        theY: 0,
        tileLevel: true
    },

    {
        type: "webp",
        category: "character",
        name: "ayan",
        texture: "src/media/texture/model/ayan/standing/model_ayan_standing_right.webp",
        theId: "ayan",
        sizeX: 150,
        theX: 156,
        theY: 583,
        theLayer: 4,
        flipHorizontal: true,
        flipVertical: false,
        rotationAmount: 0 + "deg",
        className: "characterStyle",
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

    {
        type: "webp",
        category: "character",
        name: "maven2",
        texture: "src/media/texture/model/maven/full/front.webp",
        theId: "maven2",
        sizeX: 121,
        theX: 350,
        theY: 140,
        flipHorizontal: false,
        flipVertical: false,
        className: "characterStyle",
        theLayer: 3,
        rotationAmount: 0 + "deg",
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

    {
        type: "webp",
        category: "character",
        name: "maven",
        texture: "src/media/texture/model/maven/full/front.webp",
        theId: "maven",
        sizeX: 279,
        theX: 852,
        theY: 432,
        theLayer: 3,
        flipHorizontal: true,
        flipVertical: false,
        className: "characterStyle",
        rotationAmount: 0 + "deg",
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

