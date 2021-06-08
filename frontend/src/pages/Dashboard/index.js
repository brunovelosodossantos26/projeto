import React from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import ImgTop from '../../assets/imgTop.png'
import Meeting from '../../assets/Meeting.png'
import Card from'../../components/Card/Card.js';
import Footer from '../../components/Footer/Footer.js';


export default function Dashboard(){


    return (
        <div className="pai">
            <header>
                <div className="position">
                        <div><div/></div>  <div><div/></div>  <div><div/></div>  <div><div/></div> <div><div/></div>  <div><div/></div>
                        <div><div/></div>  <div><div/></div>  <div><div/></div>  <div><div/></div> <div><div/></div>  <div><div/></div>
                        <div><div/></div>  <div><div/></div>  <div><div/></div>  <div><div/></div> <div><div/></div>  <div><div/></div>
                        <div><div/></div>  <div><div/></div>  <div><div/></div>  <div><div/></div> <div><div/></div>  <div><div/></div>
                </div>
                <div className="logo-new-2"> <img src={logo} className="logo-img" alt="Logo"/> </div>
                <div className="items">
                    <li className="classes">My Classes </li>
                </div>
                <div className="search-img">
                    <input className="change" type="text" placeholder="change to teacher mode"></input>
                    <img src={ImgTop} className="ImgTop" alt="pessoa"/>
                </div>
            </header>

            <section className="">
                <div className="top">
                    <div className="hello">
                        <div className="desenho">
                            <div className="form6"/> 
                            <div className="form7"/> 
                        </div>
                        <div className="paragraph">
                            <h1>Hello <span className="student"> Student<span className="color-l">.</span></span></h1>
                            <p> Whether you are a student trying to find your ideal private <br/> language teachers/tutors </p>
                        </div>
                        <div className="elementos2">
                            <div className="imgBase">
                                <img src={Meeting} className="imgTop" alt="pessoa"/>
                            </div>
                            <div className="form9"/> 
                            <div className="form8"/> 
                        </div>
                    </div>
                </div>
                <div className="objetos">
                    <div>
                            <Card/>   
                    </div>
                </div>
            </section>
         
        <Footer/>
    </div>
    )}