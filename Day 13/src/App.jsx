// Class based components are not in use anymore, we mostly use functional components.
import HomePage from "./pages/homePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SearchPage from "./pages/searchPage.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  </BrowserRouter>

  );
};

export default App;