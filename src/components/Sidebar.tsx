import React from 'react'
import data from './SidebarData'

export default function Sidebar() {
  return (
    <div>
      <div></div>
      {data.map((data) =>(
        <li key={data.id}>{data.title}</li>
      ))}
      <ul>
        
      </ul>
    </div>
  )
}
