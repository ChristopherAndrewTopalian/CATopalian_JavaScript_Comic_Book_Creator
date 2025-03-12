// menuScenesVertical.js

function menuScenesVertical()
{
    let menuId = 'menuScenes';

    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.style.position = "fixed";
    mainDiv.style.right = 0 + "px";
    mainDiv.style.top = 22 + "px";
    mainDiv.style.zIndex = 1000;
    mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
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
        ge('scenesSubDiv').style.height = 0 + "px";
    };
    mainDiv.append(theCloseX);

    //-//

    let theMaximize = ce("button");
    theMaximize.textContent = "O";
    theMaximize.className = "ourButton";
    theMaximize.style.position = "absolute";
    theMaximize.style.left = 30 + "px";
    theMaximize.style.top = -22 + "px";
    theMaximize.onclick = function()
    {
        clickSound();
        ge("scenesSubDiv").style.height = 200 + "px";
    };
    mainDiv.append(theMaximize);

    //-//

    let subDiv = ce("div");
    subDiv.style.resize = "both";
    subDiv.style.height = 200 + "px";
    subDiv.id = 'scenesSubDiv';
    subDiv.style.marginLeft = "5px";
    subDiv.style.marginRight = "5px";
    subDiv.className = "scrolling";
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'column';
    subDiv.style.gap = 1 + 'px';
    subDiv.style.alignItems = 'flex-start';
    mainDiv.append(subDiv);

    //-//

    let beachButton = ce("button");
    beachButton.textContent = "Beach";
    beachButton.className = "ourButton";
    beachButton.onmouseover = function()
    {
        hoverSound();
    };
    beachButton.onclick = function()
    {
        clickSound();

        scene(scene_beach_001);

        //sceneEvents(scene_beach_001, 'scene_beach_001');

        ge("theBgId").play();

        currentScene = 'scene_beach_001';
    };
    subDiv.append(beachButton);

    //-//

    let desertButton = ce("button");
    desertButton.textContent = "Desert";
    desertButton.className = "ourButton";
    desertButton.onmouseover = function()
    {
        hoverSound();
    };
    desertButton.onclick = function()
    {
        clickSound();

        scene(scene_desert_001);

        currentScene = 'scene_desert_001';
    };
    subDiv.append(desertButton);

    //-//

    let kitchenButton = ce("button");
    kitchenButton.textContent = "Kitchen";
    kitchenButton.className = "ourButton";
    kitchenButton.onmouseover = function()
    {
        hoverSound();
    };
    kitchenButton.onclick = function()
    {
        clickSound();

        setTimeout(function()
        {
            ge("bgVideo").play();
        }, 500);

        scene(scene_kitchen_001);

        currentScene = 'scene_kitchen_001';
    };
    subDiv.append(kitchenButton);

    //-//

    let tvRoomButton = ce("button");
    tvRoomButton.textContent = "TV Room";
    tvRoomButton.className = "ourButton";
    tvRoomButton.onmouseover = function()
    {
        hoverSound();
    };
    tvRoomButton.onclick = function()
    {
        clickSound();

        scene(scene_tv_room_001);

        currentScene = 'scene_tv_room_001';

        setTimeout(function()
        {
            ge("bgVideo").play();

            comicBubbleTargetIdArrayOfObjects("ayan1", greetingMessage, 0);

        }, 500);
    };
    subDiv.append(tvRoomButton);

    //-//

    let gymButton = ce("button");
    gymButton.textContent = "Gym";
    gymButton.className = "ourButton";
    gymButton.onmouseover = function()
    {
        hoverSound();
    };
    gymButton.onclick = function()
    {
        clickSound();

        scene(scene_gym_001);

        currentScene = 'scene_gym_001';

        setTimeout(function()
        {


        }, 500);
    };
    subDiv.append(gymButton);

    //-//

    let apartmentButton = ce("button");
    apartmentButton.textContent = "Apartment";
    apartmentButton.className = "ourButton";
    apartmentButton.onmouseover = function()
    {
        hoverSound();
    };
    apartmentButton.onclick = function()
    {
        clickSound();

        scene(scene_apartment_001);

        currentScene = 'scene_apartment_001';

        setTimeout(function()
        {


        }, 500);
    };
    subDiv.append(apartmentButton);

    //-//

    let theaterButton = ce("button");
    theaterButton.textContent = "Theater";
    theaterButton.className = "ourButton";
    theaterButton.onmouseover = function()
    {
        hoverSound();
    };
    theaterButton.onclick = function()
    {
        clickSound();

        scene(scene_theater);

        currentScene = 'scene_theater';

        setTimeout(function()
        {
            if (ge('tvMovies'))
            {
                ge("tvMovies").play();
            }
        }, 500);
    };
    subDiv.append(theaterButton);

    //-//

    let woodsButton = ce("button");
    woodsButton.textContent = "Woods";
    woodsButton.className = "ourButton";
    woodsButton.onmouseover = function()
    {
        hoverSound();
    };
    woodsButton.onclick = function()
    {
        clickSound();

        scene(scene_woods_002);

        currentScene = 'scene_woods_002';

        setTimeout(function()
        {

        }, 500);
    };
    subDiv.append(woodsButton);

}