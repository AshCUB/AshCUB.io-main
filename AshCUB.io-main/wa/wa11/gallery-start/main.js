const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');

/* Declaring the array of image filenames */
const file_arr = ["latte.png", "fish.png", "frog.png", "soda.png", "trees.png"];

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i =0; i<file_arr.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', file_arr[i]);
    newImage.setAttribute('alt', `pic ${i+1}`);

    newImage.addEventListener('click', function()
    {
        const img_src = this.getAttribute('src');
        const img_alt = this.getAttribute('alt');

        displayedImage.setAttribute('src', img_src);
        displayedImage.setAttribute('alt', img_alt);
    });
thumbBar.appendChild(newImage);
}




/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function()
{
    const overlay = document.querySelector('.overlay');
    if(btn.getAttribute('class') === "dark")
    {
        btn.setAttribute('class', 'light');
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else
    {
        btn.setAttribute('class', 'dark');
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)"
    }
});
