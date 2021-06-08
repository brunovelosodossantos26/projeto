import React, {useEffect, useState} from 'react';
import './card.css'

import Classe from '../../assets/classe.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {api} from '../../config';


export default function Card({dados}){

    return(
        <div className="card">
        <div className="content-card">
        <div className="imgBx"> <img src={Classe} className="tmImg" alt="pessoa"/></div> 
        <div className="rating">
                <input type="radio" id="star1" /><label className="space" htmlFor="star1"><FontAwesomeIcon icon={faStar} className="checked" /></label> 
                <input type="radio" id="star2" /><label className="space" htmlFor="star5"><FontAwesomeIcon icon={faStar} className="checked" /></label>
                <input type="radio" id="star3" /><label className="space" htmlFor="star3"><FontAwesomeIcon icon={faStar} className="checked" /></label>
                <input type="radio" id="star4" /><label className="space" htmlFor="star4"><FontAwesomeIcon icon={faStar} className="no-checked"/></label>
                <input type="radio" id="star5" /><label className="space" htmlFor="star5"><FontAwesomeIcon icon={faStar} className="no-checked"/></label>
            </div>
        <div className="card-text">
            <p className="card-p">10 Lessons</p>
        </div>
        <div className="contentBx">
            <h3>Sistemas</h3>
        </div>
        </div>    
    </div>  

    )
    
}

