import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Beginning from './components/Beginning/Beginning';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
    const [iniciar, setIniciar] = useState(true)

    const handleIniciar = (cambio) =>{
        setIniciar(cambio)
    }

    if(iniciar){
        return (
            <div className="background expand">
                <Beginning/>
                <Button className="text-uppercase p-3 m-2" onClick={() => handleIniciar(false)}>comenzar quiz</Button>
            </div>
        )
    }
    else{
        return(
            <div className="background expand">

            </div>
        )
    }
}

export default App;