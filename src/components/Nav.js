import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h2>My Life</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;