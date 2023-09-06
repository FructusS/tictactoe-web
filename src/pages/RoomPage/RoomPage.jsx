import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    HubConnection,
    HubConnectionBuilder,
    LogLevel,
} from "@microsoft/signalr";
export const RoomPage = () => {
    const [connection, setConnection] = useState();
    const { id } = useParams();

    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl("https://localhost:7214/game")
            .configureLogging(LogLevel.Information)
            .withAutomaticReconnect()
            .build();

        setConnection(connect);
    }, []);
    useEffect(() => {
        if (connection) {
            connection.start().catch((e) => {
                console.log(e);
            });

            connection.on("GameStatus", (gameStatusId) => {
                getGameStatus(gameStatusId);
            });   
            connection.on("MadeMove", (x, y, piece) => {
                console.log(x,y,piece)
            });
         
        }
    }, [connection]);
    const sendMessage = async () => {
        if (connection)
            await connection
                .invoke("JoinRoom", id)
                .then(() => {})
                .catch((e) => console.log(`exception ${e}`));
    };
    const getGameStatus = (gameStatusId) => {
        switch (gameStatusId) {
            case 0:
                console.log("hod x");
                break;
            case 1:
                console.log("hod y");
                break;
            case 2:
                console.log("ждем 2-го игрока");
                break;
            case 3:
                console.log("won x");
                break;
            case 4:
                console.log("won y");
                break;
            case 5:
                console.log("draw");
                break;
        }
    };
    return (
        <div>
            <div>room id: {id}</div>
            <button onClick={sendMessage}></button>
        </div>
    );
};
