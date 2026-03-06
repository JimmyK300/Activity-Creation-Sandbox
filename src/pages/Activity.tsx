import React from 'react'
//using mock data

import { getActivityById } from '../services/ActivityService';

import { useParams } from 'react-router-dom';
const Activity:React.FC = () => {
    const {id}=useParams()
    
    const activity=id? getActivityById(id):undefined
  
    if (!activity) {
        return <h2>Activity not found</h2>
    }

    return (
    <div className="activity-page">
      <div className="activity-card">

        <div className="activity-header">
          <span className="activity-type">
            {activity.type}
          </span>

          <span className="activity-date">
            {activity.createdAt}
          </span>
        </div>
        

        <h1 className="activity-title">
          {activity.title}
        </h1>

        <p className="activity-content">
          {activity.content}
        </p>

      </div>

    </div>
  )
}

export default Activity