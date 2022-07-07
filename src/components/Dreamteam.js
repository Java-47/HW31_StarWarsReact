import React from 'react';
import img1 from '../Images/friend1.jpg'
import img2 from '../Images/friend2.jpg'
import img3 from '../Images/friend3.jpg'
import img4 from '../Images/friend4.jpg'
import img5 from '../Images/friend5.jpg'
import img6 from '../Images/friend6.jpg'
import img7 from '../Images/friend7.jpg'
import img8 from '../Images/friend8.jpg'
import img9 from '../Images/friend9.jpg'
export default function Dreamteam(){
  return (
    <section className="float-end w-50 mx-1 row border">
            <h2 className="col-12 text-center">Dream Team</h2>
            <img className="col-4 p-1" src={img1} alt="friend"/>
            <img className="col-4 p-1" src={img2} alt="friend"/>
            <img className="col-4 p-1" src={img3} alt="friend"/>
            <img className="col-4 p-1" src={img4} alt="friend"/>
            <img className="col-4 p-1" src={img5} alt="friend"/>
            <img className="col-4 p-1" src={img6} alt="friend"/>
            <img className="col-4 p-1 bottomLeft" src={img7} alt="friend"/>
            <img className="col-4 p-1" src={img8} alt="friend"/>
            <img className="col-4 p-1 bottomRight" src={img9} alt="friend"/>
    </section>
  )
}
