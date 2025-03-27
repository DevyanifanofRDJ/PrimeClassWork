// Class based components are not in use anymore, we mostly use functional components.
import HomePage from "./pages/homePage.jsx";
import SearchPage from "./pages/searchPage.jsx";

const App_Basic=()=>{
  const {location}=window;
  const {pathname}=location;
  if(pathname=="/")
  {
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
  else if(pathname=="/search")
  {
    return(
      <div>
        <SearchPage/>
      </div>
    );
  }
  else
  {
    return (
      <div>
        <h1>Page Not Found</h1>
      </div>
    );
  }
};

export default App_Basic;