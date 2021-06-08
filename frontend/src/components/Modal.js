import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';
import usePasswordToggle from'./usePasswordToggle';



const Modal = ({id = 'modal-new', onClose =() => {}}) =>{
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    
    /* VERIFICA A ONDE FOI FEITO O CLICK DO USUARIO, SE FOR FORA DO MODAL ELE É FECHADO*/
    const handleOutsideClick = (e) =>{
        if(e.target.id === id) onClose();
    }

   return(
    <div id={id} className="center" onClick={handleOutsideClick}>
    <section>
      <div className="container-new">
          <button className="close" onClick={onClose} >x</button>
           <h1 className="text-new">Get Started <br/><span>just login</span></h1>
            <form className="form_lugar">
                <div className="data">
                        <label className= "new-label">User Name:</label>
                        <input type="text" required/>
                </div>
                <div className="data">
                        <label id ="batata" className= "new-label">Password:</label>
                        <input type={PasswordInputType} required/>
                        <span className="veloso">
                        {ToggleIcon}  
                        </span>
                </div>
                <div className="btn-new">
                    <Link className="link" to="/dashboard"> Login </Link>
                </div>
            </form>
       </div>
       </section>
    </div>
   )  
};

export default Modal;