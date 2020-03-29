import React from 'react';
import App from './App';

function Header({children}){
    return(
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;
