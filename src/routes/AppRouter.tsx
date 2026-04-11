import React from 'react'
import { Route, Router, Routes } from 'react-router'
import Main from '../pages/Main'
import PicturePage from '../pages/PicturePage'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:id' element={<PicturePage />} />

        </Routes>
    </>
  )
}

export default AppRouter