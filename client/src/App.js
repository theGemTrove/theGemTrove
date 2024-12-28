import {Body} from "./components/Body/Body";
import {Splash} from "./components/Splash/Splash";

/*import "bootstrap/scss/bootstrap.scss";*/

import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/duotone.min.css";
import "./assets/fontawesome/css/sharp-duotone-solid.min.css";
import "./assets/fontawesome/css/sharp-thin.min.css";
import "./assets/fontawesome/css/solid.min.css";
import "./assets/fontawesome/css/brands.min.css";
import "./assets/fontawesome/css/light.min.css";

import './App.scss';
function App() {
  return (
    <div className="App">
        <Splash />
        <Body />
    </div>
  );
}

export default App;
