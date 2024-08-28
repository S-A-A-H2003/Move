import { Suspense } from 'react';
import './App.css';

import  {routes} from './Route/Route.jsx'
import { useRoutes } from 'react-router-dom';
import Loading from './Component/Loding/index.jsx';

export default function App() {

const useroute =useRoutes(routes)
  return (
    <div>
      <Suspense fallback={<Loading></Loading>} className="Loding">
        {useroute}
      </Suspense>
      
    </div>
  )
}
