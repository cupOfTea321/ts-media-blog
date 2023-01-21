import React from 'react';
import st from './Main.module.css'
import MyButton from "../components/UI/button/MyButton";
const MainPage: React.FC = () => {
    return (
        <main className={st.mainPage}>
            <div className={st.leftSide}>
                <div className={st.leftSideMsg}>
                    <h2><span>Grow your media with</span> BlogIn!</h2>
                    <p>This organization is non-profit.</p>
                    <p>All data is protected!</p>
                </div>
                <div className="forms">
                    <input className="inputMail" placeholder="Email Adress" type="text" />
                    <MyButton>Learn More</MyButton>

                </div>
            </div>

            <div className={st.rightSide}>

            </div>
        </main>
    );
};

export default MainPage;