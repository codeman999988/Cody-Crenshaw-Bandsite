// GLOBAL VARIABLE DECLARATIONS

// {
//     "api_key": "2e1a6531-4e3e-416c-b29c-a2de3c13c26a"
//     }

//Variable formCapture declared to capture form submissions line 64
let formCapture = document.querySelector(".comments__form");


//Variable date declared in order to add accurate Date in comments and and accurate datetime attributes
const date = new Date();
console.log(date);
console.log(Date.now());



//Variable commentSection declared to identify where to insert HTML into page so comments will display line 63
const commentSection = document.querySelector('.comments__container');


//Variable allComments declared to store HTML which will be added to the page.  Comment HTML is added to allComments by invoking the displayComment function on a comment object.  line 66
let allComments = '';






// The comment array is an array of objects that each contain the values that the displayComment function can use to render the comment correctly on the page.
// let commentArray = [
//     {
//         name: "Theodore Duncan",
//         date: "11/15/2018",
//         datetime: "2018-11-15",
//         comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever",
//         commentImage: ""
//     },
//     {
//         name: "Gary Wong",
//         date: "12/12/2018",
//         datetime: "2018-12-12",
//         comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
//         commentImage: ""
//     },
//     {
//         name: "Micheal Lyons",
//         date: "12/18/2018",
//         datetime: "2018-12-18",
//         comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
//         commentImage: ""
//     },
// ];

// displayComment function takes a comment object, formats it into HTML, adds it to the allComments variable, and puts the final HTML containing all comments onto the page

// const displayComment = (commentObject) => {
// let commentHTML = 
//     `<div class="comment">
//         <div class="comment__image-container">
//             <div class="comment__image comment__comment-profile-pic ${commentObject.commentImage}">
//             </div>
//         </div>
//         <div class="comment__container">
//             <div class="comment__name-date-cont">
//                 <p class="comment__name">${commentObject.name}
//                 </p>
//                 <time class="comment__date" datetime="${commentObject.datetime}">${commentObject.date}
//                 </time>
//             </div> 
//             <p class="comment__content">${commentObject.comment}
//             </p>
//         </div>
//     </div>`;
// allComments = allComments + commentHTML;
// commentSection.innerHTML = allComments;
// }

// This event listener listens for comment section submissions, puts the information from the form into a comment Object, pushes the comment object to the comments Array, invokes the displayComment function on the new comment object to modify it into appropriate HTML and add it to allComments
let realComment = {};
let headHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
};

formCapture.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentObj = {
        comment: e.target.commentField.value,
        name: e.target.name.value,
    }
    console.log(commentObj)
    const url = "https://project-1-api.herokuapp.com/comments?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a"
    axios.post(url, commentObj,headHeaders).then(res => {
        letsGo();
    e.target.reset()
    })

})












    //     const commentDate = date.toLocaleDateString();
//     const isoDate = date.toISOString();
//         let newComment = {}
//         newComment.name = name;
//         newComment.comment = comment;
//         newComment.id = "";
//         newComment.timestamp = Date.now();
//         newComment.likes = "";
//         realComment = newComment;
//         console.log(typeof newComment);
//         let newCommentJSON = JSON.stringify(newComment);
//         let pleaseplease = JSON.parse(newCommentJSON)
//         console.log(typeof newCommentJSON);
        
//         console.log(name);
//         console.log(realComment);
//         console.log(headHeaders);
//         const url = "https://project-1-api.herokuapp.com/comments?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a"
//         axios.post(url, newCommentJSON, {headers: {
//             'Content-Type': 'application/json'
//         }}).then((response) => 
//             console.log(response.data)
//         )})

// console.log(realComment);


//     {
//         name: ${name},
//         comment: ${comment},
//         id: ''
//         timestamp: ${Date.now()},
//         likes: 0,
//     }`);
//     formCapture.reset();
//     // commentArrayAxios();
//     // let commentImage = document.querySelector(".comment__profile-pic");

//     // let backgroundImage = document.querySelector(".profile-pic");
//     // let answer = ""

//     // displayComment(newCommentObject);

// })

// // Invokes displayComment on each element of the Comments Array.  This loads the stored comments when the page loads.
// // commentArray.forEach(displayComment);


function letsGo(){axios.get("https://project-1-api.herokuapp.com/comments?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a")
.then(result => {
    let commentsHTML = '';
    for(i = 0; i < result.data.length; i++) {
    let commentHTML = 
    `<div class="comment">
        <div class="comment__image-container">
            <div class="comment__image comment__comment-profile-pic">
            </div>
        </div>
        <div class="comment__container">
            <div class="comment__name-date-cont">
                <p class="comment__name">${result.data[i].name}
                </p>
                <time class="comment__date" datetime="">${result.data[i].timestamp}
                </time>
            </div> 
            <p class="comment__content">${result.data[i].comment}
            </p>
        </div>
    </div>`;
commentsHTML = commentsHTML + commentHTML;
    }
commentSection.innerHTML = commentsHTML;
})}
letsGo()
