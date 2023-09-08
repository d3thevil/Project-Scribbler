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
    const createPostBtn = document.getElementById('createPostBtn');
    const closeCreatePostModalBtn = document.getElementById('closeCreatePostModalBtn');
    const createPostModal = document.getElementById('createPostModal');
    createPostBtn.addEventListener('click', function () {
        createPostModal.style.display = "flex";
    });
    closeCreatePostModalBtn.addEventListener('click', function () {
        createPostModal.style.display = "none";
    });
    const exitFromCreatePost = document.getElementById('exitFromCreatePost');

    exitFromCreatePost.addEventListener('click', function () {
        createPostModal.style.display = "none";
    });
});