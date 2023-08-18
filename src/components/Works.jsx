import {React} from 'react';
import {useEffect} from 'react';
import projects from '../project.json'; 
import Work from "./Work"
import useEmblaCarousel from 'embla-carousel-react'

const Works = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
  return (
    <div className='works' ref={emblaRef}>
      <div className='flexed'>
        {projects.map((project) => (
          <div key={project.id.toString()}>
            <Work
              cloudname="dpzabibqg"
              thumbnail={project.thumbNail} 
              crop="scale"
              link={project.link}
              title={project.title} />
          </div>
        ))}
      </div>
      <p className='text-center w-full bg-grayishBlack2'>{"<<swipe>>"}</p>
    </div>
  );
};

export default Works;
