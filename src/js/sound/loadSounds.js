// loadSounds.js

let sfx =
[
    {
        name: 'sfx_blip_001',
        soundFileOffline: 'src/media/audio/sfx/sfx_blip_001.mp4',
        soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_blip_001.mp4'
    },

    {
        name: 'sfx_warp_001',
        soundFileOffline: 'src/media/audio/sfx/sfx_warp_001.mp4',
        soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/sfx_warp_001.mp4'
    },

    {
        name: 'sfx_crystal_bell_001',
        soundFileOffline: 'src/media/audio/sfx/sfx_crystal_bell_001.mp4',
        soundFileOnline: 'https://64482293-555277121853380144.preview.editmysite.com/uploads/6/4/4/8/64482293/pop_sound.mp4'
    },

    {
        name: 'sfx_zap_001',
        soundFileOffline: 'src/media/audio/sfx/sfx_zap_001.mp4',
        soundFileOnline: 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/blipdeep.mp3'
    }
];

function loadSounds(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        let theSound = ce('audio');

        if (online == false)
        {
            theSound.src = whichArray[x].soundFileOffline;
        }
        else
        {
            theSound.src = whichArray[x].soundFileOnline;
        }

        theSound.id = whichArray[x].name;
        theSound.loop = false;
        theSound.volume = 1.0;
        ba(theSound);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

