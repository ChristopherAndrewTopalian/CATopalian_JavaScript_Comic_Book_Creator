// Topalian_Game_Engine.js

let idToMove;

let ourPlayer =
{
    x: 100,
    y: 100,
    speedMultiplier: 2,
    playerId: ge(idToMove),
    playerColor: "rgb(73, 100, 150)"
};

// Keyboard Letter Codes Being Pressed
let keyboard = { };
keyboard.UP = 87; // 87 is w, 38 is up arrow
keyboard.DOWN = 83; // 83 is s, 40 is down arrow
keyboard.LEFT = 65; // 65 is a, 37 is left arrow
keyboard.RIGHT = 68; // 68 is d, 39 is right arrow
keyboard.SHIFT = 16; // Shift Button

// camera Follows the Player
function cameraFollowsPlayer()
{
    if (ge(idToMove))
    {
        ge(idToMove).scrollIntoView({ block: "center", inline: "center" });
    }
}

function cameraStays()
{
    cameraFlag = "stay";
    ge(idToMove).scrollIntoView(true);
}

function theControls(e)
{
    // SPEED
    if (e.keyCode == 192) // tilda ~
    {
        ourPlayer.speedMultiplier = 0.5;

        cl('Speed 0.5');
    }

    // if (e.keyCode == 49 || e.keyCode == 97) // number 1, or numpad 1

    if (e.keyCode == 49) // number 1
    {
        ourPlayer.speedMultiplier = 1;

        cl('Speed 1');
    }

    if (e.keyCode == 50) // number 2
    {
        ourPlayer.speedMultiplier = 2;

        cl('Speed 2');
    }
    if (e.keyCode == 51) // number 3
    {
        ourPlayer.speedMultiplier = 5;

        cl('Speed 5');
    }
    if (e.keyCode == 52) // number 4
    {
        ourPlayer.speedMultiplier = 10;
        cl('Speed 10');
    }
    if (e.keyCode == 53) // number 5
    {
        ourPlayer.speedMultiplier = 15;

        cl('Speed 15');
    }

    let theKeyCode = e.keyCode || e.which;

    if (e.type === 'keydown')
    {
        keyboard[theKeyCode] = true;
    }
    else if (e.type === 'keyup')
    {
        keyboard[theKeyCode] = false;
    }
}

// character movement updating
function movePlayer(theX, theY)
{
    ourPlayer.x += (theX || 0) * ourPlayer.speedMultiplier;

    ourPlayer.y += (theY || 0) * ourPlayer.speedMultiplier;

    if (ge(idToMove))
    {
        ge(idToMove).style.left = ourPlayer.x + 'px';

        ge(idToMove).style.top = ourPlayer.y + 'px';
    }
}

// Player Controls
function playerMotion()
{
    if (keyboard[keyboard.LEFT])
    {
        movePlayer(-1, 0);

        // flip horizontal to face left (original image faces right)
        ge(idToMove).style.webkitTransform  = "scaleX(-1)";

        // ge(idToMove).src = "src/media/texture/model/LEFT_RIGHT.webp";

        // ge(idToMove).style.width = 100 + "px";
    }

    if (keyboard[keyboard.RIGHT])
    {
        movePlayer(1, 0);

        // flip horizontal to face right (original image faces right)
        ge(idToMove).style.webkitTransform  = "scaleX(1)";

        //ge(idToMove).src = "src/media/texture/model/LEFT_RIGHT.webp";

        //ge(idToMove).style.width = 100 + "px";
    }
    if (keyboard[keyboard.UP])
    {
        movePlayer(0, -1);

        //ge(idToMove).src = "src/media/texture/model/BACK.webp";

        //ge(idToMove).style.width = 150 + "px";
    }
    if (keyboard[keyboard.DOWN])
    {
        movePlayer(0, 1);

        //ge(idToMove).src = "src/media/texture/model/FRONT.webp";

        //ge(idToMove).style.width = 150 + "px";
    }
    if (keyboard[keyboard.LEFT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(-2, 0);
    }
	if (keyboard[keyboard.RIGHT] && keyboard[keyboard.SHIFT])
    {
        movePlayer(2, 0);
    }
	if (keyboard[keyboard.UP] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, -2);
    }
	if (keyboard[keyboard.DOWN] && keyboard[keyboard.SHIFT])
    {
        movePlayer(0, 2);
    }
}

let cameraFlag = "follow"; // stay or follow

function updateWorld()
{
    if (ge(idToMove))
    {
        playerMotion();

        if (cameraFlag == "follow")
        {
            cameraFollowsPlayer();
        }
        else if (cameraFlag == "stay")
        {
            // Camera Stays
        }
    }

    requestAnimationFrame(updateWorld);
}

updateWorld();

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

