import PropTypes from 'prop-types'
import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent,Tabs, Tab, TabBody, Fieldset, Checkbox, NumberField, Button, Cutout } from 'react95';

//import { Resizable, ResizableBox } from 'react-resizable';
import {Resizable} from 're-resizable';



import './Window_comp.css'
import { isValidElement } from 'react';
import ReadMe_Wind from './Window_Content/Readme_Wind';
import AboutMe_Wind from './Window_Content/AboutMe_Wind';


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
            z : this.props.z
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
                resize: 'both',
                overflow: 'auto',
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
                    <WindowContent onClick={() => this.props.setActive(id)}> 
                    {(() => {
                            switch(this.props.id) {
                                case 'ReadMe':
                                    return <ReadMe_Wind></ReadMe_Wind>;
                                case 'Me':
                                    return <AboutMe_Wind></AboutMe_Wind>
                                default:
                                    return "You broke the website ";
                                
                            }
                        })()}      
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