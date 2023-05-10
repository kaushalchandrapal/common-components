import { Navigate, useRoutes } from 'react-router-dom';
import { DemoPage } from './elements';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // Auth
    {
      path: 'demo',
      element: <DemoPage />,
    },
  ]);
}
