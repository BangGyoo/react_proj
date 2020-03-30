import React, { Component } from 'react';
import Clock from './Clock';
import mojs from 'mo-js';
import ReactFullpage from '@fullpage/react-fullpage';
import Bucket from './Bucket';
import MyIntroduce from './MyIntroduce';
import TechStack from './TechStack';
import Pointer from './Pointer';
import Background from './Background';
import MenuBar from './MenuBar';

class App extends Component {
    state = {
        api : null
    };
    render(){
        return(
            <div>
                <MenuBar/>
                <ReactFullpage
                    licenseKey = {'YOUR_KEY_HERE'}
                    scrollingSpeed = {1000}
                    fixedElements = {'main'}
                    verticalCentered = {true}
                    onLeave = {this.props.onLeave}
                    render = {({state, fullpageApi}) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className='section'>
                                    <header>
                                        <Clock/>
                                    </header>
                                </div>
                                
                                <div className='section'>
                                    <Bucket/>
                                </div>
                                <div className='section'>
                                    <MyIntroduce/>
                                </div>
                                <div className='section'>
                                    <TechStack/>
                                </div>
                                <div className='section'>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
       );
    }
}


export default App;
