const copyFunction = (anchor, copyText) => {
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    $(anchor).append(textArea);
    textArea.select();
    document.execCommand("copy");
}

$(document).ready(() => {
    $('.boostnote pre.code').on('click', function(e) {
        copyFunction(this, e.target.innerText);
        $(this).find('.clipboardButton').hide();
    });
});
