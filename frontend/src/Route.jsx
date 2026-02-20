import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";



const Routes=()=>{
    return(
        <>
        <BrowserRouter>
        <RouterRoutes>
            <Route path="/" element={<Homepage />} />
        </RouterRoutes>
        </BrowserRouter>
        </>
    )
}
 export default Routes;