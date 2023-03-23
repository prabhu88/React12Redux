import React,{Component,Suspense} from 'react'
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import Layout from './template/default'
class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Suspense fallback="loading...">                      
                    <Switch>
                        <Route path="/Admin" render={(props) => <Layout {...props} />} />
                        <Redirect from="/" to="/Admin" />
                    </Switch>                      
                </Suspense>        
            </BrowserRouter>
        )  
    }
}

export default App