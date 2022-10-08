import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Photos = () => {
    return (
        <div className="container">
            <Menu />
            <p className="pageTitle">Photo Gallery</p>
            <div className="photoMsg">
            Enjoy these photos of our many activities at Mount Hebron Baptist Church. 
            We invite you to join us and be a member of our church family. We have something for everyone!
            </div>
            <Footer />
        </div>
    )
}
export default Photos;