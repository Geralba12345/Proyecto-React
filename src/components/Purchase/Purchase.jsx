import React from 'react'

const Purchase = (orders) => {
  return (
    <div>
        <h2>{orders?.buyer?.name}</h2>
        <h2>{orders?.buyer?.email}</h2>
        <h2>{orders?.buyer?.phone}</h2>
        <h2>{orders?.buyer?.date}</h2>
    </div>
  )
}

export default Purchase