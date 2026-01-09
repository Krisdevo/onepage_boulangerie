  
        // Script pour le menu burger
        document.addEventListener('DOMContentLoaded', function() {
            const openBtn = document.getElementById('open');
            const closeBtn = document.getElementById('close');
            const burgerNav = document.querySelector('.burger-nav');

            console.log('openBtn:', openBtn);
            console.log('closeBtn:', closeBtn);
            console.log('burgerNav:', burgerNav);

            if (openBtn && closeBtn && burgerNav) {
                openBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Menu ouvert');
                    burgerNav.classList.add('active');
                    openBtn.style.display = 'none';
                    closeBtn.style.display = 'block';
                });

                closeBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Menu fermé');
                    burgerNav.classList.remove('active');
                    closeBtn.style.display = 'none';
                    openBtn.style.display = 'block';
                });

                // Fermer le menu quand on clique sur un lien
                const burgerLinks = document.querySelectorAll('.burger-nav a');
                burgerLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        burgerNav.classList.remove('active');
                        closeBtn.style.display = 'none';
                        openBtn.style.display = 'block';
                    });
                });
            } else {
                console.error('Éléments burger non trouvés !');
            }
        });
