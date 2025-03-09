// menuMenus2.js

function menuMenus()
{
    if (ge("menuMenusId"))
    {
        ge("menuMenusId").remove();
    }

    let mainDiv = ce("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.left = 0 + "px";
    mainDiv.style.top = 22 + "px";
    mainDiv.style.zIndex = 1000;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    mainDiv.id = "menuMenusId";
    ba(mainDiv);

    // Close Button
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
    theMaximize.textContent = "□";
    theMaximize.className = "ourButton";
    theMaximize.style.position = "absolute";
    theMaximize.style.left = 30 + "px";
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
    subDiv.style.width = "290px";
    subDiv.style.marginLeft = "5px";
    subDiv.style.marginRight = "5px";
    subDiv.className = "scrolling";
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'column';
    subDiv.style.gap = 1 + 'px';
    subDiv.style.alignItems = 'flex-start';
    mainDiv.append(subDiv);

    //-//

    let selectorButton = ce("button");
    selectorButton.textContent = "SELECTOR";
    selectorButton.className = "ourButton";
    selectorButton.title = "makeButtonsForEachCharacter";
    selectorButton.onclick = function()
    {
        clickSound();
        makeButtonsForEachCharacter();
        cl("makeButtonsForEachCharacter");
    };
    subDiv.append(selectorButton);

    //-//

    let backgroundsButton = ce("button");
    backgroundsButton.textContent = "BACKGROUNDS";
    backgroundsButton.className = "ourButton";
    backgroundsButton.title = "menuBackground";
    backgroundsButton.onclick = function()
    {
        clickSound();
        menuBackground("house_001", "theBgId", "Backgrounds", "sfx_warp_001", 550, 0, "house_001", "inside");
        cl("menuBackground");
    };
    subDiv.append(backgroundsButton);

    //-//

    let charactersButton = ce("button");
    charactersButton.textContent = "CHARACTERS";
    charactersButton.className = "ourButton";
    charactersButton.title = "galleryMaker";
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
    propsButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "props");
        cl("galleryMaker");
    };
    subDiv.append(propsButton);

    //-//

    let jetsButton = ce("button");
    jetsButton.textContent = "JETS";
    jetsButton.className = "ourButton";
    jetsButton.title = "galleryMaker";
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
    dronesMilitaryButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, "drone_military");
        cl("galleryMaker");
    };
    subDiv.append(dronesMilitaryButton);

    //-//

    let hideMouseInfoButton = ce("button");
    hideMouseInfoButton.textContent = "Mouse Info OFF";
    hideMouseInfoButton.className = "ourButton";
    hideMouseInfoButton.title = "hideMouseInfo";
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
    mousePositionShowButton.onclick = function()
    {
        clickSound();
        mousePositionShow();
        cl("mousePositionShow");
    };
    subDiv.append(mousePositionShowButton);

    //-//

    let menuAnimationIconsButton = ce("button");
    menuAnimationIconsButton.textContent = "Animation Presets";
    menuAnimationIconsButton.className = "ourButton";
    menuAnimationIconsButton.title = "menuAnimationIcons";
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
    makeScriptEditorButton.onclick = function()
    {
        clickSound();
        makeScriptEditor();
        cl("makeScriptEditor");
    };
    subDiv.append(makeScriptEditorButton);

    //-//

    let menuRightClickFlagButton = ce("button");
    menuRightClickFlagButton.textContent = "Right Click On or Off";
    menuRightClickFlagButton.className = "ourButton";
    menuRightClickFlagButton.title = "menuRightClickFlag";
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
    menuMoveRandomPlacesButton.onclick = function()
    {
        clickSound();
        menuMoveRandomPlaces();
        cl("menuMoveRandomPlaces");
    };
    subDiv.append(menuMoveRandomPlacesButton);

    //-//

    let menuChangeTextureOfCharacterButton = ce("button");
    menuChangeTextureOfCharacterButton.textContent = "Change the Texture of the Character";
    menuChangeTextureOfCharacterButton.className = "ourButton";
    menuChangeTextureOfCharacterButton.title = "menuChangeTextureOfCharacter";
    menuChangeTextureOfCharacterButton.onclick = function()
    {
        clickSound();
        menuChangeTextureOfCharacter();
        cl("menuChangeTextureOfCharacter");
    };
    subDiv.append(menuChangeTextureOfCharacterButton);

    //-//

    let menuAnimationsArrayOfObjectsNICEButton = ce("button");
    menuAnimationsArrayOfObjectsNICEButton.textContent = "ANIMATION Menu";
    menuAnimationsArrayOfObjectsNICEButton.className = "ourButton";
    menuAnimationsArrayOfObjectsNICEButton.title = "menuAnimationsArrayOfObjectsNICE";
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
    menuAnimationsArrayOfObjectsHereButton.onclick = function()
    {
        clickSound();
        menuAnimationsArrayOfObjectsHere(animationsArrayOfObjects, 'animation');
        cl("menuAnimationsArrayOfObjectsHere");
    };
    subDiv.append(menuAnimationsArrayOfObjectsHereButton);

    //-//

    let menuCharacterTextureButton = ce("button");
    menuCharacterTextureButton.textContent = "CHARACTER - Texture Change";
    menuCharacterTextureButton.className = "ourButton";
    menuCharacterTextureButton.title = "menuCharacterTexture";
    menuCharacterTextureButton.onclick = function()
    {
        clickSound();
        menuCharacterTexture(ayan_clothes_blue, 'ayan', 'ayan_clothes_blue', 'ayan1', 'Ayan', 'sfx_warp_001', 700, 0);
        cl("menuCharacterTexture");
    };
    subDiv.append(menuCharacterTextureButton);

    //-//

    let menuScenesButton = ce("button");
    menuScenesButton.textContent = "SCENES";
    menuScenesButton.className = "ourButton";
    menuScenesButton.title = "menuScenes";
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
    menuGifButton.onclick = function()
    {
        clickSound();
        menuGif(gifsLand, 'prop_tv_screen_dark', 'TV Programs', 'sfx_warp_001', 250, 0);
        cl("menuGif");
    };
    subDiv.append(menuGifButton);

    //-//

    let bottomMenuButton = ce("button");
    bottomMenuButton.textContent = "Bottom Menu";
    bottomMenuButton.className = "ourButton";
    bottomMenuButton.title = "bottomMenu";
    bottomMenuButton.onclick = function()
    {
        clickSound();
        bottomMenu();
        cl("bottomMenu");
    };
    subDiv.append(bottomMenuButton);

    //-//

    let menuBackgroundMoviesFullButton = ce("button");
    menuBackgroundMoviesFullButton.textContent = "TV - Background Movie Menu - Full";
    menuBackgroundMoviesFullButton.className = "ourButton";
    menuBackgroundMoviesFullButton.title = "menuBackgroundMoviesHERE";
    menuBackgroundMoviesFullButton.onclick = function()
    {
        clickSound();
        menuBackgroundMoviesHERE('full', movies, 'sfx_warp_001');
        cl("menuBackgroundMoviesHERE (full)");
    };
    subDiv.append(menuBackgroundMoviesFullButton);

    //-//

    let menuBackgroundMoviesSizedButton = ce("button");
    menuBackgroundMoviesSizedButton.textContent = "TV - Background Movie Menu - Sized";
    menuBackgroundMoviesSizedButton.className = "ourButton";
    menuBackgroundMoviesSizedButton.title = "menuBackgroundMoviesHERE";
    menuBackgroundMoviesSizedButton.onclick = function()
    {
        clickSound();
        menuBackgroundMoviesHERE('sized', movies, 'tvMovies', 'Menu Background Movies Size', 'sfx_warp_001', 250, 0);
        cl("menuBackgroundMoviesHERE (sized)");
    };
    subDiv.append(menuBackgroundMoviesSizedButton);

    //-//

    let backgroundGifButton = ce("button");
    backgroundGifButton.textContent = "Animated Gif Background";
    backgroundGifButton.className = "ourButton";
    backgroundGifButton.title = "backgroundGif";
    backgroundGifButton.onclick = function()
    {
        clickSound();
        backgroundGif('bgGifs', 0);
        cl("backgroundGif");
    };
    subDiv.append(backgroundGifButton);

    //-//

    let menuPlayMovieButton = ce("button");
    menuPlayMovieButton.textContent = "TV - Video";
    menuPlayMovieButton.className = "ourButton";
    menuPlayMovieButton.title = "menuPlayMovie";
    menuPlayMovieButton.onclick = function()
    {
        clickSound();
        menuPlayMovie();
        cl("menuPlayMovie");
    };
    subDiv.append(menuPlayMovieButton);

    //-//

    let menuCharacterChooserInputButton = ce("button");
    menuCharacterChooserInputButton.textContent = "MODEL - Choose or Drag Character";
    menuCharacterChooserInputButton.className = "ourButton";
    menuCharacterChooserInputButton.title = "menuCharacterChooserInput";
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
    menuZoomButton.onclick = function()
    {
        clickSound();
        menuZoom();
        cl("menuZoom");
    };
    subDiv.append(menuZoomButton);

    //-//

    let makeInputContainerButton = ce("button");
    makeInputContainerButton.textContent = "makeInputContainer";
    makeInputContainerButton.className = "ourButton";
    makeInputContainerButton.title = "makeInputContainer";
    makeInputContainerButton.onclick = function()
    {
        clickSound();
        makeInputContainer('true');
        cl("makeInputContainer");
    };
    subDiv.append(makeInputContainerButton);

    //-//

    // set initial height
    ge("menuMenusSubDivId").style.height = 0 + "px";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

