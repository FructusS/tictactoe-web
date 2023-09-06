import { useNavigate } from "react-router-dom";

import "./StartPage.css";

export const StartPage = () => {
    const navigate = useNavigate();

    const onStartClick = () => {
        navigate(`/room/create`);
    };
    const onConnectClick = () => {
        navigate(`/room/exist`);
    };

    return (
        <div className="container">
            <div>
                <button onClick={onStartClick} className="main-button">
                    Создать игру
                </button>

                <button onClick={onConnectClick} className="main-button">
                    Присоединиться к игре
                </button>
            </div>
        </div>
    );
};
