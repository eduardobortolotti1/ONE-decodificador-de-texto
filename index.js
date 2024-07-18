const decryptionKeys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function handleEncryptClick() {
    const input = document.querySelector("#input-text").value.toLowerCase();
    var input_clean_array = input.split("");
    var encrypted_string = input_clean_array;

    input_clean_array.forEach((value, index) => {
        for ([key, encrypted_word] of Object.entries(decryptionKeys)) {
            if (value === key) {
                encrypted_string[index] = encrypted_word
            }
        }
    })
    encrypted_string = encrypted_string.join("");
    document.querySelector("#output-text").value = encrypted_string;
    updateOutputArea();
}

function handleDecryptClick() {
    const input = document.querySelector("#input-text").value.toLowerCase();
    var decrypted_string = input;
    var search_result_index;
    var match_found = true

    while (match_found === true) {
        match_found = false;

        for ([key, encrypted_word] of Object.entries(decryptionKeys)) {
            search_result_index = decrypted_string.search(encrypted_word);
            if (search_result_index != -1) {
                decrypted_string = decrypted_string.slice(0, search_result_index) + key + decrypted_string.slice(search_result_index + encrypted_word.length);
                match_found = true;
            }
        }
    }

    document.querySelector("#output-text").value = decrypted_string;
    updateOutputArea();
}

async function handleCopyClick() {
    var content = document.querySelector("#output-text").value;
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