## 入门

```jsx
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// as 别名的意思
<Router>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/news">News</Link>
    </li>
  </ul>
  <Route path="/" components={Home}></Route>
  <Route path="/news" components={News}></Route>
</Router>;
```

## 动态路由

```jsx
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// as 别名的意思
<Router>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/news/9999999999">News</Link>
    </li>
  </ul>
  <Route path="/" components={Home}></Route>
  <Route path="/news/:aid" components={News}></Route>
</Router>;
```