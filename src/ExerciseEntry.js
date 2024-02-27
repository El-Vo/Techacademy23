import ActivitiesDropdown from './ActivitiesDropdown'
import {Button} from "react-bootstrap";
import {useState} from "react";
export default function ExerciseEntry({activity}) {

    const [showEntry, setShowEntry] = useState(true);

    function deleteExistingEntry ()  {
        const url = 'http://localhost:5000/activities/'+activity.id
        fetch(url, {
            method: "DELETE",
        }).catch(error => console.error('Error:', error))

        setShowEntry(false);
    }

    /*
    function updateExistingEntry ()  {
        const url = 'http://localhost:5000/activities/'+activity.id
        fetch(url, {
            method: "UPDATE",
            body: JSON.stringify({
                activity:activity.activity,
                duration:activity.duration,
                comment:activity.comment,
                date:activity.date
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).catch(error => console.error('Error:', error))
    }
    **/

    if(showEntry) {
        return(
            <div className='row spacer'>
            <div className='col-2'></div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <ActivitiesDropdown exercise={activity.activity}/>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <input
                    type="time"
                    id="exerciseDuration"
                    name="Exercise Duration"
                    min="00:00"
                    max="24:00"
                    defaultValue={activity.duration}
                    required/>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <p className='table-entry'>CalorieCalc</p>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
            <textarea
                id="exerciseComment"
                name="Exercise Comment"
                rows="1"
                cols="18"
                defaultValue={activity.comment}>
            </textarea>
            </div>
            <div className='col-1 d-flex align-items-center justify-content-center'>
                <Button variant="outline-danger" onClick={deleteExistingEntry}>Löschen</Button>
            </div>
            <div className='col-1'></div>
        </div>
        )
    }
}