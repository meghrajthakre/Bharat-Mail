import ComposePage from './Components/ComposePage';
import Header from './Components/Header';
import MiddleMain from './MiddleMain';
import React from 'react'

const App = () => {


  return (
    <div className='w-screen h-screen'>
      <Header />
      <MiddleMain />
      <ComposePage />

    </div>
  )
}

export default App
