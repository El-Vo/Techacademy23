import { getCurrentDate } from './activeDate';
import { Button } from 'react-bootstrap';
export default function SelectedDate() {
    return(
        <div>
            <div className='row spacer'>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <Button variant="outline-secondary">Vorheriger Tag</Button>
                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <h1>{getCurrentDate()}</h1>
                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <Button variant="outline-secondary">Nachfolgender Tag</Button>
                </div>
            </div>
        </div>

    );
}