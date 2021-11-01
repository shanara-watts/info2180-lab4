window.onload = function()
{
    var searchBtn = document.getElementById("search");
    searchBtn.addEventListener("click",searchFunction);
}

function searchFunction()
{    
    var url = "info2180-lab4/superheroes.php";
    //Get value entered
    searchVal = document.getElementById("hero").value 
    var avgImg = document.getElementById("avgImg");
    avgImg.style.opacity = 0;
    AjaxRequest(url,displaySuperheroes,searchVal)
}

function AjaxRequest(url,func,search)
{
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(Event){
        if (httpRequest.readyState === XMLHttpRequest.DONE)
        {
            if (httpRequest.status === 200)
        {
            func(httpRequest.responseText,search)
        }
        else 
        {
            alert("There was a problem with your request.")
        }
    };
    mess = url+"?query=" + search
    httpRequest.requestType = "json"
    httpRequest.open("GET", mess,true);
    httpRequest.send();
}

function displayResponse(message)
{
    alert(message);
}

function displaySuperheroes(superhero,search)
{
    var search = document.getElementById("result");
    var avgImg = document.getElementById("avgImg"); 
    avgImg.style.opacity = 1
    if (superhero.includes("Captain America"))
    {
        avgImg.src="captain.png";
    }

    else if(superhero.includes("Ironman"))
    {
        avgImg.src="ironman.png";
    }

    else if(superhero.includes("Spiderman"))
    {
        avgImg.src="spiderman.png";
    }

    else if(superhero.includes("Captain Marvel"))
    {
        avgImg.src="marvel.png";
    }

    else if(superhero.includes("Black Widow"))
    {
        avgImg.src="widow.png";
    }

    else if(superhero.includes("Hulk"))
    {
        avgImg.src="hulk.png";
    }

    else if(superhero.includes("Hawkeye"))
    {
        avgImg.src="hawkeye.png";
    }

    else if(superhero.includes("Black Panther"))
    {
        avgImg.src="blackpanther.png";
    }

    else if(superhero.includes("Thor"))
    {
        avgImg.src="thor.png";
    }

    else if(superhero.includes("Scarlett Witch"))
    {
        avgImg.src="witch.png";
    }

    else (superhero.includes("Superhero not found"))

    search.innerHTML = superhero

}}
