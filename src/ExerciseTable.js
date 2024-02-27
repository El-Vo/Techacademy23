import ExerciseEntry from "./ExerciseEntry";
import {Button} from "react-bootstrap";
import {useEffect, useState} from 'react';
export default function ExerciseTable() {
    const [tableEntries, setTableEntries] = useState([]);

   function addNewEntry() {
       fetch("http://localhost:5000/activities", {
           method: "POST",
           body: JSON.stringify({
               activity:'Aktivität',
               duration:'00:00:00',
               comment:'',
               date:'1970-01-01'
           }),
           headers: {
               "Content-type": "application/json; charset=UTF-8"
           }
       });
       displayCurrentEntries();
   }

    function displayCurrentEntries() {
        let entryArray = [];

        //Load existing exercise entries from the database. If none are found, an empty entry is generated.
        fetch('http://localhost:5000/activities')
            .then(response => response.json())
            .then(activityArray => {
                if (activityArray.length) {
                    for (let activity of activityArray) {
                        console.log(activity);
                        entryArray = [...entryArray,  <ExerciseEntry key={entryArray.length} activity={activity} />];
                    }
                    setTableEntries(entryArray);
                } else {
                    setTableEntries([]);
                }

            })
            .catch(error => console.error('Error:', error));
   }

   function deleteExistingEntry() {
       setTableEntries(<ExerciseEntry/>);
   }

    useEffect(() => {
        displayCurrentEntries();
    }, []);


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
                    <Button variant="secondary" onClick={deleteExistingEntry}>Neuen Eintrag hinzufügen</Button>
                </div>
            </div>
        </div>

    );
}