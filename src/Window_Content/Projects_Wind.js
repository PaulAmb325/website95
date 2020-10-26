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
                                    <p>{item.description}</p>
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
                                    <p>{item.description}</p>
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
            img : "./someHandsomeGuy.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["React", "Creativity", "HTML/CSS", "JavaScript"]
            },
            {name: "Unnamed Game", 
            img : "./someHandsomeGuy.jpg", 
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat lacus consequat augue dapibus, non congue massa tincidunt. Fusce id lorem libero. Donec in massa in tellus tempus ornare at sit amet nisi. Cras semper, risus eu tristique accumsan, neque neque convallis nulla, id pellentesque nibh purus pharetra mi. Sed sapien arcu, accumsan eu venenatis non, aliquam eu ante. Mauris dapibus mauris eget nisl volutpat, vitae viverra nulla varius. In finibus consectetur nibh ut sagittis. Nunc congue metus cursus scelerisque auctor. Proin augue eros, ultrices nec tellus porttitor, interdum pellentesque libero.",
            tags : ["Algo", "Design", "Creativity", "Python"]
            }
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