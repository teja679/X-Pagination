import './App.css';
import LandingPage from './components/LandingPage';
import { useEffect, useState } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      const jsonResponse = await response.json();
      setEmployees(jsonResponse)
    } catch (err) {
      alert('failed to fetch data')
      console.long("failed to fetch data")
    }
  }
  const handleChange = (val) => {
    let len = employees.length;
    if ((val === 1 && page < 10 && (page * 10 < len)) || (val === -1 && page > 1)) {
      setPage(prev => prev + val)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <LandingPage employees={employees} page={page} />
      <div className='buttons-div'>
        <button onClick={() => handleChange(-1)} className='prev-btn'>Previous</button>
        <p className='page-no'>{page}</p>
        <button onClick={() => handleChange(1)} className='next-btn'>Next</button>
      </div>
    </div>
  );
}

export default App;
