import React, { Component } from 'react';
import mojs from 'mo-js';
import './Background.css';

class Background {
    constructor() {
        this.initAnimation();
    }
    initAnimation(){
        const link = document.querySelector('body');
        let itemDim = link.getBoundingClientRect();
        this.bg = new mojs.Shape({
            position:     'absolute',
            shape:        'circle',
            scale : 3.0,
            points:       3,
            radius:       200,
            left:         {0:1000},
            top:          itemDim.height/2,
            fill:         '#FC2D79',
            className:    'background',
            duration:     3000,

        }).play();
    }
    

    rerender(page){
        if(page === '#test1') {
            this.bg.tune({left:{0:2000}}).replay();
        }
        else{     
            this.bg.tune({left:{2000:0}}).replay();
        }
    }
}
export default Background;
