import React, {Component} from 'react'

import { Route } from 'react-router-dom'

import Restaurants from './pages/containers/Restaurants'
import Home from './pages/containers/Home'

class AppLayout extends Component {

    appLayout = () => {
        return (
                <div className="dashboard-default">
                    <Route exact path="/" render={() => <Home/>}/>
                    <Route exact path="/accounts" render={() => <Home/>}/>
                    <Route path="/restaurants" component={Restaurants}/>
                </div>
        )
    };

    render() {
        return (
            this.appLayout()
        )
    }
}

export default AppLayout
