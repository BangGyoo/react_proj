import React, { Component } from 'react';
import App from './App';
import mojs from 'mo-js';
import Background from './Background';

class Main extends Component{
    constructor(props) {
        super(props);
        this.shapeAnimation = null;
        this.initAnimation();
        this.bg = new Background;
    }
    componentDidUpdate() {
    }
    componentDidMount() {
        //this.mouseMotion = setInterval(() => document.addEventListener('mousedown',this.animate),1000);
    }
    componentWillUnmount() {
        //document.removeEventListener('mousedown',this.animate);
        //clearInterval(this.mouseMotion);
    }
    
    initAnimation(){
        this.shapeAnimation = new mojs.Shape({
            parent : document.getElementById('body'),
            position: 'absolute',
            shape:'circle',
            radius:{50:0},
            fill:'tomato',
            top: 0,
            left: 0,
            delay:0
        });
    }
    animate = (e) => {
        this.shapeAnimation.tune({x:e.pageX,y:e.pageY}).replay();
    }
    onLeave = (origin, destination, direction) => {
            console.log(origin.index,destination.index,direction);
            this.bg.rerender(origin.index,destination.index);
    }

    render(fullpageApi) {  
        return (
            <div onClick={this.animate}>
               <App onLeave={this.onLeave}/> 
            </div>
        );
    }
}

export default Main;

