// ========================================
// FORMULAIRE DE CONTACT - VALIDATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nomInput = document.getElementById('nom');
    const telephoneInput = document.getElementById('telephone');
    const emailInput = document.getElementById('email');
    const objetSelect = document.getElementById('objet');
    const messageTextarea = document.getElementById('message');
    const submitBtn = document.querySelector('.btn-submit');
    const successAlert = document.querySelector('.success-alert');

    // Validation en temps réel
    nomInput.addEventListener('blur', function() {
        validateNom();
    });

    telephoneInput.addEventListener('blur', function() {
        validateTelephone();
    });

    emailInput.addEventListener('blur', function() {
        validateEmail();
    });

    objetSelect.addEventListener('change', function() {
        validateObjet();
    });

    messageTextarea.addEventListener('blur', function() {
        validateMessage();
    });

    // Soumission du formulaire
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validation complète
        const isNomValid = validateNom();
        const isTelephoneValid = validateTelephone();
        const isEmailValid = validateEmail();
        const isObjetValid = validateObjet();
        const isMessageValid = validateMessage();

        if (isNomValid && isTelephoneValid && isEmailValid && isObjetValid && isMessageValid) {
            // Désactiver le bouton pendant l'envoi
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';

            // Simuler l'envoi (ici tu pourrais faire un fetch vers ton backend)
            setTimeout(function() {
                // Afficher le message de succès
                successAlert.classList.add('show');
                
                // Réinitialiser le formulaire
                form.reset();
                removeAllValidationClasses();
                
                // Réactiver le bouton
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';

                // Cacher le message après 5 secondes
                setTimeout(function() {
                    successAlert.classList.remove('show');
                }, 5000);

                // Scroll vers le haut du formulaire
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        }
    });

    // ========================================
    // FONCTIONS DE VALIDATION
    // ========================================

    function validateNom() {
        const nom = nomInput.value.trim();
        const formGroup = nomInput.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');

        if (nom === '') {
            setError(formGroup, errorMessage, 'Le nom est obligatoire');
            return false;
        } else if (nom.length < 2) {
            setError(formGroup, errorMessage, 'Le nom doit contenir au moins 2 caractères');
            return false;
        } else {
            setSuccess(formGroup);
            return true;
        }
    }

    function validateTelephone() {
        const telephone = telephoneInput.value.trim();
        const formGroup = telephoneInput.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        
        // Regex pour numéro français (format souple)
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

        if (telephone === '') {
            setError(formGroup, errorMessage, 'Le téléphone est obligatoire');
            return false;
        } else if (!phoneRegex.test(telephone)) {
            setError(formGroup, errorMessage, 'Numéro de téléphone invalide (ex: 03.81.56.56.56)');
            return false;
        } else {
            setSuccess(formGroup);
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const formGroup = emailInput.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        
        // Regex email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            setError(formGroup, errorMessage, 'L\'email est obligatoire');
            return false;
        } else if (!emailRegex.test(email)) {
            setError(formGroup, errorMessage, 'Email invalide (ex: exemple@email.fr)');
            return false;
        } else {
            setSuccess(formGroup);
            return true;
        }
    }

    function validateObjet() {
        const objet = objetSelect.value;
        const formGroup = objetSelect.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');

        if (objet === '') {
            setError(formGroup, errorMessage, 'Veuillez sélectionner un objet');
            return false;
        } else {
            setSuccess(formGroup);
            return true;
        }
    }

    function validateMessage() {
        const message = messageTextarea.value.trim();
        const formGroup = messageTextarea.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');

        if (message === '') {
            setError(formGroup, errorMessage, 'Le message est obligatoire');
            return false;
        } else if (message.length < 10) {
            setError(formGroup, errorMessage, 'Le message doit contenir au moins 10 caractères');
            return false;
        } else {
            setSuccess(formGroup);
            return true;
        }
    }

    // ========================================
    // FONCTIONS UTILITAIRES
    // ========================================

    function setError(formGroup, errorMessage, message) {
        formGroup.classList.add('error');
        formGroup.classList.remove('success');
        errorMessage.textContent = message;
    }

    function setSuccess(formGroup) {
        formGroup.classList.add('success');
        formGroup.classList.remove('error');
    }

    function removeAllValidationClasses() {
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(function(group) {
            group.classList.remove('error', 'success');
        });
    }
});
