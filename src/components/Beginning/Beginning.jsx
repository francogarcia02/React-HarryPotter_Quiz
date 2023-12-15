import './Beginning.css';
import Introduction from './Bricks/Introduction/Introduction';

const Beginning = () =>{
    return(
        <div className="Beginning">
            <img className="Beg-img" src="../../../assets/logo/logo.png" alt="Logo"/>
            <Introduction/>
        </div>
    )
}

export default Beginning