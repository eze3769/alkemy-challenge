import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Auth from '../auth/Auth'
import Home from '../../containers/home/Home'
import Login from '../../components/login/Login'
import NavBar from '../../components/navbar/NavBar'
import SearchContainer from '../../containers/searchContainer/SearchContainer'
import DetailsContainer from '../../containers/detailsContainer/DetailsContainer'
import Footer from '../../components/footer/Footer'
import NotFound from '../../components/notFound/NotFound'

function Router() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/*" element={
                    <Auth>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/search" element={<SearchContainer/>}/>
                        <Route path="/characters/:id" element={<DetailsContainer/>}/>
                    </Auth>
                } />
                <Route path="/login" element={<Login/>}/>
                <Route path="/404" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router
