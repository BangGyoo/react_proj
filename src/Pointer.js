import React, { Component } from 'react';
import mojs from 'mo-js';


class Pointer {
    constructor() {
        this.initAnimation();
    }
    initAnimation(){
        for(var i=0;i<3;i++){
            new mojs.Shape({
                position:     'absolute',
                shape:        'zigzag',
                points:       3,
                radius:       50,
                radiusY:      50,
                left:         '50%',
                top:          String(60 + 5*i) + '%',
                stroke:       { 'cyan':'yellow'},
                fill:         'none',
                repeat:       999,
                angle:        180,

            }).play();
        }
    }
}
export default Pointer;
