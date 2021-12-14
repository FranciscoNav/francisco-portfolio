import Karro from "../../img/Karro.JPG";
import DreamGarage from '../../img/DreamGarage.JPG';
import SecretPost from '../../img/SecretPost.JPG';

const PortfolioData =[
    {
        id:1,
        image: Karro,
        link: 'https://github.com/FranciscoNav/Karro',
        youTubeLink:'https://www.youtube.com/watch?v=27PdkirKVr4',
        icon1:'GitHub',
        icon2:'Demo',
        title: 'Karro',
        category:'Rails & React',
        summary:"Karro is a car budgeting and expense tracking web application. It has a React.js front-end and a Ruby on Rails Back-end. This was my Capstone project which ultimately help me graduate from Flatiron School."
    },
    {
        id:2,
        image: SecretPost,
        link: 'https://github.com/FranciscoNav/digital-secrets',
        youTubeLink:'https://www.youtube.com/watch?v=X2KLQTny3Go',
        icon1:'GitHub',
        icon2:'Demo',
        title: 'Digital Secrets',
        category:'Rails & React',
        summary:"Digital-Secrets was my Phase 4 project from Flatiron School. It has a React.js front-end and a Ruby on Rails Back-end. Its purpose is to digitalize a user's secrets and keep them password protected. Perfect for secret recipes, notes, or a diary."
    },
    {
        id:3,
        image: DreamGarage,
        link: 'https://github.com/FranciscoNav/dream-garage',
        youTubeLink:'https://youtu.be/MdThca-IqLg',
        icon1:'GitHub',
        icon2:'Demo',
        title: 'Dream Garage',
        category:'React',
        summary:"Dream Garage is a fun web application that lets users fill up a digital garage with all their dream cars. It will then calculate the cost of all the cars in that garage. I made this for the Phase 2 project for Flatiron School, and it is made entirely from React."
    }
]

export default  PortfolioData;