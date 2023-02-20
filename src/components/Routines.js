import React, {useState} from 'react';


const Routines = (props) => {

    const routines = props.routines

    return(

      <div>
          <h1>

              Routines ({routines.length})

          </h1>

          <hr></hr>
          <ul className='routineList'>
            {routines.map( (routine) => {

                return(
                    <div className="routineDiv" key={routine.id}>
                        <h3>{routine.name}</h3>
                        <p className="space">{routine.goal}</p>
                        <p className="space"> By: {routine.creatorName}</p>
                            {routine.activities.map( (activity) => {

                            return(<div className="actDiv" key={activity.id}>
                                <h4 className="space">{activity.name}</h4>
                                <p className="doubleSpace">{activity.description}</p>
                                <p className="doubleSpace">Count: {activity.count}</p>
                                <p className="doubleSpace">Duration: {activity.duration}</p>
                                </div>
                            )
                        } 
                       )}
                       
                    </div>
                );
            })}

            </ul>  

          </div>
    )
}

export default Routines