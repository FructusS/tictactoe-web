import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import refresh from '../../assets/ic_refresh.svg';
import "./CreatePage.css";

export const CreatePage = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState("");
    useEffect(() => {
        axios
            .get(`https://localhost:7214/room`)
            .then((response) => {
                setRoomId(response.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);
    return (
        <div className="createPageContainer">
            <div className="room-title">
                <p>Room id: {roomId}</p>
                <button className="refresh-button">
                    <img src={refresh} className="refresh-icon-button"></img>
                </button>
            </div>
            <button
                onClick={() => {
                    navigate(`${roomId}`);
                }}
            >
                Создать
            </button>
        </div>
    );
};
