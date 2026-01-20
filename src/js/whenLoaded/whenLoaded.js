// whenLoaded.js

function whenLoaded()
{
    // camera setting
    cameraFlag = 'stay';

    // lists all menus
    menuMenus();

    bottomMenu();

    menuQuickPrefs();

    menuScenesVertical();

    makeZoomIcon();

    mousePositionShow();

    // prevent right click contextmenu
    rightClickOff();

    // game engine controls

    // add event listener for keydown
    window.addEventListener("keydown", theControls, false);

    // add event listener for keyup
    window.addEventListener("keyup", theControls, false);

    // load scene, with props and characters
    scene(scene_tv_room_001);
    scene_tv_room_001_actions();

    loadSounds(sfx);

    // add event listener for left mouse click and activate mousePos function
    window.addEventListener("click", mousePos, false);

    //-//

    // add event listener for escape button to show or hide interface
    interfaceShowHide();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

