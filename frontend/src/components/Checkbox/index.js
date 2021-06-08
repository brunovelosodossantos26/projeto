import {useState} from 'react';
import './styles.css';

function Checkbox(props){

    const [checked, setChecked] = useState(false)

    function toggle(){
        setChecked(!checked)
    }

    const chechekedClass = checked ? 'checked' : '';
    const containerClass = `checkbox ${chechekedClass}`.trim()

    return(
        <div className={containerClass} onClick={toggle} ></div>
    )
}

export default Checkbox;