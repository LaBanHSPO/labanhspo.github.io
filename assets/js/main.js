const copyFunction = (copyText) => {
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
}

$(document).ready(() => {
    $('.boostnote pre.code').on('click', function(e) {
        copyFunction(e.target.innerText);
        $(this).find('.clipboardButton').hide();
    });
});
