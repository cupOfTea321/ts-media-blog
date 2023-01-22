import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import BlogPage from "./pages/BlogPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
const App: React.FC = () => {
  return (
      <>
        {/*<h1>App</h1>*/}
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route element={<MainPage/>} path={''} />
                <Route element={<BlogPage/>} path={'blog'}/>
                <Route element={<LoginPage/>} path={'login'}/>
            </Route>

        </Routes>
      </>

  );
}

export default App;
