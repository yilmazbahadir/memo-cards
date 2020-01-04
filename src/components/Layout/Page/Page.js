import React, { Fragment } from 'react';
import {Footer} from '../Footer/Footer.js';
import {Header} from '../Header/Header.js';
import Navigation from '../Navigation/Navigation.js';

const Page = ({Component}) => {
    
    return (
        <Fragment>
            <Header/>
            <Navigation/>
            <Component/>
            <Footer/>
        </Fragment>
    );

}

export default Page;
