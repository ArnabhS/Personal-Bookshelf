import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookShelfPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='bg-black text-white h-full'>
      <BrowserRouter>
       <ToastContainer />
        <Routes>
          <Route exact path="/" element={<BookSearchPage/> } />
          
          <Route exact path="/bookshelf" element= {<BookshelfPage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
