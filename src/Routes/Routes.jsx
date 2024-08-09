import {React} from 'react-router-dom'
import Xisobod from "./Xisobot/Xisobot"
import Mirojatlar from "./Mirojatlar/Mirojatlar"
import Oquvchilar from "./Oquvchilar/Oquvchilar"
import Guruxlar from "./Guruxlar/Guruxlar"
import Tolov from "./Tolov/Tolov"
import Davomat from "./Davomat/Davomat"
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
const Routes = () => {
  return (
    <>
        <Route exact path="/">
    <Xisobod/>
    </Route>

    <Route  path="/mirojatlar">
    <Mirojatlar/>
    </Route>

    <Route  path="/oquvchilar">
    <Oquvchilar/>
    </Route>

    <Route  path="/guruxlar">
    <Guruxlar/>
    </Route>

    <Route  path="/tolov">
    <Tolov/>
    </Route>
    <Route  path="/davomat">
    <Davomat/>
    </Route>
    </>
  )
}

export default Routes