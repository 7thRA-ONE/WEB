const downloadButton = document.getElementById('downloadButton');
const videoUrlInput = document.getElementById('videoUrl');
const resultDiv = document.getElementById('result');

downloadButton.addEventListener('click', () => {
  const videoUrl = videoUrlInput.value;

  if (videoUrl) {
    const { YTDL } = require("ytdl-easy");

    
    // Fetch video information using ytdl-easy
    YTDL(videoUrl)
      .then(res => {
        const videoInfo = res.video;

        // Create HTML to display the generated URLs
        let html = '<h2>Generated Download URLs:</h2>';
        for (const quality in videoInfo) {
          html += `<p><strong>${quality}:</strong> <a href="${videoInfo[quality]}" target="_blank">${videoInfo[quality]}</a></p>`;
        }

        resultDiv.innerHTML = html;
      })
      .catch(error => {
        resultDiv.innerHTML = '<p>An error occurred while fetching video information.</p>';
        console.error(error);
      });
  } else {
    resultDiv.innerHTML = '<p>Please enter a valid YouTube URL.</p>';
  }
});
