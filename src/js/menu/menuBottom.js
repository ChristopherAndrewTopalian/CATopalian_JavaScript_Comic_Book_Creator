// menuBottom.js

function bottomMenu()
{
    let mainDiv = ce("div");
    mainDiv.id = "bottomMenuId";
    mainDiv.className = 'interface';
    mainDiv.style.position = "fixed";
    mainDiv.style.bottom = 0 + "px";
    mainDiv.style.left = 0 + "px";
    //mainDiv.style.height = 50 + 'px';
    mainDiv.style.display = "flex";
    mainDiv.style.flexDirection = "column";
    mainDiv.style.zIndex = 10000;
    ba(mainDiv);

    //-//

    let subDiv = ce("div");
    mainDiv.append(subDiv);

    //-//

    let closeButton = ce("button");
    closeButton.textContent = "X";
    closeButton.setAttribute("gloss","Close");
    closeButton.className = "ourButton tags2";
    closeButton.onclick = function()
    {
        if (ge("bottomMenuId"))
        {
            clickSound();
            ge("bottomMenuId").remove();
        }
    };

    closeButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(closeButton);

    //-//

    let selectorGalleryButton = ce("button");
    selectorGalleryButton.textContent = "Sel";
    selectorGalleryButton.setAttribute("gloss","Selection Gallery");
    selectorGalleryButton.className = "ourButton tags2";
    selectorGalleryButton.onclick = function()
    {
        clickSound();

        makeSelectorGalleryImages(currentScene, 'background');
    };

    selectorGalleryButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(selectorGalleryButton);

    //-//

    let characterGalleryButton = ce("button");
    characterGalleryButton.textContent = "C";
    characterGalleryButton.setAttribute("gloss","Characters");
    characterGalleryButton.className = "ourButton tags2";
    characterGalleryButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, 'character');
    };

    characterGalleryButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(characterGalleryButton);

    //-//

    let characterGalleryArrayButton = ce("button");
    characterGalleryArrayButton.textContent = "CA";
    characterGalleryArrayButton.setAttribute("gloss","CharactersArray");
    characterGalleryArrayButton.className = "ourButton tags2";
    characterGalleryArrayButton.onclick = function()
    {
        clickSound();

        galleryMaker(galleryCharactersAOO, 'maven');

        //galleryMakerArray(galleryCharactersArray, 'character');
    };

    characterGalleryArrayButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(characterGalleryArrayButton);

    //-//

    let headButton = ce("button");
    headButton.textContent = "H";
    headButton.setAttribute("gloss", "Heads");
    headButton.className = "ourButton tags2";
    headButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, 'head');
    };

    headButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(headButton);

    //-//

    let bodyButton = ce("button");
    bodyButton.textContent = "B";
    bodyButton.setAttribute("gloss","Bodies");
    bodyButton.className = "ourButton tags2";
    bodyButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, 'body');
    };

    bodyButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(bodyButton);

    //-//

    let propButton = ce("button");
    propButton.textContent = "P";
    // propButton.title = "Props";
    propButton.setAttribute("gloss", "Props");
    propButton.className = "ourButton tags2";
    propButton.onclick = function()
    {
        clickSound();
        galleryMaker(everything, 'props');
    };

    propButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(propButton);

    //-//

    let bgGalleryButton = ce("button");
    bgGalleryButton.textContent = "BG";
    bgGalleryButton.setAttribute("gloss","Backgrounds");
    bgGalleryButton.className = "ourButton tags2";
    bgGalleryButton.onclick = function()
    {
        clickSound();
        galleryMaker(backgrounds, 'background');
    };

    bgGalleryButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(bgGalleryButton);

    //-//

    let videoGalleryButton = ce("button");
    videoGalleryButton.setAttribute("gloss","video gallery");
    videoGalleryButton.className = "ourButton tags2";
    videoGalleryButton.textContent = "V";
    videoGalleryButton.onclick = function()
    {
        clickSound();
        galleryMakerVideos(everythingVideos, 'video');
    };

    videoGalleryButton.onmouseover = function()
    {
        hoverSound();
    };

    subDiv.append(videoGalleryButton);

    //-//

    // quickPrefs
    let quickPrefsButton = ce("button");
    quickPrefsButton.setAttribute("gloss","Quick Preferences");
    quickPrefsButton.className = "ourButton tags2";
    quickPrefsButton.textContent = "Pref";
    quickPrefsButton.onclick = function()
    {
        clickSound();

        if (ge("quickPrefs"))
        {
            alert("Quick Prefs\nis located at the bottom right\nof the screen");
        }
        else
        {
            alert("Quick Prefs menu\nwill be created at the\nbottom right of the screen");
        }
        menuQuickPrefs();
    };
    quickPrefsButton.onmouseover = function()
    {
        hoverSound();
    };
    subDiv.append(quickPrefsButton);

    //-//

    // inputButtons
    let inputButtons = ce("button");
    inputButtons.setAttribute("gloss","Input Buttons");
    inputButtons.className = "ourButton tags2";
    inputButtons.textContent = "Input";
    inputButtons.onmouseover = function()
    {
        hoverSound();
    };
    inputButtons.onclick = function()
    {
        clickSound();
        makeInputContainer('true');
    };
    subDiv.append(inputButtons);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

