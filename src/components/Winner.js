import React from 'react'

export default function Winner(props) {
    const handleClick =()=>{
        window.location.reload();
        return false;
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h2>Winner</h2>
                {props.isWin && <p>The winner is {props.winner}</p>}
                {props.winner === "Draw" && <p>No winner! Match is {props.winner}</p>}
                {props.winner !== null && <button className="btn2 btn-dark my-1" onClick={handleClick}>Play Again</button>}
                {/* {props.winner !== null &&<button className="btn2 btn-dark">Cancel</button>} */}
            </div>
        </>
    )
}
