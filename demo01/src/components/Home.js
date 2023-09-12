import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { id: '999', content: 'Vue' },
                { id: '1999', content: 'React' },
                { id: '1000999', content: 'webPack' },
            ]
        }
    }


    // 编程式重定向
    handleButtonClick = () => {
        this.props.history.push("/news")
    }

    render() {
        return (
            <div>
                {/* 标签式重定向 */}
                {/* <Redirect to="/news" /> */}
                <h1>Home组件</h1>
                <ul>
                    {this.state.list.map((item, index) => {
                        return (<li key={index}><Link to={'/about/' + item.id}>{item.content}</Link></li>)
                    })}
                </ul>
                <div>
                    <button onClick={this.handleButtonClick}>点击跳转到news组件</button>
                </div>
            </div>
        )
    }
}
export default Home

