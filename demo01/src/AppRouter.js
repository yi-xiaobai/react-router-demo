
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";

export default function AppRouter() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about/123">About</Link>
                </li>

                <li>
                    <Link to="/news">News</Link>
                </li>
            </ul>

            <hr />

            {/* <Route path="/" exact>
                <Home />
            </Route> */}

            <Route path="/" component={Home} exact />

            {/* <Route path="/about" exact>
                <About />
            </Route> */}
            <Route path="/about/:id" component={About} />

            <Route path="/news" component={News} />
        </Router>
    )

}



// function Home() {
//     return (
//         <div>我是home组件</div>
//     )
// }


// function About() {
//     return (
//         <div>我是About组件</div>
//     )
// }