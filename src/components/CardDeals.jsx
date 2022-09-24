import React from 'react'
import styles, {layout} from '../style';
import Button from './Button';
import { card } from "../assets";

const CardDeals = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' />
           in few easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç 
          Aliquet ultrices ac, ametau.
          </p>
          <Button className="mt-5"/>
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className='w-[95%] h-[100%] relative z-[5]'/>
        </div>
    </section>
  )
}

export default CardDeals