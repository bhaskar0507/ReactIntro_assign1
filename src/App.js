

// import Category from "./components/Category";

// function App() {
//   return(
//    <div>
//      <Category
//      <img src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"/>
//      />

   


//   </div>
//   );
    
  
// }

import Listitem from "./components/Listitem";
import "./style.css"


function App(){
  return(
    <div className="cont">
      <div>
        
      <Listitem btn={"HOME"}/>
      <Listitem btn={"ABOUT US"}/>
      <Listitem btn={"LOG IN"}/>
      <Listitem btn={"SETTINGS"}/>
      </div>
      
      <div>
      <Listitem btn={"SEARCH"}/>
      <Listitem btn={"HELP"}/>
      <Listitem btn={"DOWNLOAD"}/>
      <Listitem btn={"CONTACT US"}/>
      </div>
     
    </div>
  );
}

export default App;
