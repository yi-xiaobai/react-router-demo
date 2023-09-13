
import { useRouteMatch, useParams, Link, Switch, Route } from 'react-router-dom'

export default function Topices() {
    let { path, url } = useRouteMatch()
    console.log('==>Get path', path);
    console.log('==>Get url', url);
    return (
        <div>
            <h1>我是Topices组件</h1>
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
        </div>
    )
}


function Topice() {
    const { topiceId } = useParams()
    return (
        <div>
            <h1>current id is :{topiceId}</h1>
        </div>
    )
}