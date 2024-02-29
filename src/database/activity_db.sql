CREATE TABLE activities (
    ID SERIAL PRIMARY KEY,
    Activity VARCHAR(255),
    Duration TIME,
    Comment TEXT,
    Date DATE
);

INSERT INTO activities (Activity, Duration, Comment, Date) VALUES
    ('Joggen', '01:00:00', 'Laufen im Park', '2024-02-14'),
    ('Fahrrad fahren', '01:30:00', 'Fahrt zum See', '2024-02-15'),
    ('Kraftsport', '00:45:00', 'Intensives Training im Fitnessstudio', '2024-02-16'),
    ('Breakdance', '00:30:00', 'Üben von neuen Moves', '2024-02-17'),
    ('Joggen', '01:15:00', 'Laufen im Wald', '2024-02-18'),
    ('Fahrrad fahren', '02:00:00', 'Lange Fahrt durch die Stadt', '2024-02-19'),
    ('Kraftsport', '00:50:00', 'Beintraining im Fitnessstudio', '2024-02-20'),
    ('Breakdance', '00:40:00', 'Training für die nächste Performance', '2024-02-21'),
    ('Joggen', '01:20:00', 'Intervalltraining auf der Laufbahn', '2024-02-22'),
    ('Fahrrad fahren', '01:45:00', 'Fahrt in den Bergen', '2024-02-23'),
    ('Kraftsport', '00:55:00', 'Oberkörpertraining im Fitnessstudio', '2024-02-24'),
    ('Breakdance', '00:35:00', 'Üben von Powermoves', '2024-02-25'),
    ('Joggen', '01:10:00', 'Laufen am Strand', '2024-02-26'),
    ('Fahrrad fahren', '02:15:00', 'Fahrt entlang des Flusses', '2024-02-27'),
    ('Kraftsport', '01:00:00', 'Ganzkörpertraining im Fitnessstudio', '2024-02-28'),
    ('Breakdance', '00:45:00', 'Training mit der Crew', '2024-02-29');

