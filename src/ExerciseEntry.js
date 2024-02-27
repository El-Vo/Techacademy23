import ActivitiesDropdown from './ActivitiesDropdown'
export default function ExerciseEntry({activity = {activity: 'Aktivität', duration:'00:00:00', comment:''}}) {
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
                    name="exercise comment"
                    rows="1"
                    cols="18"
                defaultValue={activity.comment}>
                </textarea>
            </div>
            <div className='col-2'></div>
        </div>
    );
}