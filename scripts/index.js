// GLOBAL VARIABLE DECLARATIONS

//These variables are used to select elements on the page.  formCapture is used to capture the results of a submitted comment, likeButtons selects the like buttons on comments, deleteButtons selects the delete buttons on comments, and commentSection selects the container that new comments will be displayed in.

//formCapture event listener line 19
let formCapture = document.querySelector(".comments__form");

//likeButtons event listener line 107
let likeButtons = document.getElementsByClassName("comment__like-btn");

//deleteButtons event listener line 112
let deleteButtons =  document.getElementsByClassName("comment__delete-btn");

//commentSection HTML insertion line 104
const commentSection = document.querySelector('.comments__container');


//The following code adds an event listener to the comment form, once the comment form is submitted it uses the captured info to build a comment object and post it to the API.  It then calls the displayComments function in order to display the new comment.
formCapture.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentObj = {
        comment: e.target.commentField.value,
        name: e.target.name.value,
    }
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const url = "https://project-1-api.herokuapp.com/comments?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a"
    axios
    .post(url, commentObj, headers).then(res => {
        displayComments();
    e.target.reset()
    })
})

//The addLike function updates the comment object in the API using axios.put . Once the comment object in the API is updated, it replaces the HTML of the like button from an empty heart to a filled heart, disables the button so you can't like again, and uses the result to update the likes count on the page.  Event listeners for like buttons are added in the displayComments function, as there are no buttons to target until they are displayed on the page.
function addLike(e){
    e.preventDefault();
    axios
    .put(`https://project-1-api.herokuapp.com/comments/${e.target.name}/like?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a`)
    
    .then( (result) => {
    e.target.parentElement.innerHTML = `
    <button type="submit" class="comment__like-btn" name="${result.data.id}">♥
    </button> ${result.data.likes} likes`;
    e.target.disabled = true;})
    
    .catch((error) => {
        console.error(error);
    })
}

//The deleteComment function uses axios.delete to delete the comment from the API and then calls the displayComments function to refresh the comments on the page.
function deleteComment(e){
    e.preventDefault();
    axios
    .delete(`https://project-1-api.herokuapp.com/comments/${e.target.name}?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a`)
    
    .then(() => {
        displayComments();
    })
    
    .catch((error) => {
        console.error(error);
    })
}

//The displayComments function uses a GET request to access the API, and then iterates through the return using values from the result to create the HTML for the comments, and then inserts those comments onto the page. After the comments are loaded on the page, it adds event listeners to the delete and like buttons of the comments.
function displayComments(){axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=2e1a6531-4e3e-416c-b29c-a2de3c13c26a")

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
                    <time class="comment__date" datetime="">${moment(result.data[i].timestamp).fromNow()}
                    </time>
                </div> 
                <p class="comment__content">${result.data[i].comment}
                </p>
                <div class="comment__btn-container">
                    <button type="submit" class="comment__delete-btn" name="${result.data[i].id}">Delete comment
                    </button>
                    <div class='comment__like-btn-cont'>
                        <button type="submit" class="comment__like-btn" name="${result.data[i].id}">♡
                        </button> ${result.data[i].likes} likes
                    </div>
                </div>
            </div>
        </div>`;
commentsHTML = commentsHTML + commentHTML;
    }
commentSection.innerHTML = commentsHTML;
})
.then( function(){
    for(i=0; i < likeButtons.length; i++){
        likeButtons[i].addEventListener('click', addLike);
    }
})
.then( function(){
    for(i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', deleteComment)
    }
})
}

//displayComments function invoked to display comments on page load.
displayComments();
