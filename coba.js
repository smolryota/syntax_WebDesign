document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle the clicked accordion
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('active');

        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});
