import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
            <div class="container-fluid">
                <p class="navbar-brand">Route around the page</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse show" id="navbarDark">
                    <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                        <li class="nav-item">
                            <Link to='/'>
                                <button type="button" class="btn btn-light">Home</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about'>
                            <button type="button" class="btn btn-light">About</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contacts'>
                            <button type="button" class="btn btn-light">Contact</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
