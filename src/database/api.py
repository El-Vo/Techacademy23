from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import psycopg2
import psycopg2.extras
from datetime import datetime, time

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Establish a connection to the PostgreSQL database
conn = psycopg2.connect(
    host="localhost",
    port=5432,
    database="postgres",
    user="postgres",
    password="root"
)

##### GET
@app.route('/activities/<int:id>', methods=['GET'])
@cross_origin()
def get_activity_by_id(id):
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("SELECT * FROM activities WHERE ID = %s", (id,))
    activity = cur.fetchone()
    cur.close()
    if activity is not None:
        activity['duration'] = activity['duration'].strftime('%H:%M:%S')
        return jsonify(dict(activity))
    else:
        return jsonify({"error": "Activity not found"}), 404

@app.route('/activities/<string:date>', methods=['GET'])
@cross_origin()
def get_activity_by_date(date):

    date_obj = datetime.strptime(date, '%Y-%m-%d').date()

    try:
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute("SELECT * FROM activities WHERE date = %s", (date_obj,))
        activities = cur.fetchall()
        cur.close()
        for activity in activities:
            if isinstance(activity['duration'], time):
                activity['duration'] = activity['duration'].strftime('%H:%M:%S')
        return jsonify([dict(activity) for activity in activities])

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error retrieving data from PostgreSQL:", error)

    return jsonify([])

@app.route('/activities', methods=['GET'])
@cross_origin()
def get_activities():
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

        # Execute the SELECT query
        cur.execute("SELECT * FROM activities")

        # Fetch all rows from the result set
        activities = cur.fetchall()

        # Close the cursor
        cur.close()

        # Return the rows as a JSON response
        for activity in activities:
            activity['duration'] = str(activity['duration'])

        return jsonify([dict(activity) for activity in activities])

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error retrieving data from PostgreSQL:", error)

    return jsonify([])

###### POST
@app.route('/activities', methods=['POST'])
@cross_origin()
def add_message():
    try:
        # Get the JSON data from the request body
        data = request.get_json()
        print("DATA", data)

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the INSERT query
        cur.execute("INSERT INTO activities (activity, duration, comment, date) VALUES (%s, %s, %s, %s)",
                    (data['activity'], data['duration'], data['comment'], data['date']))

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({'message': 'Activity added successfully'})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error adding activity to PostgreSQL:", error)

    # Return an error response
    return jsonify({'message': 'Failed to add activity'})

##### DELETE
@app.route('/activities/<int:id>', methods=['DELETE'])
@cross_origin()
def delete_activity_by_id(id):
    cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("DELETE FROM activities WHERE ID = %s", (id,))
    conn.commit()
    return jsonify({'status': 'success', 'message': 'Activity deleted'}), 200

##### UPDATE
@app.route('/activities/<int:id>', methods=['UPDATE'])
@cross_origin()
def update_activity(id):
    try:
        # Get the JSON data from the request body
        data = request.get_json()
        print("DATA", data)

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the UPDATE query
        cur.execute("UPDATE activities SET activity = %s, duration = %s, comment = %s, date = %s WHERE id = %s",
                    (data['activity'], data['duration'], data['comment'], data['date'], id))

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({'message': 'Message updated successfully'})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error updating to PostgreSQL:", error)

    # Return an error response
    return jsonify({'message': 'Failed to add message'})

if __name__ == '__main__':
    app.run(port=5000)
    conn.close()
