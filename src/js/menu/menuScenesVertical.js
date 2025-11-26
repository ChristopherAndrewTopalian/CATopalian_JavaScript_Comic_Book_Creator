// menuScenesVertical.js

let currentScene;

function menuScenesVertical()
{
    let menuId = 'menuScenes';

    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    let mainDiv = ce("div");
    mainDiv.id = menuId;
    mainDiv.className = 'interface';
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

    let led_circuit_001_btn = ce("button");
    led_circuit_001_btn.textContent = "Led Circuit 001";
    led_circuit_001_btn.className = "ourButton";
    led_circuit_001_btn.onmouseover = function()
    {
        hoverSound();
    };
    led_circuit_001_btn.onclick = function()
    {
        clickSound();

        scene(scene_led_circuit_001);

        currentScene = 'scene_led_circuit_001';

        setTimeout(function()
        {
            //scene_led_circuit_001_actions();
        }, 200);
    };
    subDiv.append(led_circuit_001_btn);

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

        currentScene = 'scene_beach_001';
    
        //sceneEvents(scene_beach_001, 'scene_beach_001');

        setTimeout(function()
        {
            scene_beach_001_actions();
        }, 200);
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

        setTimeout(function()
        {
            scene_desert_001_actions();
        }, 200);
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

        scene(scene_kitchen_001);

        currentScene = 'scene_kitchen_001';

        setTimeout(function()
        {
            scene_kitchen_001_actions();
        }, 200);
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
            scene_tv_room_001_actions();
        }, 200);
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
            scene_gym_001_actions();
        }, 200);
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
            scene_apartment_001_actions();
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
            setTimeout(function()
            {
                scene_theater_actions();
            }, 200);
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
            scene_woods_002_actions();
        }, 200);
    };
    subDiv.append(woodsButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

