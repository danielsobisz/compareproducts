import React from 'react';

import SVGIcon from '../../components/SVGIcon'
const Header = () => {
    return (
        <header className="header">
            <SVGIcon name="logo" width={100} className="header__image" />
            <h1 className="header__title">Compare</h1>
        </header>
    );
}

export default Header;
