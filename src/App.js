import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateEmp from './components/CreateEmp';
import EmpList from './components/EmpList';
import EditEmp from './components/EditEmp';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateEmp />} />
          <Route path="/create-employees" element={<CreateEmp />} />
          <Route path="/employees-list" element={<EmpList />} />
          <Route path="/edit-employees/:id" element={<EditEmp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
