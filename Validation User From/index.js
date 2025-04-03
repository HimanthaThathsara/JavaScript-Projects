document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = document.getElementById('Submit');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const closeModalButton = document.querySelector('.btn-close');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, select');
        let isValid = true;

        inputs.forEach(input => {
            if (input.type !== 'checkbox' && input.value.trim() === '') {
                isValid = false;
                input.style.backgroundColor = '#ff8f8f3d';
                input.style.borderColor = '#ff8f8f3d';
            } else {
                input.style.border = '1px solid #dde3ec';

                let fName = document.getElementById('firstname').value;
                let LName = document.getElementById('lastname').value;
                let Age = document.getElementById('age').value;
                let BirthDay = document.getElementById('dob').value;
                let Email = document.getElementById('email').value;
                let Address = document.getElementById('address').value;
                let Address2 = document.getElementById('address2').value;
                let AreaCode = document.getElementById('areacode').value;
                let Phone = document.getElementById('phone').value;
                let Zip = document.getElementById('post').value;
                let City = document.getElementById('city').value;
    
    
                SpecialCharacters = [ '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '!', '~', '`', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '\\',  0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
                allChars = [
                    ...Array(26).keys().map(i => String.fromCharCode(i + 97)), // Lowercase letters (a-z)
                    ...Array(26).keys().map(i => String.fromCharCode(i + 65)), // Uppercase letters (A-Z)
                    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "?", "/", "`", "~"
                  ];
    
    
                fName = fName.split("");
                LName = LName.split("");
                Address = Address.split("");
                Address2 = Address2.split("");
                Email = Email.split("");
                AreaCode = AreaCode.split("");
                Phone = Phone.split("");
                Zip = Zip.split("");
                City = City.split("");
    
    
                  data = [fName, LName];
                    data.forEach((item) => {
                        item.forEach((char) => {
                        if (SpecialCharacters.includes(char)) {
                            item.style.backgroundColor = '#ff8f8f3d';
                            item.style.borderColor = '#ff8f8f3d';
                            showModal();
                        }
                        });
                    });
            }
        });



        if (!isValid) {
            showModal();
        } 
        
    });

    function showModal() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    closeModalButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
        }
    });
});
