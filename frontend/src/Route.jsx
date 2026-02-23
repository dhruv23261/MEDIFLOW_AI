import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AuthPage from "./pages/Authpage";


const Routes=()=>{
    return(
        <>
        <BrowserRouter>
        <RouterRoutes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<AuthPage />} />
        </RouterRoutes>
        </BrowserRouter>
        </>
    )
}
 export default Routes;