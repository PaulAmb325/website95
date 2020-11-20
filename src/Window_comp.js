import PropTypes from 'prop-types'
import React, { Component } from 'react';

import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent, Button } from 'react95';

import './Window_comp.css'

import ReadMe_Wind from './Window_Content/Readme_Wind';
import AboutMe_Wind from './Window_Content/AboutMe_Wind';
import Projects_Wind from './Window_Content/Projects_Wind';
import Skills_Wind from './Window_Content/Skills_Wind';
import Proj_IoVinci from './Window_Content/Proj_IoVinci';
import Proj_Game from './Window_Content/Proj_Game';
import Proj_Website95 from './Window_Content/Proj_Website95';
import Proj_CoWorkers from './Window_Content/Proj_CoWorkers';


class Window_comp extends Component {
    constructor(props){
        super(props);
        //Full is if a windows is full screen or not and open is if the window is fully reduced or not
        this.state = {
            full: false,
            open : true,
            coord : {
                x : this.props.x,
                y : this.props.y,
            },
            z : this.props.z,
            tag :''
        };
    }

    componentDidUpdate(prevProps, prevStates){
        if(prevProps.changeIndex !== this.props.changeIndex){
            this.changeOpen();
        }
    }

    //Use dans le parents pour mettre le open a true
    setOpenTrue = () => {
        this.setState({open: true})
    }

    changeOpen(){
        //console.log("changeOpen");
        this.setState({open : !this.state.open});
        //console.log(this.state.open);
    }

    changefull(){
        this.setState({full : !this.state.full})
        this.props.setActive(this.props.id);
    }

    handleDragStart = () => {
        this.props.setActive(this.props.id);
        if(this.state.full){
            return false;
        }
        else{
            return true;
        }
    }

    handleDrag = (e, ui) => {
        //console.log('state is : ')
        //console.log(this.state)
        const {x, y} = this.state.coord;
        this.setState({
          coord: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
        //this.props.setActive(this.props.id);
      };

    startProjSearch = (tagS) => {
        this.setState({tag:tagS}, function (){
            //console.log('src', this.state.tag)
            this.props.openWindow('projs');
        } );
        //console.log('src', this.state.tag)
    }

    handleStyle() {
        //Based on the state return the correct style
        //TO DO: ADD the z index
        //Z-index change by order of render so just change in the list
        var style = {};
        //Style minimized
        if(!this.state.open){
            style = {
                display : 'none',
            }
        //Style full
        }else if(this.state.full){
            style = {
                overflow:'auto',
                top:'0px',
                left: '0px',
                position: 'absolute',
                width: '100%',
                height: '100%',
            }
        }else {
        //Style classique
            style = {
                position: 'absolute',
                width: 550,
                height: 300,
                overflow: 'auto',
                resize: 'both',
                minHeight: '200px',
                minWidth: '300px',
                maxHeight: '100vh',
                maxWidth: '100vw',
            }
        }
        return style;
    }





    render(){
        //TO DO: Change background of coresponding button according to state
        const {id, closeWindow, name} = this.props;

        const renderComp = () =>{
            //console.log("je render", this.state.tag)
            switch(this.props.id) {
                case 'ReadMe':
                    return <ReadMe_Wind></ReadMe_Wind>;
                case 'Me':
                    return <AboutMe_Wind></AboutMe_Wind>;
                case 'projs':
                    return <Projects_Wind defaultSearch={this.state.tag}></Projects_Wind>;
                case 'skills':
                    return <Skills_Wind startProjSearch={this.startProjSearch}></Skills_Wind>;
                case 'proj_iovinci':
                    return <Proj_IoVinci></Proj_IoVinci>;
                case 'proj_game':
                    return <Proj_Game></Proj_Game>;
                case 'proj_95':
                    return <Proj_Website95></Proj_Website95>;
                case 'proj_coworkers':
                    return <Proj_CoWorkers></Proj_CoWorkers>
                default:
                    return "You broke the website ";
            }
        }

        return(
                <Draggable handle='.windows-header' bounds = '.desktop'  position={this.state.full ?  {x: 0, y: 0}: {x:this.state.coord.x, y:this.state.coord.y}} 
                 onStart={this.handleDragStart} defaultPosition={{x: this.state.x, y: this.state.y}} 
                 onDrag={this.handleDrag}>
            <Window style = {this.handleStyle()}>
                    <WindowHeader className="windows-header">
                        {name}
                        <div className='states'>
                            <Button onClick={() => this.changeOpen()} square={true} className='button'>
                            _
                            </Button>
                            <Button onClick={() => this.changefull()} square={true} className='button'>
                            C
                            </Button>
                            <Button onClick={() => closeWindow(id)}>
                            X
                            </Button>
                        </div>  
                    </WindowHeader>
                    <WindowContent className='winContent' onClick={() => this.props.setActive(id)}> 
                    {renderComp()}
                    </WindowContent>
                </Window>

                
                </Draggable>      
            );
        }
    }

Window_comp.propTypes = {
    id: PropTypes.string.isRequired,
    closeWindow: PropTypes.func.isRequired,
    minimizeWindow: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    }

export default Window_comp