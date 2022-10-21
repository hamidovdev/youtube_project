import React from 'react';
import { useRoutes } from 'react-router-dom';
import {routes} from "../../routes/routes"
import Saidbar from "../../components/Saidbar"
function App () {
  const getColor = localStorage.getItem("backgroundColor");
  const s = {
    marginLeft:"15%",height:"1100px",backgroundColor:getColor
  }
  const content = useRoutes(routes)
  return (
    <>

    <Saidbar/>
    <div style={s}>
    {content}
    </div>

    </>
  );
}

export default App;
