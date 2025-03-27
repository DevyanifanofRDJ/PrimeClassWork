import {Link} from "react-router-dom";

const NotFoundPage=()=>{
    return (
        <div>
            <h2>Oops!!!!</h2>
            <h3>Page Not Found.</h3>
            <Link to="/">Home</Link>
        </div>
    );
};

export default NotFoundPage;