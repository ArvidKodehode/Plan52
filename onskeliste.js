document.addEventListener("DOMContentLoaded", () => {
    // Henter elementer
    const wishlist = document.getElementById("wishlist");
    const wishInput = document.getElementById("wish-input");
    const sendButton = document.getElementById("send-button");
    const printButton = document.getElementById("print-button");
    const maxItems = 20;

    // Funksjon for å legge til et ønske i listen
    function addWish() {
        const wishText = wishInput.value.trim(); // Trim whitespace
        if (!wishText) {
            alert("Du må skrive noe i ønsket før du legger det til!");
            return;
        }
        if (wishlist.children.length >= maxItems) {
            alert("Du kan kun legge til opptil 20 ønsker!");
            return;
        }

        // Legger til ønsket i listen
        const li = document.createElement("li");
        li.textContent = wishText;
        wishlist.appendChild(li);
        wishInput.value = ""; // Tømmer inputfeltet
    }

    // Legger til ønsket når Enter trykkes
    wishInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            addWish();
        }
    });

    // Knapp for å sende ønskelisten til Julenissen
    sendButton.addEventListener("click", () => {
        const wishes = Array.from(wishlist.children).map((li) => li.textContent).join("\n");
        if (!wishes) {
            alert("Ønskelisten din er tom. Legg til noen ønsker først!");
            return;
        }

        const mailto = `mailto:julenissen@nordpolen.no?subject=Ønskeliste&body=${encodeURIComponent(wishes)}`;
        window.location.href = mailto;
    });

    // Knapp for å skrive ut ønskelisten
    printButton.addEventListener("click", () => {
        const wishes = Array.from(wishlist.children).map((li) => li.textContent).join("\n");
        if (!wishes) {
            alert("Ønskelisten din er tom. Legg til noen ønsker først!");
            return;
        }

        const printWindow = window.open("", "", "width=600,height=800");
        printWindow.document.write("<html><head><title>Ønskeliste</title></head><body>");
        printWindow.document.write("<h1>Min Ønskeliste</h1><pre>" + wishes + "</pre>");
        printWindow.document.write("</body></html>");
        printWindow.document.close();
        printWindow.print();
    });
});
