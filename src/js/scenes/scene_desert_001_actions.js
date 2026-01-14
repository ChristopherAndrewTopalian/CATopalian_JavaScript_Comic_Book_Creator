// scene_desert_001_actions.js

function scene_desert_001_actions()
{
    if (ge('ayan'))
    {
        cl('Ayan is here in the Desert');
    }

    if (ge('china_j-20'))
    {
        let amount = 1;
    
        let startingPos = gr('china_j-20').left;

        setInterval(function()
        {
            ge('china_j-20').style.left = (startingPos + amount) + 'px';
    
            amount -= 2;
        }, 20);
    }

    //-//

    if (ge('f16_fighting_falcon'))
    {
        let amount = 1;
    
        let startingPos = gr('f16_fighting_falcon').left;

        setInterval(function()
        {
            ge('f16_fighting_falcon').style.left = (startingPos + amount) + 'px';
    
            amount -= 2;
        }, 20);
    }

    if (ge('mq-1c_warrior'))
    {
        let amount = 1;
    
        let startingPos = gr('mq-1c_warrior').left;

        setInterval(function()
        {
            ge('mq-1c_warrior').style.left = (startingPos + amount) + 'px';
    
            amount -= 2;
        }, 20);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

