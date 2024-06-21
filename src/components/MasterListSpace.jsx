import React from 'react'
import TodaysList from './todaysList'
import WeekendsList from './weekendsList'
import "../styles/masterlist.css"

export default function MasterListSpace(props) {

  return (
    <div className="masterlist-container">
      <TodaysList {...props}/>
      <WeekendsList {...props}/>
    </div>
  )
}
