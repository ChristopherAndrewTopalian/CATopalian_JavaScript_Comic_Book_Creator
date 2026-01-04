// interfaceShowHide.js

function interfaceShowHide()
{
    // add escape key listener
    window.addEventListener('keydown', function (event)
    {
        // check if escape was pressed
        if (event.key === 'Escape')
        {
            // manually flip the flag without using "!"
            if (interfaceHidden === false)
            {
                interfaceHidden = true;
            }
            else
            {
                interfaceHidden = false;
            }

            let items = document.querySelectorAll('.interface');

            // loop through the interface elements
            for (let i = 0; i < items.length; i++)
            {
                if (interfaceHidden === true)
                {
                    // hide element
                    items[i].style.display = 'none';
                }
                else
                {
                    // show element
                    items[i].style.display = 'block';
                }
            }
        }
    });
}