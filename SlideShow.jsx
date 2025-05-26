import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './stylesheet/slideShow.css';

const slideImages = [
  {
    url: 'https://www.inidesignstudio.com/wp-content/uploads/2022/12/Render_cam_3-scaled.jpg',
    caption: 'Empowering Progress through Technology.'
  },
  {
    url: 'https://media-cdn.tripadvisor.com/media/photo-s/03/e6/a2/1b/rajkot.jpg',
    caption: 'Inspire, Innovate, Integrate.'
  },
  {
    url: 'https://gooutstation.com/goo_assets/cities/Rajkot-The-Heart-Of-Saurashtra-As-A-Growing-City.jpg',
    caption: 'Leading the Digital Revolution.'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})` }} className='divStyle'>
              </div>
                <h1 className='spanStyle'>{slideImage.caption}</h1>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow