
import './App.css'
import Forms from './components/Form'

function App() {
 

  return (
    <>
     <div className='flex'>
                <p>Sample data for testing=</p>
                <p>Email: test@test.com  </p>
                
                <p> Password: test@test1234</p>
            </div>
    <div className='container mx-auto px-6 bg-slate-300 w-96  h-96 rounded-md' >
    <Forms/>
    </div>
  
    </>
  )
}

export default App

