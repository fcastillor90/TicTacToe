import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lobby from "./lobby.jsx";
import Board from "./board.jsx";

//create your first component
const Home = () => {
	// Defino un estado inicial que es el lobby y cambiara a "game" solo cuando ingrese ambos nombres y le de click al boton para iniciar
	const [stateGame, setStateGame] = useState("Lobby")
	const [Players, setPlayers] = useState("")

	return (
		<div className="container ">
			<div className="row tittle">
				<div className="col-12">
					<h1 className="text-center mt-5 text-white">
                    Tiki Taka Toke Simpleciiiiiiito
                    </h1>
				</div>
			</div>
            <div className="mimama">
              {
				stateGame === "Lobby"? <Lobby goGame= {setStateGame} setPlayers={setPlayers}/> : <Board Players={Players}/>
			  }  
            </div>
			

		</div>
	);
};

export default Home;