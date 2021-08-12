import travelAppImg from './images/travelApp.png';
import weatherWebsiteImg from './images/weatherWebsite.png';
import qAderAppImg from './images/qAderApp.png';
import singlePageWebsiteImg from './images/singlePageWebsite.png';
import myPortfolioImg from './images/myPortfolio.png'

const projects = [
    {
        name: 'TRAVEL APP',
        dis: "Building a travel website that obtains a desired trip location and dates from the user, and displays trip length,weather and an image of the location using information obtained from external APIs.Using HTML, CSS, JavaScript, NodeJS, and Webpack.",
        img: travelAppImg,
        github: 'https://github.com/Maimounah97/Travel-App-FEND.git',
        youtube: 'https://www.youtube.com/watch?v=HOQejQ1duhk'

    },

    {
        name: 'WEATHER WEBSITE',
        dis: "A web app that uses OpenWeatherMap API to get weather based on user's location, and dynamically update UI. Using HTML, CSS, JavaScript, and NodeJS.",
        img: weatherWebsiteImg,
        github: 'https://github.com/Maimounah97/weatherApp.git',
        youtube: 'https://www.youtube.com/watch?v=7V1nYc5oFCs'
    },

    {
        name: 'QADER APLICATION',
        dis: 'A graduation project that helps autistic children learning daily life skills by using augmented reality. Using Unity3D and Vuforia Engine to build the application.',
        img: qAderAppImg,
        youtube: 'https://youtu.be/1zCB94506hg'
    },
    {
    name: 'SINGLE PAGE WEBSITE',
    dis: " A responsive web page that contains navigation links, slideshow, multiple sections, animated while moving,and vanilla JavaScript popup message. Using HTML, CSS, JavaScript.",
    img: singlePageWebsiteImg,
    github: 'https://github.com/Maimounah97/onePageWebsite.git',
    youtube: 'https://youtu.be/kub_BGphKj4'
    
},
{
    name: 'MY PORTFOLIO',
    dis: " . Using ReactJs, React-Bootstrap.",
    img: myPortfolioImg,
    github: 'https://github.com/Maimounah97/myPortfolio.git',
}
];

export default projects;