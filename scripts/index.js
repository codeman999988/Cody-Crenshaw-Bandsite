let formCapture = document.querySelector(".comments__form");
const date = new Date();
const commentSection = document.querySelector('.comments__container');
let allComments = '';
let commentImage = document.querySelector(".comment__profile-pic");




let commentArray = [
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever",
        commentImage: ""
    },
    {
        name: "Gary Wong",
        date: "12/12/2018",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        commentImage: ""
    },
    {
        name: "Micheal Lyons",
        date: "12/18/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        commentImage: ""
    },
];



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
                <time class="comment__date" datetime="2018-12-18">${commentObject.date}
                </time>
            </div> 
            <p class="comment__content">${commentObject.comment}
            </p>
        </div>
    </div>`;
allComments = allComments + commentHTML;
commentSection.innerHTML = allComments;
return allComments;
}


formCapture.addEventListener('submit', (e) => {
    e.preventDefault();
    let commentImage = document.querySelector(".comment__profile-pic");
    const name = e.target.name.value;
    const commentText = e.target.commentField.value;
    const commentDate = date.toLocaleDateString();
    let backgroundImage = document.querySelector(".profile-pic");
    let answer = ""
    if(backgroundImage.id) {
        answer = backgroundImage.id
    }
    let newCommentObject = {
        name: name,
        date: commentDate,
        comment: commentText,
        commentImage: answer,
    }
    commentArray.push(newCommentObject);
    displayComment(newCommentObject);
    formCapture.reset();
})

commentArray.forEach(displayComment);

