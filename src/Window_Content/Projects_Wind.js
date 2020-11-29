import React, { useEffect, useState }from 'react';
import {Avatar, Fieldset, TextField } from 'react95';

import './Projects_Wind.css';

function Projects_Wind(props) {

    function searchConform(elem){
        if (elem.name.toUpperCase().includes(search.searchValue.toUpperCase()) || elem.tags.find(tag => tag.toUpperCase().includes(search.searchValue.toUpperCase()))){
            return true;
        }
    }

    const renderProjects = () => {
        if (search.searchValue === ''){
            return (    
                <div>
                        {projects.projects.map(item => (
                            <div key={item.name} className="pr_Proj">
                                <Avatar key={item.img} className="avatar" size={150} src={'/proj-img/' + item.img}/>
                                <Fieldset label={item.name}>
                                    <p className="pr_desc">{item.description}</p>
                                    <br />
                                    <p className="pr_tags">
                                    {item.tags.map(tag => (
                                        "  #" + tag 
                                    ))}
                                    </p>
                                </Fieldset>
                            </div>
                        ))}
                </div> 
            );
        }
        else{
            var res = projects.projects.filter(searchConform)
            return(
                <div>
                        {res.map(item => (
                            <div className="pr_Proj">
                                <Avatar key={item.img} className="avatar" size={150} src={'/proj-img/' + item.img}/>
                                <Fieldset key={item.name} label={item.name}>
                                    <p className="pr_desc">{item.description}</p>
                                    <br />
                                    <p className="pr_tags">
                                    {item.tags.map(tag => (
                                        "  #" + tag 
                                    ))}
                                    </p>
                                </Fieldset>
                            </div>
                        ))}
                </div> 
            );
        }
        
    };

    const [search, setSearch] = useState({
        searchValue: ''
      });

    const [projects, setProject] = useState({
        projects : [
            {name: "Website95", 
            img : "./website95.PNG", 
            description: "As I decided to build a website for myself and searched ideas I seen a post about the 25 years of Window 95 this gave me the idea to build my website using this OS look. To give my website an OS I searched about framework helping me and decided to learn React wich is well suited for 1-page app. \n You can acess the github repo of the Website here: github.com/PaulAmb325/website95 \n This website was built with the totally awesome library of Artur Bien: github.com/arturbien/React95",
            tags : ["React", "Creativity", "HTML/CSS", "JavaScript", "Hosting","UI/UX","Git"]
            },
            {name: "An Unnamed Rogue Game", 
            img : "./game.png", 
            description:"During the lockdown of may 2020 I decided to make my child dream come true and make a game. I started the the project and learnt skills such as UX/UI and art. \n However the more features added the more I figured out that using Python may have been a bad idea. By fixing most of the optimizations the game became playable again! \n I really want to continue and finish this game but sadly the amount of time needed to make a game alone it too high.",
            tags : ["UI/UX", "Creativity", "Python"]
            },
            {name: "IoVinci", 
            img : "./capt.jpg", 
            description: "IoVinci is the name of the project our team presented for the edition 2019-2020 of Disrupt’Campus Toulouse. For this project a team of students from Law, Sociology and Computer Sciences collaborated with Vinci Facilities to explore new possibility to reduce work accident of the technicians. \n We produced a Proof of Concept for ventilation equipment by creating a IoT Sensor to collect data to train a Machine Learning Algorithm and store the data in the One Drive of the company. \n Sadly the project was aborted due to COVID-19.",
            tags : ["Java", "Electronics", "Cloud Service", "Machine Learning","Networking","Database"]
            },
            {name: "Fact or Fake", 
            img : "./factorfake.jpg", 
            description:"Fact or Fake was the 4-day term project by team of 3 for the first semester of my master’s degree. The goal was to create an interface to analyze text and find statement that needed to be checked. \n The teacher gave us the data set classified and we implemented the interface to load document and try algorithm on it (KNN, Random Forest, etc..)  \n  The code isn’t available as the data set was confidential.",
            tags : ["Python", "ScikitLearn", "UI/UX", "Machine Learning"]
            },
            {name: "Data Visualization  State of the Art", 
            img : "./data-viz.png", 
            description:"For my Bachelor thesis I choose to make a State of the Art of Data Visualization libraries on Python and JavaScript. The goal was to explore new mean of displaying data for researchers that mainly used the basic plot of R to display data. \n  I worked on a data set (confidential) used by researcher and tried to explore the possibility of interactive maps.",
            tags : ["Python", "JavaScript", "UI/UX", "Data Viz"]
            },
            {name: "Parcel Gestion", 
            img : "./parcelgestion.png", 
            description:"This is one of my assignment of the second year. The goal was to make a Parcel Gestion System using AngulagJs and MariaDB. I have a gone a bit further by creating an API to simplify acess to the database and added some style by using SemanticUI. At the end I was able to display every info clearly in one page. \n github.com/PaulAmb325/ParcelGestion",
            tags : ["HTML/CSS", "AngularJs", "NodeJs", "Database", "JavaScript", "Git"]
            },
            {name: "Co-Workers", 
            img : "./co-worker_dashboard.PNG", 
            description:"Co-Workers is the result of two weeks of works. We was asked to improve co-working spaces and our decision was to create a social network for co-working spaces that encourage interaction. The App include an help system, events, social and the possibility to redeem point you gained by being social. \n We also implemented an interactive map that indicate the position of the user in real time(that agree) using face-recognition. And a payment system with rfid card to redeem the points. \n https://github.com/go-roots",
            tags : ["HTML/CSS", "React", "NodeJs", "Database", "JavaScript", "UI/UX", "Hosting","IoT", "Python", "Machine Learning", "Flask", "Docker", "Cloud Service","Git"]
            },
        ],
    })

    const handleChange = e => {
        setSearch({ searchValue: e.target.value })
    };
    
    useEffect (() => {
        if(props.defaultSearch && props.defaultSearch!=='' && props.defaultSearch !== search.searchValue){
            setSearch({ searchValue: props.defaultSearch})
        }
    });

    return (
        <div>
        <TextField searchValue={search.searchValue} placeholder='Search' onChange={handleChange}/>
            {renderProjects()}
        </div>
  
  );
}
 
export default Projects_Wind;