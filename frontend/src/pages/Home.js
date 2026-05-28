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

            const response = await fetch("http://localhost:8080/products", {
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

                <Link to="https://virtualgandhiai.netlify.app/" target="_blank">
                    <button className="ko">1. virtual Ai</button>
                </Link>

                <Link to="https://signup-codex-ai.netlify.app/" target="_blank">
                    <button className="ko">2. codex AI</button>
                </Link>

                <Link to="https://gandhitechaistudentmangenmentsystem.netlify.app/" target="_blank">
                    <button className="ko">3. Student mangement system</button>
                </Link>

                <Link to="https://gandhitechaiquizgameappreact.netlify.app/" target="_blank">
                    <button className="ko">4. quiz game</button>
                </Link>

                <Link to="https://www.youtube.com/@computer-technology-s3" target="_blank">
                    <button className="ko">5. youtube link</button>
                </Link>

                <Link to="https://gandhimoderncalculator.netlify.app/" >
                    <button className="ko">6. Moder calculator</button>
                </Link>
                    <Link to="https://a-icoder-46ea.vercel.app/">
                    <button className="ko">7. AI Coder Explainer</button>
                </Link>

                <Link to="https://chattifiy-lse6.vercel.app/login">
                    <button className="ko">8. Chattyfiy</button>
                </Link>
                    
                     <Link to="https://cardbrithday.netlify.app/">
                    <button className="ko">9. digital wish birthday card</button>
                </Link>
                     <Link to="https://invertiseeatai.netlify.app/">
                    <button className="ko">10. InvertisEat AI</button>
                </Link>
                     <Link to="https://food-del-pink-kappa.vercel.app/">
                    <button className="ko">11.Food-del</button>
                </Link>
                     <Link to="https://food-del-r66k.vercel.app/">
                    <button className="ko">12.Food-del admin panel</button>
                </Link>
                     <Link to="https://pecan-whole-81535705.figma.site/">
                    <button className="ko">13.Full Stack Development Roadmap</button>
                </Link>
                    <Link to="https://rental-management-woad-five.vercel.app/">
                    <button className="ko">14.Rental Management System</button>
                </Link>
                     <Link to="https://genre-walnut-59802026.figma.site/">
                    <button className="ko">15.English Learning Roadmap</button>
                </Link>
                    <Link to="https://auraverse-ai.vercel.app/">
                    <button className="ko">16. AURAVERSE — Advanced AI Interface</button>
                </Link>
                     <Link to="https://loan-management-system-jet-tau.vercel.app/login">
                    <button className="ko">17.Loan Management System</button>
                </Link>
                    <Link to="https://portfolio-paftform.vercel.app/">
                    <button className="ko">18. Portfolio Paftform</button>
                </Link>
        </div>


            <ToastContainer />
        </div>
    )
}
export default Home
