import ActivitiesDropdown from './ActivitiesDropdown';
import CalorieCalculation from './CalorieCalculation';
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function ExerciseEntry({id}) {

    const [showEntry, setShowEntry] = useState(true);
    const [activity, setActivity] = useState({activity: 'Aktivität', duration: '05:45', comment: ''});

    function deleteExistingEntry() {
        const url = 'http://localhost:5000/activities/' + id
        fetch(url, {
            method: "DELETE",
        }).catch(error => console.error('Error:', error))

        setShowEntry(false);
    }

    function updateExercise(exercise) {
        activity.activity = exercise;
        setActivity(activity);
        updateExistingEntryInDb();
        displayEntryValues();
    }

    function updateDuration(event) {
        setActivity(prevActivity => ({
            ...prevActivity,
            duration: event.target.value
        }));
        updateExistingEntryInDb();
        displayEntryValues();
    }

    function updateComment(event) {
        activity.comment = event.target.value;
        setActivity(activity);
        updateExistingEntryInDb();
        displayEntryValues();
    }

    function updateExistingEntryInDb() {
        const url = 'http://localhost:5000/activities/' + id
        fetch(url, {
            method: "UPDATE",
            body: JSON.stringify({
                activity: activity.activity,
                duration: activity.duration,
                comment: activity.comment,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).catch(error => console.error('Error:', error))
    }

    function displayEntryValues() {
        fetch('http://localhost:5000/activities/' + id)
            .then(response => response.json())
            .then(json => setActivity(json))
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        displayEntryValues();
        console.log(activity.duration)
    }, []);

    if (showEntry) {
        return (
            <div className='row spacer'>
                <div className='col-2'></div>
                <div className='col-2 d-flex align-items-center justify-content-center'>
                    <ActivitiesDropdown exercise={activity.activity} update={updateExercise}/>
                </div>
                <div className='col-2 d-flex align-items-center justify-content-center'>
                    <input
                        type="time"
                        id="exerciseDuration"
                        name="Exercise Duration"
                        min="00:00"
                        max="24:00"
                        value={activity.duration}
                        onChange={e => setActivity(prevActivity => ({
                            ...prevActivity, duration: e.target.value
                        }))}
                        onBlur={updateDuration}
                        required/>
                </div>
                <div className='col-2 d-flex align-items-center justify-content-center'>
                    <p>
                        <CalorieCalculation givenDuration={activity.duration} givenExercise={activity.activity}/>
                    </p>
                </div>
                <div className='col-2 d-flex align-items-center justify-content-center'>
            <textarea
                id="exerciseComment"
                name="Exercise Comment"
                rows="2"
                cols="18"
                defaultValue={activity.comment}
                onBlur={updateComment}>
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