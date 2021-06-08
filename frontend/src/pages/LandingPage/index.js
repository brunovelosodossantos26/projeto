import React, {useState} from 'react';
import './styles.css'

import image from '../../assets/image.png';
import logo from '../../assets/logo.svg'
import Modal from '../../components/Modal';
import Checkbox from '../../components/Checkbox';



export default function LandingPage(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return (
        
    <div className="container">
       <header className="teste11">
           <img src={logo} className="logo" alt="Logo"/>
                <nav className="menu">
                        <ul>
                            <li><a href="/#">How it works</a></li>
                            <li><a href="/#">About Us</a></li>
                        </ul>
                </nav>
            <button className="btn" onClick={() =>setIsModalVisible(true)}>Get Started</button>
    
            {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}><h2>OI</h2></Modal> : null}
           
       </header>
       
        <div className="row">

                <div className="left-col">
                    <img src={image} className="img" alt="trabalho"/>
                    <div className="form1"/>
                    <div className="form2"/> 
                    <div className="form3"/> 

                    <div className="row-1">
                        <div/><div/> <div/><div/> <div/> <div/>
                    </div>
                    <div className="row-2">
                        <div/><div/> <div/><div/> <div/> <div/>
                    </div>
                    <div className="row-3">
                        <div/><div/> <div/><div/> <div/> <div/>
                    </div>
                    <div className="row-4">
                        <div/><div/> <div/><div/> <div/> <div/>
                    </div>
                </div>

            <div className="content">
                <div className="right-col">
                    <h1>Find your <br/>
                    <span>best teacher</span></h1>
                    <p>
                    Whether you are a student trying to find your ideal private<br/> language teachers/tutors or a teacher trying to find great students<br/> for your customised private lessons!
                    </p>
                </div>
                

                <form>
                    <input className="input-1" type="text" placeholder="Type here what are you looking for"/>
                    
                    <div className="radios-all">
                        <div className="radio-div1">
                                <span className="centro">
                                    <Checkbox />
                                    <label className="label-lad">I'M A TEACHER</label>
                                </span>
                        </div>

                        <div className="radio-div2">
                                <span className="centro">
                                    
                                    <Checkbox />
                                    <label className="label-lad">I'M A STUDENT</label> 
                                </span>
                        </div>
                    </div>
                        <button className="search">search</button>
                </form>
            </div>
        </div>

        <div className="form4"/> 
        <div className="form5"/> 
        <footer className="footer"></footer>
    </div>
   
    );
}