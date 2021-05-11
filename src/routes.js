import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Pies from './components/Pies'
import Pie from './components/Pie'

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/pies' component={Pies} />
    <Route path='/pie/:id' component={Pie} />
  </Switch>
)