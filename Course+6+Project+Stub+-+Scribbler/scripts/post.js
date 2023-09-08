document.addEventListener('DOMContentLoaded', function () {
    const signUpBtn = document.getElementById('signUpBtn');
    const closeSignUpModalBtn = document.getElementById('closeSignUpModalBtn');
    const signUpModal = document.getElementById('signUpModal');
    const exitFromSignUp = document.getElementById('exitFromSignUp');
    signUpBtn.addEventListener('click', function () {
        signUpModal.style.display = "flex";
    });
    closeSignUpModalBtn.addEventListener('click', function () {
        signUpModal.style.display = "none";
    });
    exitFromSignUp.addEventListener('click', function () {
        signUpModal.style.display = "none";
    });
    const signInBtn = document.getElementById('signInBtn');
    const closeSignInModalBtn = document.getElementById('closeSignInModalBtn');
    const signInModal = document.getElementById('signInModal');
    const exitFromSignIn = document.getElementById('exitFromSignIn');
    signInBtn.addEventListener('click', function () {
        signInModal.style.display = "flex";
    });
    closeSignInModalBtn.addEventListener('click', function () {
        signInModal.style.display = "none";
    });
    exitFromSignIn.addEventListener('click', function () {
        signInModal.style.display = "none";
    });
    const switchToSignUpLink = document.getElementById('switchToSignUpLink');
    switchToSignUpLink.addEventListener('click', function (e) {
        e.preventDefault();
        signInModal.style.display = "none";
        signUpModal.style.display = "flex";
    });
    });
    let isEditMode = false;

    function toggleEditMode() {
      isEditMode = !isEditMode;
      
      document.getElementById("post-title").contentEditable = isEditMode;
      document.getElementById("post-description").contentEditable = isEditMode;
      
      const editButton = document.getElementById("edit-button");
      
      if (isEditMode) {
        editButton.innerHTML = `Save <i class="fas fa-save"></i>`;
      } else {
        editButton.innerHTML = `Edit <i class="fas fa-edit"></i>`;
      }
    }
    let likeCount = 0;

function likePost() {
  likeCount++;
  const likeButton = document.getElementById("like-button");
  const likeCountDisplay = document.getElementById("like-count");

  if (likeCount === 1) {
    likeCountDisplay.textContent = "1 person likes this!";
    likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> Liked!`;
  } else {
    likeCountDisplay.textContent = `${likeCount} people like this!`;
  }
}

function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();
  
    if (commentText === "") return;
  
    const commentSection = document.getElementById("all-comments");
    const newComment = document.createElement("div");
  
    newComment.classList.add("comment");
    newComment.textContent = commentText;
  
    // Add the new comment at the top of the comment section
    commentSection.insertBefore(newComment, commentSection.firstChild);
  
    // Clear the comment input box
    commentInput.value = "";
  }