import { Routes, Route } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

function Main(props){
    return(
        <main>
            <Routes>
                <Route path='/cats' element={<Index/>}  />
                <Route path='/cats/:id' element={<Show />} />
            </Routes>
        </main>
    )
};

export default Main;