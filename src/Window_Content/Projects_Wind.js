import React, { useState }from 'react';
import {Avatar, Button, Cutout, Fieldset, Panel, TextField } from 'react95';

import './Projects_Wind.css'
 




function Projects_Wind() {

    function renderProjects(){
        if (search.searchValue == ''){
            return (    
                <div>
                        {projects.projects.map(item => (
                            <div className="pr_Proj">
                                <Avatar className="avatar" size={150} src={item.img}/>
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
            return(
                <div>{search.searchValue}</div>

            );
        }
        
    };

    const [search, setSearch] = useState({
        searchValue: 'OUI'
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
        setSearch({ searchValue: e.target.searchV });
    }

    return (
        <div>
        <TextField searchV={search.searchValue} placeholder='Search' onChange={handleChange}/>
            {renderProjects()}
        </div>
  
  );
}
 
export default Projects_Wind;