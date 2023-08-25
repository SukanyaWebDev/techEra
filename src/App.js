import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/index'
import SingleCard from './components/SingleCard/index'
import NotFound from './components/NotFound'
import Header from './components/Header'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses/:id" component={SingleCard} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </BrowserRouter>
)
export default App
