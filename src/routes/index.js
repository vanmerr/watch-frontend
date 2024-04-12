import Home from "~/pages/Home"
import Authen from "~/pages/Authen"

const publicRoutes = [
    { path : '/', component : Home },
    { path : '/authen', component : Authen, layout : null}
]


export default publicRoutes