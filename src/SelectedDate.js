import { Button } from 'react-bootstrap';
export default function SelectedDate({displayedDate, showYesterday, showTomorrow}) {

    return(
        <div>
            <div className='row spacer'>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <Button variant="outline-secondary" onClick={showYesterday}>Vorheriger Tag</Button>
                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <h1>{displayedDate}</h1>
                </div>
                <div className='col-4 d-flex align-items-center justify-content-center'>
                    <Button variant="outline-secondary" onClick={showTomorrow}>Nachfolgender Tag</Button>
                </div>
            </div>
        </div>

    );
}