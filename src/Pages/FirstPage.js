import React from 'react'

const FirstPage = () => {
  const logOut = () => {
    localStorage.removeItem('auth')
  }
  return (
    <div>
      first page
      <button onClick={logOut} >LOGOUT</button>
    </div>
  )
}

export default FirstPage
