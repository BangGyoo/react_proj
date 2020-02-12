import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import mojs from 'mo-js';
import {ScrollToTopOnMount, SectionsContainer, Section } from 'react-fullpage';
import MenuBar from './MenuBar';
import Bucket from './Bucket';
import MyIntroduce from './MyIntroduce';
import TechStack from './TechStack';
import Pointer from './Pointer';
import Background from './Background';


class App extends Component{
    constructor(props) {
        super(props);
        this.shapeAnimation = null;
        this.initAnimation();
        this.bg = new Background;
    }
    onLeave(origin, destination, direction) {
        console.log(origin, destination, direction);
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

    render() {  
        let options = {
            sectionClassName: 'section',
            anchors: ['section1','section2','section3','section4','section5'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '0px',
            sectionPaddingBottom: '0px',
            arrowNavigation: true,
            scrollOverflow:false,
        };
        console.log(this.props.match.params);
        return (
            <div onClick={this.animate}>
                <MenuBar title="main"/>
                <ScrollToTopOnMount/>
                <SectionsContainer {...options} onLeave={this.onLeave.bind(this)}>
                    <div className="container">
                        <Section id="test1">
                            {this.bg.rerender('#test1')}
                            <header>
                                <Clock/>
                            </header>
                        </Section>
                        <Section id="test2">
                            <Bucket/>
                        </Section>
                        <Section id='test3'>
                            <MyIntroduce/>
                        </Section>
                        <Section id='test4'>
                            <TechStack/>
                        </Section>
                        <Section>
                        </Section>
                    </div>
                </SectionsContainer>
            </div>
        );
    }
}

export default App;

