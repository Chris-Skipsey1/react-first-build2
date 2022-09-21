import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <header>
            <Link to='/'>
                <img src="https://img.icons8.com/ios-filled/50/undefined/conference-call.png" alt="Conference Call" />
            </Link>
            <Link to='/'>
            <h1>React First Build</h1>
            </Link>
            <div className="login">
            <p>Welcome Graeme!</p>
            </div>
        </header>
    )


}

export default Header;