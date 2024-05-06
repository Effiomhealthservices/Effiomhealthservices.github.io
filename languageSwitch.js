function changeLanguage(select) {
    console.log("Changing language to: ", select.value);
    var selectedOption = select.value;
    if (selectedOption === 'en') {
        window.location.href = 'index.html';
    } else if (selectedOption === 'fr') {
        window.location.href = 'index_fr.html';
    }
}
