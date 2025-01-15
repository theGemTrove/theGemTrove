import {Cloudinary} from "@cloudinary/url-gen";

import {Body} from "./components/Body/Body";
import {Splash} from "./components/Splash/Splash";

import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/duotone.min.css";
import "./assets/fontawesome/css/sharp-duotone-solid.min.css";
import "./assets/fontawesome/css/sharp-thin.min.css";
import "./assets/fontawesome/css/solid.min.css";
import "./assets/fontawesome/css/brands.min.css";
import "./assets/fontawesome/css/light.min.css";

import './App.scss';
function App() {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'ds5xwt3v1'
        }
    });

    console.log("CLD? ", cld);

    return (
        <div className="App">
            <Splash />
            <Body cld={cld} />
        </div>
    );
}

export default App;
