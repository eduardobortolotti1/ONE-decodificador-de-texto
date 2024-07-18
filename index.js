function handleEncryptClick() {
    const input = document.querySelector("#input-text").value.toLowerCase();
    let encrypted_string = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector("#output-text").value = encrypted_string;
    updateOutputArea();
}

function handleDecryptClick() {
    const input = document.querySelector("#input-text").value.toLowerCase();
    let decrypted_string = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.querySelector("#output-text").value = decrypted_string;
    updateOutputArea();
}

async function handleCopyClick() {
    let content = document.querySelector("#output-text").value;
    await navigator.clipboard.writeText(content);
}

function updateOutputArea() {
    if (document.querySelector("#output-text").value) {
        document.querySelector("#output-default").classList.add("d-none");
        document.querySelector("#output-menu").classList.remove("d-none");
    }
    else {
        document.querySelector("#output-menu").classList.add("d-none");
        document.querySelector("#output-default").classList.remove("d-none");
    }
}