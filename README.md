frontend:

Users can add jobs to the queue by entering the job name and clicking "Add Job".
The job queue and current job status are updated every second via a polling mechanism.
Backend:

The Flask app manages the job queue and simulates job processing.
Jobs are added to the queue via the /add_job endpoint, and the backend processes them one by one using threading.
The current job being processed is available through the /current_job endpoint.
Future Enhancements
Add job prioritization.
Display detailed job status (e.g., estimated time to complete).
Implement other scheduling algorithms (e.g., Round-Robin, FIFO).
Deploy the app to a web server or cloud platform for online access.
License
This project is open-source and available under the MIT License. See the LICENSE file for more details.
