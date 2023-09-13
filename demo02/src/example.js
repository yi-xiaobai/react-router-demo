

// 引入路由相关组件
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// 引入页面组件
import Home from './components/Home';
import Topices from './components/Topices';


export default function NestExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/topices">Topices</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    {/* 注册路由信息   exact 精准匹配*/}
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/topices">
                        <Topices />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}