console.log("hi0");

// const show = [
//     {

//     }
// ]

{/* <tr class="show__details">
<td class="show__date">Mon Dev 17 2018</td>
<td class="show__label">Ronald Lane</td>
<td class="show__label">San Fransisco, CA</td>
<td class="show__label align-right"><button class="show__button">BUY TICKETS</button></td>
</tr> */}

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

// function displayShowTable(arr) {
//     let showTableHTML = '';
//     arr.forEach((show) => {
//         let showTableRow = `<tr class="show__details">
//         <td class="show__date">${show.showDate}</td>
//         <td class="show__label">${show.showVenue}</td>
//         <td class="show__label">${show.showCity}</td>
//         <td class="show__label align-right"><button class="show__button">BUY TICKETS</button></td>
//     </tr>`;
//     showTableHTML = showTableHTML + showTableRow
//     })
//     // console.log(showTableHTML);
//     const tbody = document.querySelector('.tbody');
//     tbody.innerHTML = showTableHTML;
//     console.log(tbody);
// }

// displayShowTable(showsArray);