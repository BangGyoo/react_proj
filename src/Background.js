import React, { Component } from 'react';
import mojs from 'mo-js';
import './Background.css';

/* ADD CUSTOM SHAPE */
class Heart extends mojs.CustomShape {
  getShape () { return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>'; }
  getLength () { return 292.110107421875; } // optional
}




mojs.addShape( 'heart', Heart ); // passing name and Bubble class

class Shape {
     waterWave = () => {
        return (new mojs.Shape({
        shape:        'circle',
        scale :       {0:1.0},
        radius:       200,
        left:         '50%',
        top:          '50%',
        stroke:       {'black':'#FC2D79'},
        strokeWidth:  {20:0},
        fill:         'none',
        className:    'background',
        duration:     1000,
    }))}

    waterWave2 = () => {
        return (new mojs.Shape({
        shape:        'circle',
        scale :       {0:1.0},
        radius:       200,
        left:         'rand(10%,90%)',
        top:          'rand(10%,90%)',
        stroke:       {'black':'#FC2D79'},
        strokeWidth:  {20:0},
        fill:         'none',
        className:    'background',
        duration:     1000,
        onComplete() { this.generate().replay(); },

    }))}

    createCircle = () => {
        return (new mojs.Shape({
            shape:        'circle',
            scale :       3.0,
            radius:       200,
            left:         '50%',
            top:          '50%',
            fill:         'magenta',
            className:    'background',
            delay:        0,
            duration:     1000,
            
    }))}

    createRect = () => {
        return (new mojs.Shape({
            shape:        'rect',
            left:         '50%',
            fill:         'none',
            radius:       20,
            stroke:       { 'rgba(0,255,255,1)' : 'magenta' },
            strokeWidth:  { 10: 0},
            strokeDasharray: '100%',
            strokeDashoffset: { '-100%' : '100%' },
            className :   'background',
    }))}
    createHeart = () => {
        return (new mojs.Shape({
            shape:    'heart',
            fill:     'none',
            stroke:   'magenta',
            strokeDasharray: '100%',
            strokeDashoffset: { '-100%' : '100%' },
            className:      'background',
            left:            'rand(10%, 90%)', 
            top:             'rand(10%, 90%)',     
    }))}

    createPointer = (pos) => {
        return (new mojs.Shape({
            shape:     'zigzag',
            points:     3,
            radius:     50,
            radiusY:    50,
            left:       '50%',
            top:        String(60 + 5*pos) + '%',
            stroke:     'white',
            strokeWidth: { 10 : 0 },
            fill:       'none',
            angle:      180,
    }))}

}

class Page extends Shape {

    createSlide0 = () => {
        const timeline = new mojs.Timeline({speed:1.0,});
        timeline.append(this.waterWave().tune({left:'rand(10%,90%)',top:'rand(10%,90%)',delay:0}));
        timeline.append(this.waterWave().tune({left:'rand(10%,90%)',top:'rand(10%,90%)',delay:0}));
        timeline.append(this.waterWave().tune({left:'rand(10%,90%)',top:'rand(10%,90%)',delay:0}));
        //timeline.append(this.createPointer(0).tune({}));
        //timeline.append(this.createPointer(1).tune({}));
        //timeline.append(this.createPointer(2).tune({}));
        const lastAction = this.createCircle().tune({scale:{0:3.0},});
        timeline.append(lastAction,
            this.createPointer(0).tune({}),
            this.createPointer(1).tune({}),
            this.createPointer(2).tune({}),
        );
        return [timeline,lastAction];
    }
    createSlide1 = () => {
        const timeline = new mojs.Timeline({speed:1.0,});
        const lastAction = this.createCircle().tune({scale:{3.0:0.5},left:{'50%':'10%'}}).then({scale:5.0,fill:'black'});
        timeline.append(lastAction);
        return [timeline,lastAction];
    }
    createSlide2 = () => {
        const timeline = new mojs.Timeline({speed:0.5,});
        const lastAction = this.createRect().tune({delay:300,duration:3000,scale:10.0,angle:{0:180}});
        timeline.append(lastAction);
        return [timeline,lastAction];
    }
    createSlide3 = () => {
        const timeline = new mojs.Timeline({speed:0.5,});
        const lastAction = this.createHeart().tune({repeat:100,delay:300,duration:3000,scale:10.0,left:'80%',top:'80%'});
        timeline.append(lastAction);
        return [timeline,lastAction];
    }


    resetSlide = (slide) => {
        slide[0].stop();
        slide[1].stop();
        slide[1].tune({duration:1000});
    }
}


class Background extends Page{
    constructor() {
        super();
        this.initAnimation();
    }

    initAnimation(){
        //const link = document.querySelector('body');
        //let itemDim = link.getBoundingClientRect();

        this.slide0 = this.createSlide0();
        this.slide1 = this.createSlide1();
        this.slide2 = this.createSlide2();
        this.slide3 = this.createSlide3();

        this.slide0[0].play();
    }
    

    rerender(orig,dest){
        if(dest == '0') {
            this.resetSlide(this.slide1);
            this.slide0[0].play();
        }
        if(dest == '1') {
            this.resetSlide(this.slide0);
            this.resetSlide(this.slide2);
            this.slide1[0].play();
        }
        if(dest == '2') {
            this.resetSlide(this.slide1);
            this.resetSlide(this.slide3);
            this.slide2[0].play();
        }
        if(dest == '3') {
            this.resetSlide(this.slide2);
            this.slide3[0].play();
        }
        if(dest == '4') {
            this.resetSlide(this.slide3);
        }


    }
}
export default Background;
