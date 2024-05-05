import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 
  // Khai báo state để lưu trữ dữ liệu từ API
  const [data, setData] = useState(null);

  // Sử dụng useEffect để gọi API khi component được render
  useEffect(() => {
    // Gọi API từ backend
    fetch('http://localhost:5000/api/example')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // [] đảm bảo API chỉ được gọi một lần khi component được render

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data ? data : 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
