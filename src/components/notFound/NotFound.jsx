import { Link } from "react-router-dom"


function NotFound() {
    return (
        <div className="container p-5">
            <h1>404 Not found</h1>
            <h3 className="p-5 text-center">The section that you are looking for doesn't exists.</h3>
            <p className="p-3 text-center">Please verify the URL in your browser</p>
            <div className="d-flex justify-content-end">
                <Link to="/" className="btn btn-danger my-5 text-right">Take me to Homepage</Link>
            </div>
            


        </div>
    )
}

export default NotFound
