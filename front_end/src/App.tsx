import { useRoutes } from 'react-router-dom'
import ClientRoutes from './routes/ClientRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  const routes = useRoutes([AdminRoutes, ClientRoutes]);
  return routes;
}

export default App
