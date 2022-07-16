// getting variables by id
const generalBtn = document.getElementById("General");
const headlinesBtn = document.getElementById("Headlines");
const healthBtn = document.getElementById("Health");
const scienceBtn = document.getElementById("Science");
const businessBtn = document.getElementById("Business");
const sportsBtn = document.getElementById("Sports");
const technologyBtn = document.getElementById("Technology");
const entertainmentBtn = document.getElementById("Entertainment");
const searchBtn = document.getElementById("Search");

const newsQuery = document.getElementById("NewsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

// apis
// My Api Key is d2b92f9a79b24034a745f24bbd11f204
const API_KEY ="d2b92f9a79b24034a745f24bbd11f204";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=";
const SCIENCE_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function(){
    newsType.innerHTML = "<h3 class='text-center'>HEADLINES</h3>";
    fetchHeadlinesNews();
};

// Array to collect responses from API fetch call
var newsDataArr = [];

generalBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>GENERAL NEWS</h3>";
    fetchGeneralNews();
});

headlinesBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>HEADLINES</h3>";
    fetchHeadlinesNews();
});

businessBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>BUSINESS NEWS</h3>";
    fetchBusinessNews();
});

healthBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>HEALTH NEWS</h3>";
    fetchHealthNews();
});

scienceBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>SCIENCE NEWS</h3>";
    fetchScienceNews();
});

sportsBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>SPORTS NEWS</h3>";
    fetchSportsNews();
});

technologyBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>TECHNOLOGY NEWS</h3>";
    fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>ENTERTAINMENT NEWS</h3>";
    fetchEntertainmentNews();
});

searchBtn.addEventListener("click",function()
{
    newsType.innerHTML = "<h3 class='text-center'>RESULTS FOR YOUR QUERY</h3>";
    fetchQueryNews();
});


// asynchronous function to fetch the data by hitting the API's url
// for General News
const fetchGeneralNews = async ()=>{
    // const response = await fetch(GENERAL_NEWS+API_KEY);
    const response = await fetch("assets/general.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching general news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Headlines News
const fetchHeadlinesNews = async ()=>{
    // const response = await fetch(HEADLINES_NEWS+API_KEY);
    const response = await fetch("assets/headlines.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching headlines news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Business News
const fetchBusinessNews = async ()=>{
    // const response = await fetch(BUSINESS_NEWS+API_KEY);
    const response = await fetch("assets/business.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching Business news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Health News
const fetchHealthNews = async ()=>{
    // const response = await fetch(HEALTH_NEWS+API_KEY);
    const response = await fetch("assets/health.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching Business news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Science News
const fetchScienceNews = async ()=>{
    // const response = await fetch(SCIENCE_NEWS+API_KEY);
    const response = await fetch("assets/science.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching Business news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Sports News
const fetchSportsNews = async ()=>{
    // const response = await fetch(SPORTS_NEWS+API_KEY);
    const response = await fetch("assets/sports.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching sports news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Entertainment News
const fetchTechnologyNews = async ()=>{
    // const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    const response = await fetch("assets/technology.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching Entertainment news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Entertainment News
const fetchEntertainmentNews = async ()=>{
    // const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    const response = await fetch("assets/entertainment.json");
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(newsDataArr);
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching Entertainment news-"+response.status,response.statusText);
    }
    displayNews();
}
// for Query News
const fetchQueryNews = async ()=>{
    // Checking if there doesn't exist any news for our query.
    if(newsQuery.value == null)
    {
        return;
    }
    const response = await fetch(SEARCH_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300)
    {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    }
    else
    {
        // Handle if error Occurs...
        console.log("Error in fetching query news-"+response.status,response.statusText);
    }
    displayNews();
}

// function to display the news Dynamically by creating the elements
function displayNews()
{
    newsDetails.innerHTML = "";
    if(newsDataArr.length == 0)
    {
        newsDetails.innerHTML = "<h5 class='text-center'>No Data Found :(</h5>";
        return ;
    }

    newsDataArr.forEach(news =>{

        if(news.publishedAt && news.title && news.urlToImage && news.description)
        {
            var date = news.publishedAt.split("T");
            var col = document.createElement('div');
            col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

            var card = document.createElement("div");
            card.className = "p-2";

            var image = document.createElement("img");
            image.setAttribute("height","matchparnt");
            image.setAttribute("width","100%");
            image.src = news.urlToImage;

            var cardBody = document.createElement("div");

            var newsHeading = document.createElement("h5");
            newsHeading.className = "card-title";
            newsHeading.innerHTML = news.title;

            var dateHeading = document.createElement("h6");
            dateHeading.className = "text-primary";
            dateHeading.innerHTML = "Published on "+date[0];

            var discription = document.createElement("p");
            discription.className = "text-muted";
            discription.innerHTML = news.description;

            var link = document.createElement("a");
            link.className = "btn btn-warning text-center" ;
            link.href = news.url ;
            link.innerHTML = "Read More";

            cardBody.appendChild(newsHeading);
            cardBody.appendChild(dateHeading);
            cardBody.appendChild(discription);
            cardBody.appendChild(link);

            card.appendChild(image);
            card.appendChild(cardBody);

            col.appendChild(card);

            newsDetails.appendChild(col);
        }
        
    });
}
const disableButton = true;
const button1 = document.getElementById('show');

(function() {   

    var dialog = document.getElementById('myFirstDialog');    
    document.getElementById('show').onclick = function() { 
    var empt = document.forms["form1"]["e-mail"].value;
    if (empt.length == 0)
    {
        alert("Please Enter your Email before you click Subscribe button.");
    }
    else if(disableButton) 
    {
        button1.disabled = "disabled"; 
        dialog.show();   
        document.getElementById('em').value = "";
        disableButton = false;
    }
    };    
    document.getElementById('hide').onclick = function() {    
        dialog.close();    
    };    
})(); 

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
