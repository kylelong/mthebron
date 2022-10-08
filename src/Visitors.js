import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import TextField from '@mui/material/TextField';

const Visitors = () => {

    return (
        <div className="container">
              <Menu />
             <p className="pageTitle">Visitors</p>
             <div className="visitorsContainer">
                 
                <p className='visitorMessage'>
                    Come guest who ever thou art
                    If friend we greet thee hand in heart
                    If stranger such no longer be
                    If foe, may Christ love conquer thee
                    As a church of baptized believers
                    We welcome you to this site and
                    Pray that you will find the rare pearl
                        of support and strength.
                    If you are led by God we would love to have you
                    Share in one of our worship services as identified on this site.
                    Again we say THANK YOU for your visit and
                    “May God give grace and Favor’.
                </p>   

                <p className="visitorMessage2">Complete the contact form and we will send you a FREE gift! We look forward to your visit.</p> 

                 <form action="">
                    <TextField id="outlined-basic" label="Name" variant="outlined" />
                    <br />

                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <br />

                    <TextField id="outlined-basic" label="Phone" variant="outlined" />
                    <br />

                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                    <br />

                    <TextField id="outlined-basic" label="Subject" variant="outlined" />
                    <br />

                   <textarea name="" id="" cols="30" rows="5" className="textarea" placeholder="Message">

                   </textarea>
                    <br />
                    <button>Submit</button>
                </form>
             </div>
        

        <Footer/>
        </div>
    )
}

export default Visitors;