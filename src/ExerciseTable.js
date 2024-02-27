import ExerciseEntry from "./ExerciseEntry";
import {Button} from "react-bootstrap";
import {useEffect, useState} from 'react';
export default function ExerciseTable() {
    const [tableEntries, setTableEntries] = useState([]);

   function addNewEntry() {
       let currentDate = new Date().toISOString().slice(0, 10);
       fetch("http://localhost:5000/activities", {
           method: "POST",
           body: JSON.stringify({
               activity:'Aktivität',
               duration:'00:00:00',
               comment:'',
               date:currentDate
           }),
           headers: {
               "Content-type": "application/json; charset=UTF-8"
           }
       });
       displayCurrentEntries();
   }

    function displayCurrentEntries() {
        let entryArray = [];

        //Load existing exercise entries from the database. If none are found, the table remains empty.
        fetch('http://localhost:5000/activities')
            .then(response => response.json())
            .then(activityArray => {
                if (activityArray.length) {
                    for (let activity of activityArray) {
                        console.log(activity);
                        entryArray = [...entryArray,  <ExerciseEntry key={activity.id} activity={activity} setTableEntries={displayCurrentEntries} />];
                    }
                    setTableEntries(entryArray);
                } else {
                    setTableEntries([]);
                }

            })
            .catch(error => console.error('Error:', error));
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
                    <Button variant="secondary" onClick={addNewEntry}>Neuen Eintrag hinzufügen</Button>
                </div>
            </div>
        </div>

    );
}