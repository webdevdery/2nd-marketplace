import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu( props ) {
    const [ path, setPath ] = useState( "" );

    useEffect( () => {
        setPath( window.location.href );
    } )

    return (
        <nav className="main-nav">
            <ul className="menu sf-arrows">
                <li className={ `megamenu-container` } id="menu-home">
                    <Link to={ `${process.env.PUBLIC_URL}` } className="">Editorial</Link>
                </li>
                <li className={ path.indexOf( "shop" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="">Discover</Link>
                </li>
                <li className={ path.indexOf( "product/" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/product/default/7` } className="">Product</Link>
                </li>
                <li className={ path.indexOf( "pages" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="">Market</Link>
                </li>
                <li className={ path.indexOf( "blog/" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="">Activity</Link>
                </li>
                <li className={ path.indexOf( "element" ) > -1 ? 'active' : '' }>
                    <Link to={ `${process.env.PUBLIC_URL}/elements` } className="">Sign In</Link>
                </li>
            </ul>
        </nav>
    );
}