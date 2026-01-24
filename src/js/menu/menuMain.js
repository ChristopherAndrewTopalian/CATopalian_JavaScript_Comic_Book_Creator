// menuMain.js

function menuMain()
{
    let topContainer = ce('div');
    topContainer.className = 'interface';
    topContainer.style.overflowY = 'auto';
    topContainer.style.position = 'fixed';
    topContainer.style.left = '185px';
    topContainer.style.top = '0px';
    topContainer.style.zIndex = 6;
    topContainer.style.cursor = 'pointer';
    ba(topContainer);

    //-//

    let mainDetails = ce('details');
    topContainer.append(mainDetails);

    let mainSummary = ce('summary');
    mainSummary.textContent = 'Options';
    mainSummary.onclick = function()
    {
        clickSound();
    };
    mainDetails.append(mainSummary);

    //-//

    let mainDiv = ce('div');
    mainDiv.style.width = '445px';
    mainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    mainDiv.style.color = 'rgb(255, 255, 255)';
    mainDetails.append(mainDiv);

    //-//

    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    let galleryDetails = ce('details');
    subDiv.append(galleryDetails);

    let gallerySummary = ce('summary');
    gallerySummary.textContent = 'Galleries';
    gallerySummary.onclick = function()
    {
        clickSound();
    };
    galleryDetails.append(gallerySummary);

    //-//

    let galleryComponentsBtn = ce('button');
    galleryComponentsBtn.textContent = 'ELECTRONICS';
    galleryComponentsBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryComponentsBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryComponents);
    };
    galleryDetails.append(galleryComponentsBtn);

    //-//

    let galleryJetsBtn = ce('button');
    galleryJetsBtn.textContent = 'JETS';
    galleryJetsBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryJetsBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryJets);
    };
    galleryDetails.append(galleryJetsBtn);

    //-//

    let galleryTanksBtn = ce('button');
    galleryTanksBtn.textContent = 'TANKS';
    galleryTanksBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryTanksBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryTanks);
    };
    galleryDetails.append(galleryTanksBtn);

    //-//

    let galleryArtilleryBtn = ce('button');
    galleryArtilleryBtn.textContent = 'ARTILLERY';
    galleryArtilleryBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryArtilleryBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryArtillery);
    };
    galleryDetails.append(galleryArtilleryBtn);

    //-//

    let galleryDronesMilitaryBtn = ce('button');
    galleryDronesMilitaryBtn.textContent = 'Drones Military';
    galleryDronesMilitaryBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryDronesMilitaryBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryDronesMilitary);
    };
    galleryDetails.append(galleryDronesMilitaryBtn);

    //-//

    let galleryHumveeBtn = ce('button');
    galleryHumveeBtn.textContent = 'Humvees';
    galleryHumveeBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryHumveeBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryHumvees);
    };
    galleryDetails.append(galleryHumveeBtn);

    //-//

    let galleryJeepsBtn = ce('button');
    galleryJeepsBtn.textContent = 'Jeeps';
    galleryJeepsBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryJeepsBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryJeeps);
    };
    galleryDetails.append(galleryJeepsBtn);

    //-//

    let galleryMilitaryMalesBtn = ce('button');
    galleryMilitaryMalesBtn.textContent = 'Military Males';
    galleryMilitaryMalesBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryMilitaryMalesBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryMilitaryMales);
    };
    galleryDetails.append(galleryMilitaryMalesBtn);

    //-//

    let galleryYachtsBtn = ce('button');
    galleryYachtsBtn.textContent = 'YACHTS';
    galleryYachtsBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryYachtsBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryYachts);
    };
    galleryDetails.append(galleryYachtsBtn);

    //-//

    let galleryDesksBtn = ce('button');
    galleryDesksBtn.textContent = 'DESKS';
    galleryDesksBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryDesksBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryDesks);
    };
    galleryDetails.append(galleryDesksBtn);

    //-//

    let galleryTablesBtn = ce('button');
    galleryTablesBtn.textContent = 'TABLES';
    galleryTablesBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryTablesBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryTables);
    };
    galleryDetails.append(galleryTablesBtn);

    //-//

    let galleryPeopleBtn = ce('button');
    galleryPeopleBtn.textContent = 'PEOPLE';
    galleryPeopleBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryPeopleBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryPeople);
    };
    galleryDetails.append(galleryPeopleBtn);

    //-//

    let galleryCharactersBtn = ce('button');
    galleryCharactersBtn.textContent = 'CHARACTERS';
    galleryCharactersBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryCharactersBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryCharacters);
    };
    galleryDetails.append(galleryCharactersBtn);

    //-//

    let galleryHeadsBtn = ce('button');
    galleryHeadsBtn.textContent = 'HEADS';
    galleryHeadsBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryHeadsBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryHeads);
    };
    galleryDetails.append(galleryHeadsBtn);

    //-//

    let galleryBodyBtn = ce('button');
    galleryBodyBtn.textContent = 'BODY';
    galleryBodyBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryBodyBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryBody);
    };
    galleryDetails.append(galleryBodyBtn);

    //-//

    let galleryPropsBtn = ce('button');
    galleryPropsBtn.textContent = 'PROPS';
    galleryPropsBtn.onmouseover = function()
    {
        hoverSound();
    };
    galleryPropsBtn.onclick = function()
    {
        clickSound();

        galleryMaker(galleryProps);
    };
    galleryDetails.append(galleryPropsBtn);

    //----//

    let tvDetails = ce('details');
    subDiv.append(tvDetails);

    let tvSummary = ce('summary');
    tvSummary.textContent = 'TV Options';
    tvSummary.onclick = function()
    {
        clickSound();
    };
    tvDetails.append(tvSummary);

    let tvLoopBtn = ce('button');
    tvLoopBtn.textContent = 'TV Loop';
    tvLoopBtn.onmouseover = function()
    {
        hoverSound();
    };
    tvLoopBtn.onclick = function()
    {
        clickSound();
        menuTvLoop();
    };
    tvDetails.append(tvLoopBtn);

    //-//

    let tvGifBtn = ce('button');
    tvGifBtn.textContent = 'TV Gif Menu';
    tvGifBtn.onmouseover = function()
    {
        hoverSound();
    };
    tvGifBtn.onclick = function()
    {
        clickSound();
        menuGif(gifsLand, 'prop_tv_screen_dark', 'TV Programs', 'sfx_warp_001', 250, 0);
    };
    tvDetails.append(tvGifBtn);

    //-//

    let tvMovieBtn = ce('button');
    tvMovieBtn.textContent = 'TV Video';
    tvMovieBtn.onmouseover = function()
    {
        hoverSound();
    };
    tvMovieBtn.onclick = function()
    {
        clickSound();
        menuPlayMovie();
    };
    tvDetails.append(tvMovieBtn);

    //----//

    let bgDetails = ce('details');
    subDiv.append(bgDetails);

    let bgSummary = ce('summary');
    bgSummary.textContent = 'BG Videos';
    bgSummary.onclick = function()
    {
        clickSound();
    };
    bgDetails.append(bgSummary);

    let bgVidsFullBtn = ce('button');
    bgVidsFullBtn.textContent = 'BG Vids Full';
    bgVidsFullBtn.onmouseover = function()
    {
        hoverSound();
    };
    bgVidsFullBtn.onclick = function()
    {
        clickSound();
        menuBgVideoFull(movies);
    };
    bgDetails.append(bgVidsFullBtn);

    //-//

    let bgVidsSizedBtn = ce('button');
    bgVidsSizedBtn.textContent = 'BG Vids Sized';
    bgVidsSizedBtn.onmouseover = function()
    {
        hoverSound();
    };
    bgVidsSizedBtn.onclick = function()
    {
        clickSound();
        menuBgVideoSized(movies);
    };
    bgDetails.append(bgVidsSizedBtn);

    //----//

    let otherDetails = ce('details');
    subDiv.append(otherDetails);

    let otherSummary = ce('summary');
    otherSummary.textContent = 'Other';
    otherSummary.onclick = function()
    {
        clickSound();
    };
    otherDetails.append(otherSummary);

    let inputDragBtn = ce('button');
    inputDragBtn.textContent = 'Input Drag from Drag Folder';
    inputDragBtn.onmouseover = function()
    {
        hoverSound();
    };
    inputDragBtn.onclick = function()
    {
        clickSound();
        menuCharacterChooserInput();
    };
    otherDetails.append(inputDragBtn);

    //-//

    let zoomBtn = ce('button');
    zoomBtn.textContent = 'Zoom';
    zoomBtn.onmouseover = function()
    {
        hoverSound();
    };
    zoomBtn.onclick = function()
    {
        clickSound();
        menuZoom();
    };
    otherDetails.append(zoomBtn);

    //-//

    let mouseInfoToggle = false;

    let mouseInfoBtn = ce('button');
    mouseInfoBtn.textContent = 'Mouse Info';
    mouseInfoBtn.onmouseover = function()
    {
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
    otherDetails.append(mouseInfoBtn);

    //-//

    let menuAnimBtn = ce('button');
    menuAnimBtn.textContent = 'Animation';
    menuAnimBtn.onmouseover = function()
    {
        hoverSound();
    };
    menuAnimBtn.onclick = function()
    {
        clickSound();
        menuAnimationIcons();
    };
    otherDetails.append(menuAnimBtn);

    //-//

    let menuCamBtn = ce("button");
    menuCamBtn.textContent = "CAMERA - Follow or Stay";
    menuCamBtn.title = "menuCameraDiv";
    menuCamBtn.onmouseover = function()
    {
        hoverSound();
    };
    menuCamBtn.onclick = function()
    {
        clickSound();
        menuCameraDiv();
    };
    otherDetails.append(menuCamBtn);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

