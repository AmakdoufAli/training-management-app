import './App.css';
import AddFormation from './pages/addFormation/AddFormation';
import { store } from './features/store';
import { Provider } from "react-redux";
import Brouillons from './pages/brouillons/Brouillons ';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateForm from './components/UpdateForm/UpdateForm';
import Historique from './pages/historique/Historique';
import Detail from './pages/historique/Detail';
import Dashboard from './pages/dashboard/Dashboard';
import AjouterInst from './pages/ajouter_institu/ajouterInst';
import AjouterFormateur from './pages/ajouter_formateur/ajouterFormateur';
import ListeInstituts from './pages/ListeInstituts/ListeInstituts';
import ListeFormateurs from './pages/ListeFormateurs/ListeFormateurs';
import ModifierFormateur from './pages/modifierFormateur/ModifierFormateur';
import ModifierInstitut from './pages/ModifierInstitut/ModifierInstitut';
import Login from './pages/auth/Login';
import NotFound from './pages/NotFound/NotFound';
import Utilisateurs from './pages/GestionUtilisateur/utilisateurs';
import AjouterUt from './components/listeUtilisateurs/ajouterUt';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Dashboard/>} />
          <Route path='/planification' element={<AddFormation/>} />
          <Route path='/brouillons' element={<Brouillons/>} />
          <Route path='/historique' element={<Historique/>} />
          <Route path='/brouillons/edit/:brouillonId' element={<UpdateForm/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/ajouterInst' element={<AjouterInst/>} />
          <Route path='/ajouterFrm' element={<AjouterFormateur/>} />
          <Route path='/listInstituts' element={<ListeInstituts/>} />
          <Route path='/listeFormateurs' element={<ListeFormateurs/>} />
          <Route path='/formateur/edit/:id' element={<ModifierFormateur/>} />
          <Route path='/institut/edit/:id' element={<ModifierInstitut/>} />
          <Route path='/users' element={<Utilisateurs/>} />
          <Route path='/ajouterUser' element={<AjouterUt/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
