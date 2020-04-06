const copyFunction = (anchor, copyText) => {
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;
    $(anchor).append(textArea);
    textArea.select();
    document.execCommand("copy");
}

const handleCopy = (element) => {
    $(element).find('.clipboardButton').hide();
    copyFunction(element, $(element).find('code').text());
};

$(document).ready(() => {
    $('.boostnote pre').on('click', function () {
        return handleCopy(this);
    });
    $('.boostnote .clipboardButton').on('click', function (event) {
        event.stopPropagation();
        const element = $(this).parent().parent();
        return handleCopy(element);
    });
});
