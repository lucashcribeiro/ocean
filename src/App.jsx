import NavBar from './components/navbar/NavBar.jsx';


import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <>
      {/* lembrar de adicionar classe "isActive" la no componente se o link estiver ativo */}
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
