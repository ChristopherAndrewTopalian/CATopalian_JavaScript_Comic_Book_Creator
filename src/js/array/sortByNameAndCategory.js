// sortByNameAndCategory.js

function sortByNameAndCategory(whichArray, whichDirection)
{
    whichArray.sort(function(a, b)
    {
        // ascending
        if (whichDirection === "up")
        {
            return a.name.localeCompare(b.name) || a.category.localeCompare(b.category);
        }
        // descending
        else if (whichDirection === "down")
        {
            return b.name.localeCompare(a.name) || b.category.localeCompare(a.category);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

