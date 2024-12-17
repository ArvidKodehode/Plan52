function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'no',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

// Last inn Google Translate
const script = document.createElement('script');
script.type = 'text/javascript';
script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(script);
