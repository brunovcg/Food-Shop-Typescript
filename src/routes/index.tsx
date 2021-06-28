import { Switch, Route } from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard' 
import {Checkout} from '../pages/Checkout' 
import {NotFound} from '../pages/NotFound'
import Payment from '../pages/Payment'
import {Home} from '../pages/Home'
import {Login} from '../pages/Login'
import {SignUp} from '../pages/SignUp'
 

const Routes = () => {

    return(
        <Switch>
              <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/checkout">
                <Checkout/>
            </Route>
            <Route path="/payment">
                <Payment/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default Routes