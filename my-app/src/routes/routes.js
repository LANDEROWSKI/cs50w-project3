import routesAdmin from './routes.admin';
import routesClient from './routes.client';
import { Error404 } from '../templates';
import { BasicLayout } from '../layouts';

const routes = [
    ...routesAdmin,
    ...routesClient,
    {
        layout: "",
        component: Error404
    },
];

export default routes;