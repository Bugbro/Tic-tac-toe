import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [active, setActive] = useState(Array(9).fill(false));
    const [isXTurn, setXTurn] = useState(true);

    const checkWinner = ()=>{
        const winneLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winneLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[b]=== state[c] && state[a]=== state[c]){
                setTimeout(()=>{
                    alert(`Player ${state[a]} Won` );
                },1000);
                return state[a];
            }
        };
        return false;
    };

    
    const handleClick = (index)=>{
        if(state[index] !==null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X":"O";
        setState(copyState);
        setXTurn(!isXTurn);
        const copyActive = [...active];
        copyActive[index] = true;
        setActive(copyActive);
    }
    const reset = ()=>{
        setState(Array(9).fill(null));
        setActive(Array(9).fill(false));
        setXTurn(true);
    }

    const isWinner = checkWinner();
    
  return (
    <>
        <div className="board-container ">
            <h1> Tic Tac Toe Game :</h1>
            {isWinner ? <><h4 className='my-4'>{isWinner} Won</h4> <button className='my-4 fw-bold  btn-lg  btn btn-success' onClick={reset } >Play Again</button></>: (
                <>
                <h4 className='my-4'>Player Turn : {isXTurn ? "X" : "O"} </h4>
                <div className="board-row mt-4">
                    <Square onClick={()=> handleClick(0)} classActive={active[0]} value={state[0]}/>
                    <Square onClick={()=> handleClick(1)} classActive={active[1]} value={state[1]}/>
                    <Square onClick={()=> handleClick(2)} classActive={active[2]} value={state[2]}/>
                </div>
                <div className="board-row">
                    <Square onClick={()=> handleClick(3)} classActive={active[3]} value={state[3]}/>
                    <Square onClick={()=> handleClick(4)} classActive={active[4]} value={state[4]}/>
                    <Square onClick={()=> handleClick(5)} classActive={active[5]} value={state[5]}/>
                </div>
                <div className="board-row">
                    <Square onClick={()=> handleClick(6)} classActive={active[6]} value={state[6]}/>
                    <Square onClick={()=> handleClick(7)} classActive={active[7]} value={state[7]}/>
                    <Square onClick={()=> handleClick(8)} classActive={active[8]} value={state[8]}/>
                </div>
                <button className='my-4 fw-bold  btn-lg  btn btn-danger' onClick={reset} >Reset</button>
                </>)
            }
            
        </div> 
    </>
  )
}

export default Board
