import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()
    const redirectToChats = () => {
        navigate('/chats')
    }
    return (
        <div className="homeWrap" >
            <h1 className="h1">
                Automatic Chats
            </h1>
            <button className="homeButton" onClick={redirectToChats}>Go to new chats</button>
        </div >
    );
}
export default HomePage