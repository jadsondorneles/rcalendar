import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home'
import Error404 from './pages/Error404'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="*" component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}