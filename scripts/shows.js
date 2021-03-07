//  No global variables

//  The showsArray is an array of objects that is used to populate the shows table.  It is used as an argument in the displayShowTable function to populate the shows table line 45.  The addShow function can be used to add new show Objects to this array, and therefore more easily update the shows table with new shows line 81.
const showsArray = [
    {
        showDate: "Mon Dec 17 2018",
        showVenue: "Ronald Lane",
        showCity: "San Fransisco, CA"
    },
    
    {
        showDate: "Tue Jul 18 2019",
        showVenue: "Pier 3 East",
        showCity: "San Fransisco, CA"
    },
    
    {
        showDate: "Fri Jul 22 2019",
        showVenue: "View Loungue",
        showCity: "San Fransisco, CA"
    },
    
    {
        showDate: "Sat Aug 12 2019",
        showVenue: "Hyatt Agency",
        showCity: "San Fransisco, CA"
    },
    
    {
        showDate: "Fri Sep 05 2019",
        showVenue: "Moscow Center",
        showCity: "San Fransisco, CA"
    },
    
    {
        showDate: "Wed Aug 11 2019",
        showVenue: "Pres Club",
        showCity: "San Fransisco, CA"
    },
]


//  displayShowTable takes an array as an argument (specifically the array of show objects).  It takes uses the values of the different objects, formats them into HTML that can be inserted into the table of shows, concatenates them all and inserts them into the page.

function displayShowTable(arr) {
    let showTableHTML = '';
    arr.forEach((show) => {
        let showTableRow = `
        <tr class="show__details">
            <td class="show__header--mobile">DATE
            </td>
            <td class="show__date">${show.showDate}
            </td>
            <td class="show__header--mobile">VENUE</td>
            <td class="show__label">${show.showVenue}
            </td>
            <td class="show__header--mobile">LOCATION
            </td>
            <td class="show__label">${show.showCity}
            </td>
            <td class="show__label align-right">
                <button class="show__button">BUY TICKETS
                </button>
            </td>
        </tr>`;
    showTableHTML = showTableHTML + showTableRow
    })
    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = showTableHTML;
}

//  Calling the displayShowTable function in order to populate the shows table with shows on page load.
displayShowTable(showsArray);


//  Constructor function used in addShow to add new show objects to the showsArray.
function Show(date, venue, city){
    this.showDate = date;
    this.showVenue = venue;
    this.showCity = city;
}


//  addShow function takes a date, venue and city as a parameter.  It then uses the Show constructor to use those values and create a new show Object, that it then pushes to the shows array.  Finally, it calls the displayShowTable on the updated showsArray to add the show to the page.  Simply invoke addShow with the appropriate parameters to add a new show to the table.
function addShow(date, venue, city){
    showsArray.push(new Show(date, venue, city));
    displayShowTable(showsArray);
}



