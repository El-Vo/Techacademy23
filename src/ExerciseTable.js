import ExerciseEntry from "./ExerciseEntry";
import {Button} from "react-bootstrap";
import { useState } from 'react';
export default function ExerciseTable() {
    const [tableEntries, setTableEntries] = useState([<ExerciseEntry/>]);
   function addNewEntry () {
       setTableEntries(prevComponents => [...prevComponents, <ExerciseEntry key={prevComponents.length} />]);
   }

    return(
        <div>
            <div className='row spacer'>
                <div className='col-2'></div>
                <div className='col-2'>
                    <h2>Aktivität</h2>
                </div>
                <div className='col-2'>
                    <h2>Dauer</h2>
                </div>
                <div className='col-2'>
                    <h2>Verbrannte Kalorien</h2>
                </div>
                <div className='col-2'>
                    <h2>Kommentar</h2>
                </div>
                <div className='col-2'></div>
            </div>
            <hr/>
            {tableEntries}
            <div className='row spacer'>
                <div className='col-12'>
                    <Button variant="secondary" onClick={addNewEntry}>Neuen Eintrag hinzufügen</Button>
                </div>
            </div>
        </div>

    );
}