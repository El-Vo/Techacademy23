import {useEffect, useState} from "react";

export default function CalorieCalculation({givenExercise = 'Aktivität', givenDuration = '00:00'}) {
    const [exercise, setExercise] = useState(givenExercise);
    const [duration, setDuration] = useState(givenDuration);


    useEffect(() => {
        setExercise(givenExercise);
    }, [givenExercise]);

    useEffect(() => {
        setDuration(givenDuration);
    }, [givenDuration]);

    function calculateBurntCalories() {
    let calorieFactor;

        switch (exercise) {
            case 'Aktivität':
                calorieFactor = 0;
                break;
            case 'Joggen':
                calorieFactor = 12;
                break;
            case 'Fahrrad fahren':
                calorieFactor = 8;
                break;
            case 'Kraftsport':
                calorieFactor = 4;
                break;
            case 'Breakdance':
                calorieFactor = 7;
                break;
            default:
                calorieFactor = 0;
        }

        const [hours, minutes] = duration.split(':').map(Number);
        const durationInMinutes = hours * 60 + minutes;

        return calorieFactor * durationInMinutes;
    }

    return (calculateBurntCalories()+' kcal');
}
