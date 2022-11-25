import { createRoot } from 'react-dom/client';
import { createRoutes } from './routes';

const root = createRoot(document.getElementById('root'));
root.render(createRoutes());
