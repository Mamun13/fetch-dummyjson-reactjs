import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBounday from './../ErrorBoundary/ErrorBounday';
import Axios from '../Components/axios/Axios';

const PageRoute = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Axios/>}/>
          <Route path="*" element={<ErrorBounday/>} />
        </Routes>
    </>
  )
}

export default PageRoute