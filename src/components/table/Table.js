import { useState } from "react";
const Table =()=>{
    const myStyleObj = {
        backgroundColor: '#fff',
        color: '#333'
    }
    const [myStyle, setMyStyle]= useState(myStyleObj)
    const changeColor = ()=>{
        if(myStyle.backgroundColor === '#fff')
        {
            const myStyleObj = {
                backgroundColor: '#333',
                color: '#fff'
            }
            setMyStyle(myStyleObj)
        }else{
            setMyStyle(myStyleObj)
        }
    }
    return (
        <div style={myStyle} className=" py-3">
            <div className="container">
         <table className="table">
            <thead>
                <tr>
                <th scope="col"  style={myStyle}>#</th>
                <th scope="col"  style={myStyle}>First</th>
                <th scope="col"  style={myStyle}>Last</th>
                <th scope="col"  style={myStyle}>Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row" style={myStyle}>1</th>
                <td style={myStyle} >Mark</td>
                <td style={myStyle}>Otto</td>
                <td style={myStyle}>@mdo</td>
                </tr>
                <tr>
                <th scope="row" style={myStyle}>2</th>
                <td style={myStyle}>Jacob</td>
                <td style={myStyle}>Thornton</td>
                <td style={myStyle}>@fat</td>
                </tr>
                <tr>
                <th scope="row" style={myStyle}>3</th>
                <td style={myStyle} colSpan="2">Larry the Bird</td>
                <td style={myStyle}>@twitter</td>
                </tr>
            </tbody>
        </table>
        <div className="my-3">
            <button className="btn btn-success" onClick={changeColor}>Change to dark mode</button>
        </div>
       </div>
        </div>
       
    )
}
export default Table;