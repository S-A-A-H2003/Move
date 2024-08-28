import { Suspense } from 'react';
import './App.css';

import  {routes} from './Route/Route.jsx'
import { useRoutes } from 'react-router-dom';

export default function App() {

const useroute =useRoutes(routes)

  return (
    <div>
      <Suspense fallback={<div>loading... </div>}>
        {useroute}
      </Suspense>
    </div>
  )
}
