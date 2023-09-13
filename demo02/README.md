## 嵌套路由
```jsx
import { useRouteMatch, useParams, Link, Switch, Route } from 'react-router-dom'

// 外层注册路由信息
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


// Topices组件嵌套路由信息
let { path, url } = useRouteMatch()
<ul>
    <li>
        <Link to={`${url}/render`}>React</Link>
    </li>
    <li>
        <Link to={`${url}/vue`}>Vue3</Link>
    </li>
    <li>
        <Link to={`${url}/bui`}>WebPacl</Link>
    </li>
    <li>
        <Link to={url}>back</Link>
    </li>
</ul>

<Switch>
    <Route path={path} exact>
        <h3>please  choose  topices</h3>
    </Route>

    <Route path={`${path}/:topiceId`}>
        <Topice />
    </Route>
</Switch>
```


## 查询参数