import React from 'react';
import { hightlightsSlides } from '../constants';

const VideoCarousels = () => {
  return (
    <>
        <div className='flex items-center'>
            {hightlightsSlides.map((list, i) => (
                <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
                    <div className="video-carousel_container">
                        Test
                    </div>
                </div>
            ))}
        </div>
  
    </>
  )
}

export default VideoCarousels