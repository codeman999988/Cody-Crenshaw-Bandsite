// GLOBAL VARIABLE DECLARATIONS

// {
//     "api_key": "2e1a6531-4e3e-416c-b29c-a2de3c13c26a"
//     }

//Variable formCapture declared to capture form submissions line 64
let formCapture = document.querySelector(".comments__form");


//Variable date declared in order to add accurate Date in comments and and accurate datetime attributes
const date = new Date();



//Variable commentSection declared to identify where to insert HTML into page so comments will display line 63
const commentSection = document.querySelector('.comments__container');


//Variable allComments declared to store HTML which will be added to the page.  Comment HTML is added to allComments by invoking the displayComment function on a comment object.  line 66
let allComments = '';




// The comment array is an array of objects that each contain the values that the displayComment function can use to render the comment correctly on the page.
let commentArray = [
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        datetime: "2018-11-15",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever",
        commentImage: ""
    },
    {
        name: "Gary Wong",
        date: "12/12/2018",
        datetime: "2018-12-12",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        commentImage: ""
    },
    {
        name: "Micheal Lyons",
        date: "12/18/2018",
        datetime: "2018-12-18",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        commentImage: ""
    },
];

// displayComment function takes a comment object, formats it into HTML, adds it to the allComments variable, and puts the final HTML containing all comments onto the page

const displayComment = (commentObject) => {
let commentHTML = 
    `<div class="comment">
        <div class="comment__image-container">
            <div class="comment__image comment__comment-profile-pic ${commentObject.commentImage}">
            </div>
        </div>
        <div class="comment__container">
            <div class="comment__name-date-cont">
                <p class="comment__name">${commentObject.name}
                </p>
                <time class="comment__date" datetime="${commentObject.datetime}">${commentObject.date}
                </time>
            </div> 
            <p class="comment__content">${commentObject.comment}
            </p>
        </div>
    </div>`;
allComments = allComments + commentHTML;
commentSection.innerHTML = allComments;
}

// This event listener listens for comment section submissions, puts the information from the form into a comment Object, pushes the comment object to the comments Array, invokes the displayComment function on the new comment object to modify it into appropriate HTML and add it to allComments

formCapture.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentImage = document.querySelector(".comment__profile-pic");
    const name = e.target.name.value;
    const commentText = e.target.commentField.value;
    const commentDate = date.toLocaleDateString();
    const isoDate = date.toISOString();
    let backgroundImage = document.querySelector(".profile-pic");
    let answer = ""
    console.log(isoDate);
    if(backgroundImage.id) {
        answer = backgroundImage.id;
    }
    let newCommentObject = {
        name: name,
        date: commentDate,
        datetime: isoDate,
        comment: commentText,
        commentImage: answer,
    }
    commentArray.push(newCommentObject);
    displayComment(newCommentObject);
    formCapture.reset();
})

// Invokes displayComment on each element of the Comments Array.  This loads the stored comments when the page loads.
commentArray.forEach(displayComment);



