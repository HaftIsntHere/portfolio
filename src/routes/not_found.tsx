import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
    return (
      <>
        <p className="text-9xl font-bold">404</p>
        <p>Lost? <a onClick={() => navigate("/")}>Go home</a></p>
      </>
    )
  }
  
  export default Home
  