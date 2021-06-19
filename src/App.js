import {
 BrowserRouter, 
 Switch,
 Route 
} from 'react-router-dom';

import Home from 'containers/Home';
import Admin from './containers/Admin';
import Login from './containers/Login';
import Grade from './containers/Grade';
import Notes from './containers/Notes';
import Subject from './containers/Subject';
import Student from './containers/Student';
import ShowGrade from './containers/ShowGrade';
import AuthProvider from 'contexts/AuthContext';
import ShowStudent from './containers/ShowStudent';
import ShowSubject from './containers/ShowSubject';
import ViewStudent from './containers/ViewStudent';
import PrivateRoute from "components/Routes/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/admin" component={Admin}/>
          <PrivateRoute path="/cadastro-nota" component={Grade}/>
          <PrivateRoute path="/cadastro-aluno" component={Student}/>
          <PrivateRoute path="/notas-cadastradas" component={ShowGrade}/>
          <PrivateRoute path="/cadastro-disciplina" component={Subject}/>
          <Route path="/estudante" component={ViewStudent} />
          <Route path="/ver-notas" component={Notes} />
          <PrivateRoute path="/alunos-cadastrados" component={ShowStudent}/>
          <PrivateRoute path="/disciplinas-cadastradas" component={ShowSubject}/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
