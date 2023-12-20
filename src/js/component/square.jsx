import React from "react";
function Square({game, chooseSquare }) {
    return (
        <div className="square" onClick={chooseSquare}>
            {game}
        </div>
    )
}

export default Square;