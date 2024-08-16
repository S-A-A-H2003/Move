import './App.css';

import  {routes} from './Route/Route.jsx'
import { useRoutes } from 'react-router-dom';

export default function App() {

const useroute =useRoutes(routes)

  return (
    <div>
      {useroute}
    </div>
  )
}
