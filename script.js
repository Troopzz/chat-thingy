// script.js
document.getElementById('submit').addEventListener('click', function() {
    const commentText = document.getElementById('comment').value;
    if (commentText.trim() !== '') {
        const issueTitle = 'Chat: ' + new Date().toLocaleString();
        const issueBody = commentText;
        fetch('https://api.github.com/repos/your-username/Chatboard/issues', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer YOUR_GITHUB_TOKEN',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: issueTitle,
                body: issueBody
            })
        })
        .then(response => response.json())
        .then(data => {
            // Refresh the conversation or update the page
            // You can also consider displaying a success message.
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
