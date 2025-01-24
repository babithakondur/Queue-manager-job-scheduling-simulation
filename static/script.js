const queueList = document.getElementById('queue-list');
const currentJobName = document.getElementById('current-job-name');
const jobNameInput = document.getElementById('job-name');

// Add job to queue
document.getElementById('add-job').addEventListener('click', () => {
    const jobName = jobNameInput.value.trim();
    if (jobName) {
        const listItem = document.createElement('li');
        listItem.textContent = jobName;
        queueList.appendChild(listItem);
        jobNameInput.value = '';
    }
});

// Process the next job
document.getElementById('process-job').addEventListener('click', () => {
    if (queueList.firstChild) {
        currentJobName.textContent = queueList.firstChild.textContent;
        queueList.removeChild(queueList.firstChild);
    } else {
        currentJobName.textContent = 'None';
        alert('No jobs in the queue.');
    }
});
