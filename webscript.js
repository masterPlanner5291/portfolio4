function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => response.text())
        .then(htmlContent => {
            document.getElementById('content-container').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            document.getElementById('content-container').innerHTML = 'Error loading content.';
        });
}


loadPage('page1.html');