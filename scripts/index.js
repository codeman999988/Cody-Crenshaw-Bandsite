let formCapture = document.querySelector(".comments__form");
const date = new Date();
// console.dir(formCapture);



let commentArray = [
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever"
    },
    {
        name: "Gary Wong",
        date: "12/12/2018",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        name: "Micheal Lyons",
        date: "12/18/2018",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    },
];

// function displayComments(arr) {
//     let commentsAll = '';
//     arr.forEach((comment) => {
//         let comments = `<div class="comment__image-container">
//         <div class="comment__image comment__profile-pic"></div>
//         </div> 
//         <div class="comment__top">
//         <div class="comment__name-date-cont">
//         <p class="comment__name">${comment.name}</p>
//         <time class="comment__date" datetime="2018-12-18">${comment.date}</time>
//         </div>    
//           <p class="comment__content"
//           >${comment.comment}</p></div>`;
//           commentsAll = commentsAll + comments;
//     })
// }

const commentSection = document.querySelector('.comments__container');
// const answer = [];
let allComments = '';
const displayComment = (commentObject) =>{

    let commentHTML = `<div class="comment"><div class="comment__image-container">
    <div class="comment__image comment__profile-pic"></div>
    </div> 
    <div class="comment__top">
    <div class="comment__name-date-cont">
    <p class="comment__name">${commentObject.name}</p>
    <time class="comment__date" datetime="2018-12-18">${commentObject.date}</time>
    </div>   
    <p class="comment__content"
    >${commentObject.comment}</p></div></div>`;
    allComments = allComments + commentHTML;
    // commentArray.push(commentObject);
    commentSection.innerHTML = allComments;
    return allComments;
}




// const date = new Date();
formCapture.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const commentText = e.target.commentField.value;
    const commentDate = date.toLocaleDateString();
    let newCommentObject = {
        name: name,
        date: commentDate,
        comment: commentText,
    }
    commentArray.push(newCommentObject);
    displayComment(newCommentObject);
    console.log(commentArray);
    formCapture.reset();
})

commentArray.forEach(displayComment);



// console.log(displayComment(commentArray[0]));



// const submitForm = (array) => {
// return `
// <div class="comment__image-container">
// <div class="comment__image comment__profile-pic"></div>
// </div> 
// <div class="comment__top">
// <div class="comment__name-date-cont">
// <p class="comment__name">${array[0]}</p>
// <time class="comment__date" datetime="${date.toISOString()}">${date.toLocaleDateString()}</time>
// </div>    
//   <p class="comment__content"
//   >${array[1]}</p></div>`
// }

// console.log(submitForm(answer));





// let commentArray = [];

// function handleSubmit(e) {
//     e.preventDefault();
//     let name = e.target.name.value;
//     let comment = e.target.comment-field.value;
//     commentArray.push(name);
// }

// console.log(commentArray);
// console.log(e.target);


