import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';

import { showModal } from '../../actions';

function Header( props ) {
    const { container } = props;

    return (
        <header className="header header-7">
            <div className="header-middle sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/logo.png` } alt="Molla Logo" width="82" height="25" />
                        </Link>
                    </div>

                    {
                        container === "containerd" ?
                            <div className="header-right mr-lg-0 mr-auto">
                                <MainMenu />
                            </div> :
                            <>
                                <div className="header-right mr-lg-0 mr-auto">
                                    <MainMenu />
                                </div>
                            </>
                    }
                </div>
            </div>
        </header>
    );
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps, { showModal } )( Header );


