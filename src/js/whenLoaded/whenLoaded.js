// whenLoaded.js

// if true, right click context menu off
// if false, right click context menu shows
let preventRightClickFlag = false;

function whenLoaded()
{
    /*
    makeInputContainer();

    makeCharacterChooseButton(0, 30, 'characterChooser');

    // bg chooser on the left
    makeBgChooserButton(0, 200, 'bgChooser');

    makeCharacterGalleryChooser(0, 200, 'characterGallery');
    */

    makeZoomIcon();

    // lists all menus
    menuMenus();

    bottomMenu();

    //makeTextureInfoBox();

    menuQuickPrefs();

    // menu for - camera - follow - stay
    //menuSettings();

    menuScenesVertical();

    cameraFlag = 'stay';

    // menu for - play Movie - stop Movie
    //menuPlayMovie();

    // mouse position, bottom left of screen
    // mousePositionShow();

    // shows all image info in box on left bottom of screen
    //makeDataArea();

    // make character chooser menu section
    //menuCharacterChooserInput();

    //let theEvent;

    if (preventRightClickFlag == true)
    {
        // prevent right click
        theEvent = window.addEventListener("contextmenu", e => e.preventDefault());
    }
    else if (preventRightClickFlag == false)
    {
         window.removeEventListener("contextmenu", theEvent);
     }

    // prevent right click contextmenu
    rightClickOff();

    // game engine controls
    window.addEventListener("keydown", theControls, false);

    window.addEventListener("keyup", theControls, false);

    // load scene, with props and characters
    // scene(whichScene);
    // scene(scene_beach_001);

    scene(scene_tv_room_001);

    // load sfx sounds to screen
    // whichArray, whichFolder
    //loadSounds("sfx", "sfx");
    loadSounds(sfx);

    // archived
    // menuDropDownScenes(scenes, 'ayan1', 'Greetings', 'sfx_warp_001.mp4', 5, 5);

    // listen for mouse click and activate mousePos function
    window.addEventListener("click", mousePos, false);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

