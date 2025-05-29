function navSwitch(articleNum) {
    const totalArticles = 4; // Update if more articles are added
    const article = parseInt(articleNum);

    // Hide all articles
    for (let i = 1; i <= totalArticles; i++) {
        const el = document.getElementById("article" + i);
        if (el) el.style.display = "none";
    }

    // Show selected article
    const selected = document.getElementById("article" + article);
    if (selected) selected.style.display = "flex";
}