import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import mojs from 'mo-js';
import {FullPage,Slide} from 'react-full-page';
import MenuBar from './MenuBar';
import Bucket from './Bucket';
import MyIntroduce from './MyIntroduce';
import TechStack from './TechStack';

class AppTest extends Component{
    constructor(props) {
        super(props);
        this.shapeAnimation = null;
        this.initAnimation();
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
            shape:'circle',
            radius:{50:0},
            fill:'tomato',
            top: 0,
            left: 0,
            deley:0
        });
    }
    animate = (e) => {
        this.shapeAnimation.tune({x:e.pageX,y:e.pageY}).replay();
    }

    render() {  

        return (
            <div onClick={this.animate}>
                <MenuBar title="main"/>
                <FullPage controls>
                    <Slide>
                        <header>
                            <Clock/>
                        </header>
                    </Slide>
                    <Slide>
                        <Bucket/>
                    </Slide>
                    <Slide>
                        <MyIntroduce/>
                    </Slide>
                    <Slide>
                        <TechStack/>
                    </Slide>
                    <Slide>
                    </Slide>
                </FullPage>
            </div>

        );
    }
}

export default AppTest;

