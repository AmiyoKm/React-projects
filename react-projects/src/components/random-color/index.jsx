import React , {useState, useEffect} from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState(null);
    const [color, setColor] = useState("black")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256); 
        const g = randomColorUtility(256); 
        const b = randomColorUtility(256); 

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
    }

     useEffect(()=>{
        typeOfColor === "hex" ? handleCreateRandomHexColor() : handleCreateRandomRgbColor();
        
     },[typeOfColor]);

    return <div style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
       

    }}>
        <button style={{fontSize:"50px"}} onClick={() => setTypeOfColor('hex')}>Create HEX Color</button >
        <button style={{fontSize:"50px"}} onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button >
        <button style={{fontSize:"50px"}} onClick={() => typeOfColor === "hex" ? handleCreateRandomHexColor() : handleCreateRandomRgbColor() }>Generate Random Color</button >

        <div style={{fontSize:"200px"}}>{color}</div>

    </div>
}