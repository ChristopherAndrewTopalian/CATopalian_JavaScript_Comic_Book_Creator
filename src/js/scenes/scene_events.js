// scene_events.js

function sceneEvents(whichArray, x)
{
    // to know which scene is selected
    THE_SCENE = whichArray[x].name;

    cl(THE_SCENE);

    if (THE_SCENE == "scene_beach_001")
    {
        cl('Beach 001');

        ge("theBgId").play();
    }

    if (THE_SCENE == "scene_tv_room_001")
    {
        tvRoom001();

        if (ge('bgVideo'))
        {
            ge("bgVideo").play();
        }

        comicBubbleTargetIdArrayOfObjects("ayan1", greetingMessage, 0);
    }

    if (THE_SCENE == "scene_protest_001")
    {
        cl('Protest 001');
    }

    if (THE_SCENE == "scene_kitchen_001")
    {
        cl('Kitchen 001');

        ge("bgVideo").play();
    }

    if (THE_SCENE == "scene_room_001")
    {
        cl('Room 001');
    }

    if (THE_SCENE == "scene_gym_001")
    {
        cl('scene gym 001');

        if (ge("ayan"))
        {
            ge("ayan").onclick = function()
            {
                setInterval(function()
                {
                    cl('test');
                }, 2000);
            }
        }
    }

    //-//

    if (THE_SCENE == "scene_apartment_001")
    {
        cl('Apartment 001');
    }

    if (THE_SCENE != "scene_theater_001")
    {
        if (ge('tvMovies'))
        {
            ge("tvMovies").play();
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

