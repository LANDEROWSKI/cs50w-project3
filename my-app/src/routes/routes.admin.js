import {AdminLayout} from "../layouts"
import { HomeAdmin } from '../templates/Admin';

const routesAdmin = [
{
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
},
];

export default routesAdmin