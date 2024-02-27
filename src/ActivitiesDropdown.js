import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
export default function ActivitiesDropdown({exercise = 'Aktivität'}) {
    const [selectedActivity, setSelectedActivity] = useState(exercise);

    return (
        <Dropdown onSelect={(key) => setSelectedActivity(key)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedActivity}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="Joggen">Joggen</Dropdown.Item>
                <Dropdown.Item eventKey="Fahrrad fahren">Fahrrad fahren</Dropdown.Item>
                <Dropdown.Item eventKey="Kraftsport">Kraftsport</Dropdown.Item>
                <Dropdown.Item eventKey="Breakdance">Breakdance</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
