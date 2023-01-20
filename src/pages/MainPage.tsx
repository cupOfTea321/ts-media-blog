import React from 'react';
import './Main.css'
const MainPage: React.FC = () => {
    return (
        <main>
            <div className="left-side">
                <div className="left-side-msg">
                    <h2><span>Grow your media with</span> FlexMess!</h2>
                    <p>This organization is non-profit.</p>
                    <p>All data is protected!</p>
                </div>
                <div className="forms">
                    <input className="inputMail" placeholder="Email Adress" type="text" />
                    <button className="buttonUse">Learn More</button>

                </div>
            </div>

            <div className="right-side">

            </div>
        </main>
    );
};

export default MainPage;