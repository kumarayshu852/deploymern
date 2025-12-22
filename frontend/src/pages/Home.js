import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utilis';
import { ToastContainer } from 'react-toastify'
import { Link } from "react-router-dom";

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess("User Loggedout");
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }
    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('token');

            const response = await fetch("https://deploymern-api-pied.vercel.app//products", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            });
            const result = await response.json();
            console.log(result);
            setProducts(result);


        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout}>Logout</button>
            <div>
                {products.map(item => (
                    <ul key={item.name}>
                        <span>{item.name} : {item.price}</span>
                    </ul>
                ))}
            </div>
           <div className="projects-wrapper">
  <h1 className="dev-title">Developed by Gandhi Tech AI Sumit Gandhi</h1>
  <h2 className="project-heading">Our Projects</h2>

  {/* PROJECT BUTTONS */}
  <div className="projects-row">
    <Link to="https://virtualgandhiai.netlify.app/" target="_blank">
      <button className="ko">1. virtual assistant</button>
    </Link>

    <Link to="https://signup-codex-ai.netlify.app/" target="_blank">
      <button className="ko">2. Advance Codex AI</button>
    </Link>

    <Link to="https://gandhitechaistudentmangenmentsystem.netlify.app/" target="_blank">
      <button className="ko">3. Student Attedance sytsem</button>
    </Link>

    <Link to="https://gandhitechaiquizgameappreact.netlify.app/" target="_blank">
      <button className="ko">4. Quiz APP</button>
    </Link>

    <Link to="https://www.youtube.com/@computer-technology-s3" target="_blank">
      <button className="ko">5. Youtube channle</button>
    </Link>

    <Link to="https://gandhimoderncalculator.netlify.app/">
      <button className="ko">6. Modern calculator  </button>
    </Link>
      <br/>
      <Link to="https://a-icoder-46ea.vercel.app/">
      <button className="ko">7. AI Coder Explainer</button>
    </Link>
  </div>
</div>
      <ToastContainer />
        </div>
    )
}
export default Home
