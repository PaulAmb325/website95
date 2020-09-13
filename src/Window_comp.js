import PropTypes from 'prop-types'
import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

import { Window, WindowHeader, WindowContent,Tabs, Tab, TabBody, Fieldset, Checkbox, NumberField, Button } from 'react95';

import './Window_comp.css'
import { isValidElement } from 'react';


class Window_comp extends Component {
    constructor(props){
        super(props);
        //Full is if a windows is full screen or not and open is if the window is fully reduced or not
        this.state = {full: false, open : true };
    }

    changeOpen(){
        this.setState({open : !this.state.open})
        console.log(this.state)
    }

    changefull(){
        this.setState({full : !this.state.full})
        console.log(this.state)
    }

    render(){
        //TO DO: Change background of coresponding button according to state
        const {id, closeWindow} = this.props;
        const windowFull = {
            top:'0px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            position: 'absolute',
            width: '100%',
            height: '100%'
            
        }
        const windowNormal = {
            position: 'absolute',
            width: 350,
        }
        return(
            <Draggable handle='.windows-header' bounds = '.desktop'>
                <Window resizable style = {this.state.full ? windowNormal : windowFull}>
                    <WindowHeader className="windows-header">
                        Settings
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
                    </WindowContent>
                </Window>
            </Draggable>         
            );
        }
    }
   

export default Window_comp