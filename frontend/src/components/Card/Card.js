import React, {useEffect, useState} from 'react';
import './card.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import {api} from '../../config';


const  Card = () => {

    


    const [titleData, setTitleData] = useState([])
   


    const nbaDAta = async () => {
        const response = await axios.get(api)
        setTitleData(response.data)
        
    }

    const renderAccordion = (team, index) =>{
        return (
            
            <div className="card">
                <div className="content-card">
                <div className="imgBx"> <img src={team.img} className="tmImg" alt="pessoa"/></div> 
                <div className="rating">
                        <input type="radio" id="star1" /><label className="space" htmlFor="star1"><FontAwesomeIcon icon={faStar} className="checked" /></label> 
                        <input type="radio" id="star2" /><label className="space" htmlFor="star5"><FontAwesomeIcon icon={faStar} className="checked" /></label>
                        <input type="radio" id="star3" /><label className="space" htmlFor="star3"><FontAwesomeIcon icon={faStar} className="checked" /></label>
                        <input type="radio" id="star4" /><label className="space" htmlFor="star4"><FontAwesomeIcon icon={faStar} className="no-checked"/></label>
                        <input type="radio" id="star5" /><label className="space" htmlFor="star5"><FontAwesomeIcon icon={faStar} className="no-checked"/></label>
                    </div>
                <div className="card-text">
                    <p className="card-p">{team.lessons} Lessons</p>
                </div>
                <div className="contentBx">
                    <h3>{team.title}</h3>
                </div>
                </div>    
            </div>  



        )
    }

    useEffect(() => {
        nbaDAta();
    },[]);




    return <div div className="container-card">{titleData.map(renderAccordion)}</div>;
    
}

export default Card;