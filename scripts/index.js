let formCapture = document.querySelector(".comments__form");

console.dir(formCapture);

let commentArray = [];
const answer = [];
const commentSlot =  document.querySelector


formCapture.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const comment = e.target.commentField.value;
    // console.log(name);
    // console.log(comment);
    answer.push(name);
    answer.push(comment);
    console.log(answer);
    console.dir(e.target);
    console.log(e.target.timestamp);
    console.log(submitForm(answer));
    const pusher = document.createElement("div");
    pusher.className = "comment"
    pusher.innerHTML = submitForm(answer);
    console.log(pusher);
    const commentSection = document.querySelector(".comments__container");
    commentSection.append(pusher);

})

const submitForm = (array) => {
return `

<div class="comment__image-container">
<img class="comment__image" />
</div>  
<div class="comment__top">
<div class="comment__name-date-cont">
<p class="comment__name">${array[0]}</p>
<time class="comment__date" datetime="2018-12-18">12/18/2018</time>
</div>    
  <p class="comment__content"
  >${array[1]}</p></div>`
}

console.log(submitForm(answer));

console.log(new Date());



// let commentArray = [];

// function handleSubmit(e) {
//     e.preventDefault();
//     let name = e.target.name.value;
//     let comment = e.target.comment-field.value;
//     commentArray.push(name);
// }

// console.log(commentArray);
// console.log(e.target);


