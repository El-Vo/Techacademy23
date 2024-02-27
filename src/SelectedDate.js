import { getCurrentDate } from './activeDate';
import { Button } from 'react-bootstrap';
export default function SelectedDate() {
    return(
        <div>
            <div className='row spacer'>
                <div className='col-4'>
                    <Button variant="secondary">Vorheriger Tag</Button>
                </div>
                <div className='col-4 text-center'>
                    <h1>{getCurrentDate()}</h1>
                </div>
                <div className='col-4 text-right'>
                    <Button variant="secondary">Nachfolgender Tag</Button>
                </div>
            </div>
        </div>

    );
}