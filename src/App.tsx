import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TodoPage from "./pages/TodoPage";
import Layout from "./components/Layout";
const App: React.FC = () => {
  return (
      <>
        {/*<h1>App</h1>*/}
        <Routes>
            <Route element={<Layout/>} path={'/'}>
                <Route element={<MainPage/>} path={''} />
                <Route element={<TodoPage/>} path={'todo'}/>
            </Route>

        </Routes>
      </>

  );
}

export default App;
