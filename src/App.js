import {Routes, Route} from "react-router-dom";
import "react-router-dom";
import './styles/style.css';
import Main from "./pages/main";
import SearchAdvert from "./pages/search_advert";
import PersonalCab from "./pages/personal_cab";
import AddAdvertPage from "./pages/add_advert_page";
import AuthPage from "./pages/auth";
import RegistrationPage from "./pages/registration_page";
import DefaultPetPage from "./pages/default_pet";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

  return (<div>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/search_advert'} element={<SearchAdvert/>}/>
                <Route path={'/personal_cab'} element={<PersonalCab/>}/>
                <Route path={'/add_advert_page'} element={<AddAdvertPage/>}/>
                <Route path={'/registration_page'} element={<RegistrationPage/>}/>
                <Route path={'/auth_page'} element={<AuthPage/>}/>
                <Route path={'/default_pet'} element={<DefaultPetPage/>}/>
            </Routes>
        </div>
  );
}
export default App;
