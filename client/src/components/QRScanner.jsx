import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState, useEffect } from 'react';

function QRScanner() {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
      const scanner = new Html5QrcodeScanner('read', {
        qrbox: {
          width: 250,
          height: 250,
       },
        fps: 5,
      })

      scanner.render(success, error);

      function success(result) {
        scanner.clear(); //clear the scanner 
        setScanResult(result);
      }

      function error(err) {
      console.warn(err);
      }
  }, []);

  return (
    <>
      <h1>QR Code scanning in React</h1>
      { scanResult
      ? <div>Success: {scanResult}</div>
      : <div id='reader'></div>
      } 
    </>
  );
}

export default QRScanner;