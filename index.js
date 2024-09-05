document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputText");
    const button = document.getElementById("buttonText");
    button.addEventListener("click", () => {
        const data = inputText.value;
        localStorage.setItem("storedData", data);
        inputText.value = "";

        console.log("el dato enviado es: " + data)
    });
});