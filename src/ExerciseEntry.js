import ActivitiesDropdown from './ActivitiesDropdown'
export default function ExerciseEntry() {
    return(
        <div className='row spacer'>
            <div className='col-2'></div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <ActivitiesDropdown/>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <input
                    type="time"
                    id="exerciseDuration"
                    name="Exercise Duration"
                    min="00:00"
                    max="24:00"
                    required/>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <p className='table-entry'>CalcCalories</p>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center'>
                <textarea id="exerciseComment" name="exercise comment" rows="1" cols="18"></textarea>
            </div>
            <div className='col-2'></div>
        </div>
    );
}