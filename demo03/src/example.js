import React from "react";
// 引入路由相关组件
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus,
            },
            {
                path: "/tacos/cart",
                component: Cart,
            }
        ]
    }
]

export default function RouterConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    {routes.map((item, index) => {
                        return <RouteWithSubRoutes key={index} {...item} />
                    })}
                </Switch>
            </div>
        </Router>
    )
}

function RouteWithSubRoutes(route) {
    return (
        <Route path={route.path} render={(props) => {
            return (<route.component {...props} routes={route.routes} />)
        }} />
    )
}


function Home() {
    return (
        <div>
            <h1>Home组件</h1>
        </div>
    )
}


function Tacos({ routes }) {
    return (
        <div>
            <h1>Tacos组件</h1>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <hr />
            <Switch>
                {routes.map((item, index) => {
                    return (<RouteWithSubRoutes key={index} {...item} />)
                })}
            </Switch>
        </div>
    )
}


function Bus() {
    return (
        <div>
            <h3>Bus</h3>
        </div>
    )
}


function Cart(props) {
    console.log('==>Get props', props);
    return (
        <div>
            <h3>Cart</h3>
        </div>
    )
}