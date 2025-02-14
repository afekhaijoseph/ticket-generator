import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/Homepage/HomePage'
import DetailsPage from './pages/Detailspage/DetailsPage'
import TicketPage from './pages/Ticketpage/TicketPage'
import './index.css'

const router = createBrowserRouter(

  createRoutesFromElements(
  <Route path='/' element ={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/details' element={<DetailsPage/>}/>
      <Route path='/ticket' element={<TicketPage/>}/>
  </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
 
  )

}
export default App
