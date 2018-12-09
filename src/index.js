import React,{Component} from 'react';
import { render } from 'react-dom';

import Slider from './Slider/Slider';


export default class Sliders extends Component{
   constructor(props){
     super(props)
   }
    render(){
    const {IMAGE_DATA,speed,delay,pause,autoplay,dots,arrows}=this.props
    return(
      <div>
        <Slider
    items={IMAGE_DATA}
    speed={speed}
    delay={delay}
    pause={pause}
    autoplay={autoplay}
    dots={dots}
    arrows={arrows}
  />
      </div>
    )
   }
}
