import React, { Component, useEffect, useState }from 'react';
import {Avatar, Button, Cutout, Fieldset, Panel, TextField } from 'react95';

import './Projects_Wind.css'
 




function Projects_Wind(props) {

    function searchConform(elem){
        if (elem.name.toUpperCase().includes(search.searchValue.toUpperCase()) || elem.tags.find(tag => tag.toUpperCase().includes(search.searchValue.toUpperCase()))){
            return true;
        }
        /* elem.tags.map(tag => {
            console.log(tag)
            if(tag.toUpperCase().includes(search.searchValue.toUpperCase())){
                console.log("conform")
                console.log(elem)
                return true;
            }
        }); */
    }

    const renderProjects = () => {
        if (search.searchValue == ''){
            return (    
                <div>
                        {projects.projects.map(item => (
                            <div key={item.name} className="pr_Proj">
                                <Avatar key={item.img} className="avatar" size={150} src={item.img}/>
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
                                <Avatar key={item.img} className="avatar" size={150} src={item.img}/>
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
            img : "./someHandsomeGuy.jpg", 
            description:"During the lockdown of may 2020 I decided to make my child dream come true and make a game. I started the the project and learnt skills such as UX/UI and art. \n However the more features added the more I figured out that using Python may have been a bad idea. By fixing most of the optimizations the game became playable again! \n I really want to continue and finish this game but sadly the amount of time needed to make a game alone it too high.",
            tags : ["UI/UX", "Creativity", "Python"]
            },
            {name: "IoVinci", 
            img : "./capt.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["Java", "Electronics", "Cloud Service", "Machine Learning","Networking","Database"]
            },
            {name: "Fact or Fake", 
            img : "./someHandsomeGuy.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["Python", "ScikitLearn", "UI/UX", "Machine Learning"]
            },
            {name: "Data Visualization  State of the Art", 
            img : "./data-viz.png", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["Python", "JavaScript", "UI/UX", "Seaborn", "D3.js"]
            },
            {name: "Parcel Gestion", 
            img : "./someHandsomeGuy.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["HTML/CSS", "AngularJs", "NodeJs", "Database", "JavaScript", "Git"]
            },
            {name: "Co-Workers", 
            img : "./someHandsomeGuy.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["HTML/CSS", "React", "NodeJs", "Database", "JavaScript", "UI/UX", "Hosting","IoT", "Python", "Machine Learning", "Flask", "Docker", "Cloud Service","Git"]
            },
        ],
    })

    const handleChange = e => {
        setSearch({ searchValue: e.target.value })
    };
    
    useEffect (() => {
        console.log('useEffect', props)
        if(props.defaultSearch && props.defaultSearch!=='' && props.defaultSearch !== search.searchValue){
            console.log(props.defaultSearch)
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