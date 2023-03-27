import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import TextForm from "./components/text/text";
import { useState } from "react";
import Alert from "./components/alert/Alert";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    const alertDetails = {
      message: message,
      type: type
    }
    setAlert(alertDetails)
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [mode, setMode]= useState(false);
  const changeMode = () =>{
    if(mode === false){
      setMode(true);
      showAlert('dark Mode is Active', 'success');
      document.title = "Dark mode"
    }else{
      setMode(false);
      showAlert('light Mode is Active', 'success')
      document.title = "light mode "
    }
  }
  return (
    // <Router>
    <div>
 <Header mode={mode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} showAlert={showAlert}/>
      <Footer mode={mode}/>
    </div>
     
      //  <Routes>
      //     <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}>
          
      //     </Route>
      //     <Route exact path="/table" element={ <Table />}>
           
      //     </Route>
      // </Routes>\
      //  </Router> 

  );
}

export default App;
