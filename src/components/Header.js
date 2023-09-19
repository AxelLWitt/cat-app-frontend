import { Link } from 'react-router-dom'

function Header(){
    return (
        <nav className='Nav'>
            <Link to='/cats'>
                <div>
                    <h1>CATZ</h1>
                </div>
            </Link>
        </nav>
    )
}

export default Header;