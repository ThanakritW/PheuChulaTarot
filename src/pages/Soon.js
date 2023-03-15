import logo from '../images/LOGO.png';
import '../App.css';
import { FaInstagram } from 'react-icons/fa';


function Soon() {
    return (
        <div className="App">
            <img src={logo} style={{ height: 200 }}></img>
            <h1>Coming soon...</h1>
            <a href="https://www.instagram.com/pheuchula_party/"><h2> <FaInstagram /> instagram</h2></a>
        </div >
    );
}

export default Soon;
