import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <header>
            <Link to='/'>
                <img src="" alt="Cat" />
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