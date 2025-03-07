// getFileName.js

function getFileName()
{
    let theFileName = ge("theInput").value;

    // ge("theFileNameOutput").textContent = theFileName;

    // start at the 13th position, thus excluding the C:\fakepath\
    let theConvertedFileNameOutput = theFileName.substring(12);

    //ge("theConvertedFileNameOutput").textContent = theConvertedFileNameOutput;

    return theConvertedFileNameOutput;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

