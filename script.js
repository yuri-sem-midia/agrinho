// Botão "Saiba Mais"

const learnMoreBtn = document.getElementById("learnMoreBtn");

learnMoreBtn.addEventListener("click", () => {
    document
        .getElementById("sobre")
        .scrollIntoView({
            behavior: "smooth"
        });
});

// Formulário

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "✅ Mensagem enviada com sucesso! Obrigado pelo contato.";

    form.reset();
});