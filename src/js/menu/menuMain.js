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

    let galleries = [
        'electronics', 'jet', 'tank', 'artillery', 'drone_military', 'humvee', 'jeep', 'military_males', 'yacht', 'desk', 'table', 'person', 'character', 'head', 'body', 'props', 
    ];

    for (let x = 0; x < galleries.length; x++)
    {
        let galleryBtn = ce('button');
        galleryBtn.textContent = galleries[x];
        galleryBtn.onmouseover = function()
        {
            hoverSound();
        };
        galleryBtn.onclick = function()
        {
            clickSound();

            galleryMaker(everything, galleries[x]);
        };
        galleryDetails.append(galleryBtn);
    }

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

