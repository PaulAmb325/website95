import PropTypes from 'prop-types'
import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent,Tabs, Tab, TabBody, Fieldset, Checkbox, NumberField, Button } from 'react95';

//import { Resizable, ResizableBox } from 'react-resizable';
import {Resizable} from 're-resizable';



import './Window_comp.css'
import { isValidElement } from 'react';


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
            }   
        };
    }
    

    changeOpen(){
        this.setState({open : !this.state.open})
    }

    changefull(){
        this.setState({full : !this.state.full})
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
      };

    handleStyle(){
        //Based on the state return the correct style
        //TO DO: ADD the z index
        var style = {};
        //Style full window
        if(this.state.full){
            style = {
                top:'0px',
                left: '0px',
                position: 'absolute',
                width: '100%',
                height: '100%',
            }
        //Style minimize
        }else if(!this.state.open){
            style = {
                display : 'none',
            }
        }else {
        //Style classique
            style = {
                position: 'absolute',
                width: 350,
            }
        }
        return style;
    }

    render(){
        //TO DO: Change background of coresponding button according to state
        const {id, closeWindow, minimizeWindow} = this.props;

        return(
                <Draggable handle='.windows-header' bounds = '.desktop'  position={this.state.full ?  {x: 0, y: 0}: {x:this.state.coord.x, y:this.state.coord.y}}  onStart={() => this.state.full ? false :true} defaultPosition={{x: this.state.x, y: this.state.y}} onDrag={this.handleDrag}>
                <Window style = {this.handleStyle()}>
                    <WindowHeader className="windows-header">
                        {id}
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
                    <WindowContent>
                        Ici on met le contenu que l'on veut en fct de l'id
                        This id = {id}
                        Coordinate x = {this.state.coord.x} y = {this.state.coord.y}
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