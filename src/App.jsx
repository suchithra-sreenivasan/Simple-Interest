import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle , setPrinciple] = useState("")
  const [rate , setRate] = useState("")
  const [year , setYear] = useState("")
  const [interest , setInterest] = useState("")  

  const [isPrinciple , setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsYear ] =useState(true)

  const validate = (e)=>{
    console.log(e.target.name);
    console.log(e.target.value);

    console.log(!!e.target.value.match('^[0-9.]*$'))
    if(!!e.target.value.match('^[0-9.]*$')){
      if(e.target.name == 'Principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      }
      else if(e.target.name == 'Rate'){
        setRate(e.target.value)
        setIsRate(true)
      }
      else{
        setYear(e.target.value)
        setIsYear(true)
      }
    }
    else{
      if(e.target.name == 'Principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(false)
      }
      else if(e.target.name == 'Rate'){
        setRate(e.target.value)
        setIsRate(false)
      }
      else{
        setYear(e.target.value)
        setIsYear(false)
      }
    }
    

  }

  const handleRest = ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  const handleCalculator = () =>{
    setInterest((principle*rate*year)/100)
  }

  return (
    <>

    <div style={{height:'100vh'}} className='bg-dark w-100 d-flex align-items-center justify-content-center'>
      <div style={{width:'500px'}} className='p-5 bg-light rounded'>
        <h1>Simple Interest</h1>
        <p>Calculator your simple interest Easily</p>
        <div className="card bg-danger d-flex align-items-center justify-content-center flex-cloumn" style={{height:'100px'}}>
          <h1>₹{interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <div className='my-3'>
          <TextField id="outlined-basic" name='Principle' value={principle} label="₹Principle Amount" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}} />
            {!isPrinciple && <span className='text-danger'>*Invalid data </span>}
          </div>
          <div className='mb-3'>
          <TextField id="outlined-basic" name='Rate' value={rate} label="Rate of Interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
          {!isRate && <span className='text-danger'>*Invalid data </span>}
          </div>
          <div className='mb-3'>
          <TextField id="outlined-basic" name='Year' value={year} label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>{validate(e)}}/>
          {!isYear && <span className='text-danger'>*Invalid data </span>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
          <Button style={{width:'190px',height:'60px'}} onClick={handleCalculator} variant="contained"  color="error" disabled={ isPrinciple && isRate && isYear ? false : true}>Calculate</Button>
          <Button style={{width:'190px',height:'60px'}} onClick={handleRest} variant="outlined"  color="error">Reset</Button>
          </div>
        
      </div>
    </div>
    </>
  )
}

export default App
