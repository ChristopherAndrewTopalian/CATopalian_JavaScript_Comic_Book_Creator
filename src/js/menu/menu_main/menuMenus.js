// menuMenus.js

function menuMenus()
{
    if (ge("menuMenusId"))
    {
        ge("menuMenusId").remove();
    }

    let mainDiv = ce("div");
    mainDiv.className = 'interface';
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 0 + "px";
    mainDiv.style.top = 22 + "px";
    mainDiv.style.zIndex = 1000;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.id = "menuMenusId";
    ba(mainDiv);

    //-//

    let theCloseX = ce("button");
    theCloseX.textContent = "_";
    theCloseX.className = "ourButton";
    theCloseX.style.position = "absolute";
    theCloseX.style.left = 0 + "px";
    theCloseX.style.top = -22 + "px";
    theCloseX.onclick = function()
    {
        clickSound();

        ge("menuMenusSubDivId").style.height = 0 + "px";
    };
    mainDiv.append(theCloseX);

    //-//

    let theMaximize = ce("button");
    theMaximize.textContent = "O";
    theMaximize.className = "ourButton";
    theMaximize.style.position = "absolute";
    theMaximize.style.left = 20 + "px";
    theMaximize.style.top = -22 + "px";
    theMaximize.onclick = function()
    {
        clickSound();
        ge("menuMenusSubDivId").style.height = 200 + "px";
    };
    mainDiv.append(theMaximize);

    //-//

    let subDiv = ce("div");
    subDiv.style.resize = "both";
    subDiv.style.height = 200 + "px";
    subDiv.id = "menuMenusSubDivId";
    subDiv.style.width = "180px";
    subDiv.style.marginLeft = "5px";
    subDiv.style.marginRight = "5px";
    subDiv.className = "scrolling";
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'column';
    subDiv.style.gap = 1 + 'px';
    subDiv.style.alignItems = 'flex-start';
    mainDiv.append(subDiv);

    //-//

    let electronicsBtn = ce("button");
    electronicsBtn.textContent = "Electronics";
    electronicsBtn.className = "ourButton";
    electronicsBtn.title = "galleryMaker";
    electronicsBtn.onmouseover = function()
    {
        hoverSound();
    };
    electronicsBtn.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "electronics");
        cl("galleryMaker");
    };
    subDiv.append(electronicsBtn);

    //-//

    let jetsButton = ce("button");
    jetsButton.textContent = "JETS";
    jetsButton.className = "ourButton";
    jetsButton.title = "galleryMaker";
    jetsButton.onmouseover = function()
    {
        hoverSound();
    };
    jetsButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "jet");
        cl("galleryMaker");
    };
    subDiv.append(jetsButton);

    //-//

    let tanksButton = ce("button");
    tanksButton.textContent = "TANKS";
    tanksButton.className = "ourButton";
    tanksButton.title = "galleryMaker";
    tanksButton.onmouseover = function()
    {
        hoverSound();
    };
    tanksButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "tank");
        cl("galleryMaker");
    };
    subDiv.append(tanksButton);

    //-//

    let artilleryButton = ce("button");
    artilleryButton.textContent = "ARTILLERY";
    artilleryButton.className = "ourButton";
    artilleryButton.title = "galleryMaker";
    artilleryButton.onmouseover = function()
    {
        hoverSound();
    };
    artilleryButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "artillery");
        cl("galleryMaker");
    };
    subDiv.append(artilleryButton);

    //-//

    let dronesMilitaryButton = ce("button");
    dronesMilitaryButton.textContent = "DRONES_MILITARY";
    dronesMilitaryButton.className = "ourButton";
    dronesMilitaryButton.title = "galleryMaker";
    dronesMilitaryButton.onmouseover = function()
    {
        hoverSound();
    };
    dronesMilitaryButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "drone_military");
        cl("galleryMaker");
    };
    subDiv.append(dronesMilitaryButton);

    //-//

    let humveeButton = ce("button");
    humveeButton.textContent = "HUMVEES";
    humveeButton.className = "ourButton";
    humveeButton.title = "galleryMaker";
    humveeButton.onmouseover = function()
    {
        hoverSound();
    };
    humveeButton.onclick = function()
    {
        clickSound();
        galleryMaker(galleryHumvees, "humvee");
    };
    subDiv.append(humveeButton);

    //-//

    let jeepsButton = ce("button");
    jeepsButton.textContent = "JEEPS";
    jeepsButton.className = "ourButton";
    jeepsButton.title = "galleryMaker";
    jeepsButton.onmouseover = function()
    {
        hoverSound();
    };
    jeepsButton.onclick = function()
    {
        clickSound();
        galleryMaker(galleryJeeps, "jeep");
    };
    subDiv.append(jeepsButton);

    //-//

    let militaryMalesButton = ce("button");
    militaryMalesButton.textContent = "MILITARY_MALES";
    militaryMalesButton.className = "ourButton";
    militaryMalesButton.title = "galleryMaker";
    militaryMalesButton.onmouseover = function()
    {
        hoverSound();
    };
    militaryMalesButton.onclick = function()
    {
        clickSound();
        // we can use the specific gallery instead of using the everything array
        galleryMaker(galleryMilitaryMales, "military_males");
    };
    subDiv.append(militaryMalesButton);

    //-//

    let yachtsButton = ce("button");
    yachtsButton.textContent = "YACHTS";
    yachtsButton.className = "ourButton";
    yachtsButton.title = "galleryMaker";
    yachtsButton.onmouseover = function()
    {
        hoverSound();
    };
    yachtsButton.onclick = function()
    {
        clickSound();
        galleryMaker(galleryYachts, "yacht");
    };
    subDiv.append(yachtsButton);

    //-//

    let deskButton = ce("button");
    deskButton.textContent = "DESKS";
    deskButton.className = "ourButton";
    deskButton.title = "galleryMaker";
    deskButton.onmouseover = function()
    {
        hoverSound();
    };
    deskButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "desk");
    };
    subDiv.append(deskButton);

    //-//

    let tablesButton = ce("button");
    tablesButton.textContent = "TABLES";
    tablesButton.className = "ourButton";
    tablesButton.title = "galleryMaker";
    tablesButton.onmouseover = function()
    {
        hoverSound();
    };
    tablesButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "table");
    };
    subDiv.append(tablesButton);

    //-//

    let peopleButton = ce("button");
    peopleButton.textContent = "PEOPLE";
    peopleButton.className = "ourButton";
    peopleButton.title = "galleryMaker";
    peopleButton.onmouseover = function()
    {
        hoverSound();
    };
    peopleButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "person");
    };
    subDiv.append(peopleButton);

    //-//

    let charactersButton = ce("button");
    charactersButton.textContent = "CHARACTERS";
    charactersButton.className = "ourButton";
    charactersButton.title = "galleryMaker";
    charactersButton.onmouseover = function()
    {
        hoverSound();
    };
    charactersButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "character");
        cl("galleryMaker");
    };
    subDiv.append(charactersButton);

    //-//

    let headButton = ce("button");
    headButton.textContent = "HEAD";
    headButton.className = "ourButton";
    headButton.title = "galleryMaker";
    headButton.onmouseover = function()
    {
        hoverSound();
    };
    headButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "head");
        cl("galleryMaker");
    };
    subDiv.append(headButton);

    //-//

    let bodyButton = ce("button");
    bodyButton.textContent = "BODY";
    bodyButton.className = "ourButton";
    bodyButton.title = "galleryMaker";
    bodyButton.onmouseover = function()
    {
        hoverSound();
    };
    bodyButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "body");
        cl("galleryMaker");
    };
    subDiv.append(bodyButton);

    //-//

    let propsButton = ce("button");
    propsButton.textContent = "PROPS";
    propsButton.className = "ourButton";
    propsButton.title = "galleryMaker";
    propsButton.onmouseover = function()
    {
        hoverSound();
    };
    propsButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "props");
        cl("galleryMaker");
    };
    subDiv.append(propsButton);

    //-//

    /*
    let hideMouseInfoButton = ce("button");
    hideMouseInfoButton.textContent = "Mouse Info OFF";
    hideMouseInfoButton.className = "ourButton";
    hideMouseInfoButton.title = "hideMouseInfo";
    hideMouseInfoButton.onmouseover = function()
    {
        hoverSound();
    };
    hideMouseInfoButton.onclick = function()
    {
        clickSound();
        hideMouseInfo();
        cl("hideMouseInfo");
    };
    subDiv.append(hideMouseInfoButton);

    //-//

    let mousePositionShowButton = ce("button");
    mousePositionShowButton.textContent = "Mouse Info ON";
    mousePositionShowButton.className = "ourButton";
    mousePositionShowButton.title = "mousePositionShow";
    mousePositionShowButton.onmouseover = function()
    {
        hoverSound();
    };
    mousePositionShowButton.onclick = function()
    {
        clickSound();
        mousePositionShow();
        cl("mousePositionShow");
    };
    subDiv.append(mousePositionShowButton);
    */

    //-//

    let mouseInfoToggle = false;

    let mouseInfoBtn = ce("button");
    mouseInfoBtn.textContent = "Mouse Info";
    mouseInfoBtn.className = "ourButton";
    mouseInfoBtn.title = "mouseInfoBtn";
    mouseInfoBtn.onmouseover = function()
    {
        // hover sound
        hoverSound();
    };
    mouseInfoBtn.onclick = function()
    {
        // click sound
        clickSound();

        if (mouseInfoToggle == false)
        {
            hideMouseInfo();
            cl("hideMouseInfo");
            mouseInfoBtn.style.fontWeight = 'normal';
            mouseInfoToggle = true;
        }
        else
        {
            mousePositionShow();
            cl("mousePositionShow");
            mouseInfoBtn.style.fontWeight = 'bold';
            mouseInfoToggle = false;
        }
    };
    subDiv.append(mouseInfoBtn);

    //-//

    let menuAnimationIconsButton = ce("button");
    menuAnimationIconsButton.textContent = "Animation Presets";
    menuAnimationIconsButton.className = "ourButton";
    menuAnimationIconsButton.title = "menuAnimationIcons";
    menuAnimationIconsButton.onmouseover = function()
    {
        hoverSound();
    };
    menuAnimationIconsButton.onclick = function()
    {
        clickSound();
        menuAnimationIcons();
        cl("menuAnimationIcons");
    };
    subDiv.append(menuAnimationIconsButton);

    //-//

    let menuCameraDivButton = ce("button");
    menuCameraDivButton.textContent = "CAMERA - Follow or Stay";
    menuCameraDivButton.className = "ourButton";
    menuCameraDivButton.title = "menuCameraDiv";
    menuCameraDivButton.onmouseover = function()
    {
        hoverSound();
    };
    menuCameraDivButton.onclick = function()
    {
        clickSound();
        menuCameraDiv();
        cl("menuCameraDiv");
    };
    subDiv.append(menuCameraDivButton);

    //-//

    let menuImageInfoButton = ce("button");
    menuImageInfoButton.textContent = "Get Image Data";
    menuImageInfoButton.className = "ourButton";
    menuImageInfoButton.title = "menuImageInfo";
    menuImageInfoButton.onmouseover = function()
    {
        hoverSound();
    };
    menuImageInfoButton.onclick = function()
    {
        clickSound();
        menuImageInfo();
        cl("menuImageInfo");
    };
    subDiv.append(menuImageInfoButton);

    //-//

    let neededButton = ce("button");
    neededButton.textContent = "Image Info";
    neededButton.className = "ourButton";
    neededButton.title = "needed";
    neededButton.onmouseover = function()
    {
        hoverSound();
    };
    neededButton.onclick = function()
    {
        clickSound();
        needed();
        cl("needed");
    };
    subDiv.append(neededButton);

    //-//

    let makeScriptEditorButton = ce("button");
    makeScriptEditorButton.textContent = "Make Script Editor";
    makeScriptEditorButton.className = "ourButton";
    makeScriptEditorButton.title = "makeScriptEditor";
    makeScriptEditorButton.onmouseover = function()
    {
        hoverSound();
    };
    makeScriptEditorButton.onclick = function()
    {
        clickSound();

        if (online == false)
        {
            makeScriptEditor();
        }
        else if (online == true)
        {
            alert('No Script Editor Online Yet');
        }
    };
    subDiv.append(makeScriptEditorButton);

    //-//

    let menuRightClickFlagButton = ce("button");
    menuRightClickFlagButton.textContent = "Right Click On or Off";
    menuRightClickFlagButton.className = "ourButton";
    menuRightClickFlagButton.title = "menuRightClickFlag";
    menuRightClickFlagButton.onmouseover = function()
    {
        hoverSound();
    };
    menuRightClickFlagButton.onclick = function()
    {
        clickSound();
        menuRightClickFlag();
        cl("menuRightClickFlag");
    };
    subDiv.append(menuRightClickFlagButton);

    //-//

    let menuVoiceLoopButton = ce("button");
    menuVoiceLoopButton.textContent = "Voice Loop Options";
    menuVoiceLoopButton.className = "ourButton";
    menuVoiceLoopButton.title = "menuVoiceLoop";
    menuVoiceLoopButton.onmouseover = function()
    {
        hoverSound();
    };
    menuVoiceLoopButton.onclick = function()
    {
        clickSound();
        menuVoiceLoop();
        cl("menuVoiceLoop");
    };
    subDiv.append(menuVoiceLoopButton);

    //-//

    let menuMoveRandomPlacesButton = ce("button");
    menuMoveRandomPlacesButton.textContent = "Move Players Around";
    menuMoveRandomPlacesButton.className = "ourButton";
    menuMoveRandomPlacesButton.title = "menuMoveRandomPlaces";
    menuMoveRandomPlacesButton.onmouseover = function()
    {
        hoverSound();
    };
    menuMoveRandomPlacesButton.onclick = function()
    {
        clickSound();
        menuMoveRandomPlaces();
        cl("menuMoveRandomPlaces");
    };
    subDiv.append(menuMoveRandomPlacesButton);

    //-//

    let menuAnimationsArrayOfObjectsNICEButton = ce("button");
    menuAnimationsArrayOfObjectsNICEButton.textContent = "ANIMATION Menu";
    menuAnimationsArrayOfObjectsNICEButton.className = "ourButton";
    menuAnimationsArrayOfObjectsNICEButton.title = "menuAnimationsArrayOfObjectsNICE";
    menuAnimationsArrayOfObjectsNICEButton.onmouseover = function()
    {
        hoverSound();
    };
    menuAnimationsArrayOfObjectsNICEButton.onclick = function()
    {
        clickSound();
        menuAnimationsArrayOfObjectsNICE('animationsArrayOfObjects', 'animation');
        cl("menuAnimationsArrayOfObjectsNICE");
    };
    subDiv.append(menuAnimationsArrayOfObjectsNICEButton);

    //-//

    let menuAnimationsArrayOfObjectsHereButton = ce("button");
    menuAnimationsArrayOfObjectsHereButton.textContent = "ANIMATION Details Menu";
    menuAnimationsArrayOfObjectsHereButton.className = "ourButton";
    menuAnimationsArrayOfObjectsHereButton.title = "menuAnimationsArrayOfObjectsHere";
    menuAnimationsArrayOfObjectsHereButton.onmouseover = function()
    {
        hoverSound();
    };
    menuAnimationsArrayOfObjectsHereButton.onclick = function()
    {
        clickSound();
        menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, 'animation');
        cl("menuAnimationsArrayOfObjectsHere");
    };
    subDiv.append(menuAnimationsArrayOfObjectsHereButton);

    //-//

    let menuScenesButton = ce("button");
    menuScenesButton.textContent = "SCENES";
    menuScenesButton.className = "ourButton";
    menuScenesButton.title = "menuScenes";
    menuScenesButton.onmouseover = function()
    {
        hoverSound();
    };
    menuScenesButton.onclick = function()
    {
        clickSound();

        menuScenes(scenes, 'something', 'Scenes', 'sfx_warp_001', 900, 540);

        cl("menuScenes");
    };
    subDiv.append(menuScenesButton);

    //-//

    let menuDropDownMenuButton = ce("button");
    menuDropDownMenuButton.textContent = "Maven COMIC BUBBLES";
    menuDropDownMenuButton.className = "ourButton";
    menuDropDownMenuButton.title = "menuDropDownMenu";
    menuDropDownMenuButton.onmouseover = function()
    {
        hoverSound();
    };
    menuDropDownMenuButton.onclick = function()
    {
        clickSound();
        menuDropDownMenu(greetings, 'maven', 'Greetings', 'sfx_warp_001', 200, 50);
        cl("menuDropDownMenu");
    };
    subDiv.append(menuDropDownMenuButton);

    //-//

    let menuTvLoopButton = ce("button");
    menuTvLoopButton.textContent = "TV - Gif Loop";
    menuTvLoopButton.className = "ourButton";
    menuTvLoopButton.title = "menuTvLoop";
    menuTvLoopButton.onmouseover = function()
    {
        hoverSound();
    };
    menuTvLoopButton.onclick = function()
    {
        clickSound();
        menuTvLoop();
        cl("menuTvLoop");
    };
    subDiv.append(menuTvLoopButton);

    //-//

    let menuGifButton = ce("button");
    menuGifButton.textContent = "TV - Gif Menu";
    menuGifButton.className = "ourButton";
    menuGifButton.title = "menuGif";
    menuGifButton.onmouseover = function()
    {
        hoverSound();
    };
    menuGifButton.onclick = function()
    {
        clickSound();
        menuGif(gifsLand, 'prop_tv_screen_dark', 'TV Programs', 'sfx_warp_001', 250, 0);
        cl("menuGif");
    };
    subDiv.append(menuGifButton);

    //-//

    let menuPlayMovieButton = ce("button");
    menuPlayMovieButton.textContent = "TV - Video";
    menuPlayMovieButton.className = "ourButton";
    menuPlayMovieButton.title = "menuPlayMovie";
    menuPlayMovieButton.onmouseover = function()
    {
        hoverSound();
    };
    menuPlayMovieButton.onclick = function()
    {
        clickSound();
        menuPlayMovie();
        cl("menuPlayMovie");
    };
    subDiv.append(menuPlayMovieButton);

    //-//

    let menuBackgroundMoviesFullButton = ce("button");
    menuBackgroundMoviesFullButton.textContent = "BG Movies - Full";
    menuBackgroundMoviesFullButton.className = "ourButton";
    menuBackgroundMoviesFullButton.title = "menuBgVideoFull";
    menuBackgroundMoviesFullButton.onmouseover = function()
    {
        hoverSound();
    };
    menuBackgroundMoviesFullButton.onclick = function()
    {
        clickSound();

        menuBgVideoFull(movies);
    };
    subDiv.append(menuBackgroundMoviesFullButton);

    //-//

    let menuBgMoviesSizedButton = ce("button");
    menuBgMoviesSizedButton.textContent = "Bg Movies - Sized";
    menuBgMoviesSizedButton.className = "ourButton";
    menuBgMoviesSizedButton.title = "menuBgVideoSized";
    menuBgMoviesSizedButton.onmouseover = function()
    {
        hoverSound();
    };
    menuBgMoviesSizedButton.onclick = function()
    {
        clickSound();

        menuBgVideoSized(movies);
    };
    subDiv.append(menuBgMoviesSizedButton);

    //-//

    let menuCharacterChooserInputButton = ce("button");
    menuCharacterChooserInputButton.textContent = "Input Drag from Drag Folder";
    menuCharacterChooserInputButton.className = "ourButton";
    menuCharacterChooserInputButton.title = "menuCharacterChooserInput";
    menuCharacterChooserInputButton.onmouseover = function()
    {
        hoverSound();
    };
    menuCharacterChooserInputButton.onclick = function()
    {
        clickSound();
        menuCharacterChooserInput();
        cl("menuCharacterChooserInput");
    };
    subDiv.append(menuCharacterChooserInputButton);

    //-//

    let menuZoomButton = ce("button");
    menuZoomButton.textContent = "Zoom";
    menuZoomButton.className = "ourButton";
    menuZoomButton.title = "menuZoom";
    menuZoomButton.onmouseover = function()
    {
        hoverSound();
    };
    menuZoomButton.onclick = function()
    {
        clickSound();
        menuZoom();
        cl("menuZoom");
    };
    subDiv.append(menuZoomButton);

    //-//

    let makeInputContainerButton = ce("button");
    makeInputContainerButton.textContent = "File Chooser";
    makeInputContainerButton.className = "ourButton";
    makeInputContainerButton.title = "makeInputContainer";
    makeInputContainerButton.onmouseover = function()
    {
        hoverSound();
    };
    makeInputContainerButton.onclick = function()
    {
        clickSound();
        makeInputContainer('true');
        cl("makeInputContainer");
    };
    subDiv.append(makeInputContainerButton);

    //-//

    let backgroundGifButton = ce("button");
    backgroundGifButton.textContent = "Animated Gif Background";
    backgroundGifButton.className = "ourButton";
    backgroundGifButton.title = "backgroundGif";
    backgroundGifButton.onmouseover = function()
    {
        hoverSound();
    };
    backgroundGifButton.onclick = function()
    {
        clickSound();
        backgroundGif('bgGifs', 0);
        cl("backgroundGif");
    };
    subDiv.append(backgroundGifButton);

    //-//

    let menuGifsButton = ce("button");
    menuGifsButton.textContent = "Gif Backgrounds";
    menuGifsButton.className = "ourButton";
    menuGifsButton.title = "Gif Background";
    menuGifsButton.onmouseover = function()
    {
        hoverSound();
    };
    menuGifsButton.onclick = function()
    {
        clickSound();
        menuGifs();
    };
    subDiv.append(menuGifsButton);

    //-//

    let bottomMenuButton = ce("button");
    bottomMenuButton.textContent = "Bottom Menu";
    bottomMenuButton.className = "ourButton";
    bottomMenuButton.title = "bottomMenu";
    bottomMenuButton.onmouseover = function()
    {
        hoverSound();
    };
    bottomMenuButton.onclick = function()
    {
        clickSound();
        bottomMenu();
        cl("bottomMenu");
    };
    subDiv.append(bottomMenuButton);

    //-//

    let selectorButton = ce("button");
    selectorButton.textContent = "SELECTOR";
    selectorButton.className = "ourButton";
    selectorButton.title = "makeButtonsForEachCharacter";
    selectorButton.onmouseover = function()
    {
        hoverSound();
    };
    selectorButton.onclick = function()
    {
        clickSound();
        makeButtonsForEachCharacter();
    };
    subDiv.append(selectorButton);

    //-//

    let bgFitButton = ce("button");
    bgFitButton.textContent = "BG FIT";
    bgFitButton.className = "ourButton";
    bgFitButton.title = "makeBgFit";
    bgFitButton.onmouseover = function()
    {
        hoverSound();
    };
    bgFitButton.onclick = function()
    {
        clickSound();

        let bg = ge("theBgId");
        bg.style.width = "100%";
        bg.style.height = "100%";
        bg.style.objectFit = "cover";
        bg.style.objectPosition = "center";
    };
    subDiv.append(bgFitButton);

    //-//

    // set initial height to minimized
    // ge("menuMenusSubDivId").style.height = 0 + "px";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

