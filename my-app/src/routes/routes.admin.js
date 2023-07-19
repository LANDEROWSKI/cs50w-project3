import { Component } from "react";
import {AdminLayout} from "../layouts"
import { LoginAdmin } from '../templates/Admin';

const routesAdmin = [
{
    path: "/admin",
    layout: AdminLayout,
    component: LoginAdmin,
    exact: true,
},
];

export default routesAdmin