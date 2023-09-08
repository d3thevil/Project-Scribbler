document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("deleteModal");
    const closeButton = document.querySelector(".close-button");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    let currentPost;
    document.querySelectorAll(".delete-icon").forEach(function(delete_icon) {
      delete_icon.addEventListener("click", function(event) {
        currentPost = event.target.closest(".post");
        modal.style.display = "block";
      });
    });
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
    yesButton.addEventListener("click", function() {
      currentPost.remove();
      modal.style.display = "none";
    });
    noButton.addEventListener("click", function() {
      modal.style.display = "none";
    });


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
    let postData = [
      {
        id: 1,
        title: "Post Title 1",
        description: "Post Description 1",
      },
      // ... other posts
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');


    const post = postData.find(p => p.id == postId);
    
    if (post) {
    console.log("Populating post data...");
    document.querySelector('.post-title').textContent = post.title;
    document.querySelector('.post-desc').textContent = post.description;
  } else {
    console.log("Post data could not be found.");
  }
    
  });

  let postData = [
    {
      id: 1,
      title: "Srishti Gupta",
      description: "Post Description 1"
    },
  ];
  
  function redirectToPostDetails(element) {
    window.location.href ='/Users/abhishekkumar/Desktop/Course+6+Project+Stub+-+Scribbler/html/post.html';

  }