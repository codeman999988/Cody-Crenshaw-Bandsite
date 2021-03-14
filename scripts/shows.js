//  No global variables

//The displayShows function uses an axios GET request to obtain the shows data, iterates through the data interpolating it into HTML, concatenates the HTML together and inserts the result of the contatenation onto the page.
function displayShows(){ 
axios
.get("https://project-1-api.herokuapp.com/showdates?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a")

.then(result => {
    let showTableHTML = '';
    for(i = 0; i < result.data.length; i++) {
        let showTableRow = `
        <tr class="show__details">
            <td class="show__header--mobile">DATE
            </td>
            <td class="show__date">${result.data[i].date}
            </td>
            <td class="show__header--mobile">VENUE</td>
            <td class="show__label">${result.data[i].place}
            </td>
            <td class="show__header--mobile">LOCATION
            </td>
            <td class="show__label">${result.data[i].location}
            </td>
            <td class="show__label align-right">
                <button class="show__button">BUY TICKETS
                </button>
            </td>
        </tr>`;
    showTableHTML = showTableHTML + showTableRow;
}
const tbody = document.querySelector('.tbody');
tbody.innerHTML = showTableHTML;
})};

displayShows();



