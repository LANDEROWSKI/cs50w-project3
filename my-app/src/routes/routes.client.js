import {ClientLayout} from "../layouts"
import { Home } from '../templates/Client';


const routesClient = [
    {
        path: "/",
        layout: ClientLayout,
        component: Home,
        exact: true,
    },

];

export default routesClient