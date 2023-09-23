import React, {  useState } from 'react'
import Winner from './Winner';

export default function Board() {

    const len=(arr)=>{
        let l=0;
        let i=0;
        while(arr[i]!==undefined){
            l++
            i++;
        }
        return l;
    }


    function getAllCombinations(inputArray) {
        var resultArray = [];
        var combine = function () {
            for (var i in inputArray) {
                var temp = [];
                var tempResult = [];
                for (var j in arguments) {
                    tempResult.push(inputArray[arguments[j]]);
                    if (arguments[j] === i) {
                        temp = false;
                    } else if (temp) {
                        temp.push(arguments[j]);
                    }
                }
                if (temp) {
                    temp.push(i);
                    combine.apply(null, temp);
                }
            }
            if (tempResult.length > 0) {
                resultArray.push(tempResult);
            }
            return resultArray;
        };
        return combine();
    }

    const [xoro, setXoro] = useState([]);
    const [previousIndex, setPreviousIndex] = useState(null)
    const [win, setWin] = useState(null);
    const [arrx, setArrx] = useState([]);
    const [arro, setArro] = useState([]);
    const [winner, setWinner] = useState(false)

    const checkWinner = (array) => {
        let arr = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 1, 0], [2, 0, 1], [3, 4, 5], [3, 5, 4], [4, 3, 5], [4, 5, 3], [5, 4, 3], [5, 3, 4], [6, 7, 8], [6, 8, 7], [7, 6, 8], [7, 8, 6], [8, 6, 7], [8, 7, 6], [0, 4, 8], [0, 8, 4], [4, 0, 8], [4, 8, 0], [8, 4, 0], [8, 0, 4], [2, 4, 6], [2, 6, 4], [4, 2, 6], [4, 6, 2], [6, 4, 2], [6, 2, 4], [0, 3, 6], [0, 6, 3], [3, 0, 6], [3, 6, 0], [6, 3, 0], [6, 0, 3], [1, 4, 7], [4, 1, 7], [1, 7, 4], [4, 7, 1], [7, 4, 1], [7, 1, 4], [2, 5, 8], [2, 8, 5], [5, 2, 8], [5, 8, 2], [8, 5, 2], [8, 2, 5]];
        let temp = getAllCombinations(array);
        for (let i in arr) {
            for (let j in temp) {
                if (temp[j].toString() === arr[i].toString()) {
                    return true;
                }
            }
        }
        return false;
    }

    var arr1 = arrx.map(function (e) { return e; });
    var arr2 = arro.map(function (e) { return e; });

    const handleClick = (index) => {
        var arr = xoro.map(function (e) { return e; });
        // console.log(arr,"\n",arr1,"\n",arr2);

        if (arr[index] === undefined && winner === false) {
            if (arr[previousIndex] === "X") {
                arr[index] = "O";
                arr2.push(index);
                setArro(arr2);
                setXoro(arr);
                setPreviousIndex(index);
                let isWinner=checkWinner(arr2);
                if (isWinner === true) {
                    setWin("O");
                    console.log("The winner is ", win);
                }
                setWinner(isWinner);
            }
            else {
                arr[index] = "X";
                arr1.push(index);
                setArrx(arr1);
                setXoro(arr);
                setPreviousIndex(index);
                let isWinner=checkWinner(arr1);
                if (isWinner === true) {
                    setWin("X");
                }
                setWinner(isWinner);
            }
        }

        if(len(arr)===9 && winner===false){
            setWin("Draw");
        }
    }

   


    return (
        <>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <table width="250px" height="250px">
                    <tbody>
                        <tr className=''>
                            <td ><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(0) }}>{xoro[0]}</button></div></td>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(1) }}>{xoro[1]}</button></div></td>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(2) }}>{xoro[2]}</button></div></td>
                        </tr>
                        <tr>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(3) }}>{xoro[3]}</button></div></td>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(4) }}>{xoro[4]}</button></div></td>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(5) }}>{xoro[5]}</button></div></td>
                        </tr>
                        <tr>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(6) }}>{xoro[6]}</button></div></td>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(7) }}>{xoro[7]}</button></div></td>
                            <td><div className='btn-border' ><button className="btn btn-lg btn-block glow-button" onClick={() => { handleClick(8) }}>{xoro[8]}</button></div></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <Winner winner={win} isWin={winner}/>
        </>
    )
}
