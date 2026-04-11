import React from 'react'
import { useParams } from 'react-router'

const PicturePage = () => {
    const {id} = useParams()
  return (
    <div>PicturePage</div>
  )
}

export default PicturePage