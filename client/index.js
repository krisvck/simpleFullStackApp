
//Load the table and pass an empty array
document.addEventListener('DOMContentLoaded', function() {
    loadHTMLTable([]);

});

//This function shows that there is no data in the table if there is no data
function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no data' colspan = '5'>No Data</td></tr>";

    }
}