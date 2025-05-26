import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './stylesheet/slideShow.css';
import img from './images/0b23696dc11612b97f2dc63c9ddd9e28.jpg';
import Navbar from './NavBar';

// const slideImages = [
//   {
//     url: img,
//     caption: 'slide1'
//   },
//   {
//     url: 'https://media-cdn.tripadvisor.com/media/photo-s/03/e6/a2/1b/rajkot.jpg',
//     caption: 'Slide 2'
//   },
//   {
//     url: 'https://gooutstation.com/goo_assets/cities/Rajkot-The-Heart-Of-Saurashtra-As-A-Growing-City.jpg',
//     caption: 'Slide 3'
//   },
// ];

const Place = () => {
    return (
      <Navbar />
      // <div className="slide-container">
      //   <Slide>
      //    {slideImages.map((slideImage, index)=> (
      //       <div key={index}>
      //         <div style={{'backgroundImage': `url(${slideImage.url})` }} className='divStyle'>
      //         </div>
      //           <h1 className='spanStyle'>{slideImage.caption}</h1>
      //       </div>
      //     ))} 
      //   </Slide>
      // </div>
    )
}

export default Place;