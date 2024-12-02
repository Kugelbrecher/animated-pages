import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <nav>
            <NavLink to='/' end>
                Home
            </NavLink>
            <NavLink to='/starfield' end>
                Starfield
            </NavLink>
        </nav>
    )
};

export default Layout;