import QRCode from "react-qr-code";
import React,{useState} from "react";

export default function QrCodeGenerator(){
    const [qrCode,setQrCode]= useState("")
    const [input,setInput]=useState("")

    function handleGenerateQrCode(){
        setQrCode(input);
    }
    return <div>
        <h1>QR Code generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)}type="text" name="qr-code" placeholder="enter you value here"/>
            <button disabled={input==="" ? true :false }onClick={()=>handleGenerateQrCode()}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} />
        </div>
    </div> 
}