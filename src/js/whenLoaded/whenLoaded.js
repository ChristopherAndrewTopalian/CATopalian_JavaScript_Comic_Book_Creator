// whenLoaded.js

function whenLoaded()
{
    // lists all menus
    menuMenus();

    bottomMenu();

    //makeTextureInfoBox();

    menuQuickPrefs();

    // menu for - camera - follow - stay
    //menuSettings();

    menuScenesVertical();

    makeZoomIcon();

    cameraFlag = 'stay';

    mousePositionShow();

    // prevent right click contextmenu
    rightClickOff();

    // game engine controls
    window.addEventListener("keydown", theControls, false);

    window.addEventListener("keyup", theControls, false);

    // load scene, with props and characters
    scene(scene_tv_room_001);

    loadSounds(sfx);

    // listen for mouse click and activate mousePos function
    window.addEventListener("click", mousePos, false);

    //-//

    // add event listener for escape button to show or hide interface
    interfaceShowHide();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

