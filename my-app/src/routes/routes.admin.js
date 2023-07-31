import {AdminLayout} from "../layouts"
import { HomeAdmin, UsersAdmin } from '../templates/Admin';

const routesAdmin = [
{
    path: "/admin",
    layout: AdminLayout,
    component: HomeAdmin,
    exact: true,
},
{
    path:'/admin/users',
    layout: AdminLayout,
    component: UsersAdmin,
    exact: true,
}
];

export default routesAdmin