
const editableElements = document.querySelectorAll('.editable');

editableElements.forEach(element => {
    element.addEventListener('click', function() {
        this.setAttribute('contenteditable', true);
    });

    element.addEventListener('blur', function() {
        this.removeAttribute('contenteditable');
    });
});

document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Change the profile image source to the new uploaded image
            document.getElementById('profile-img').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});