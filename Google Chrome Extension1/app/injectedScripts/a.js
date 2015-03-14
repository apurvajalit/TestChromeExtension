var popup_root = document.getElementById('popupContainer');
if (popup_root == null) {
    $.get(chrome.extension.getURL("popup.html"), function (data) {
        //$(data).appendTo('body');
        // Or if you're using jQuery 1.8+:
        $($.parseHTML(data)).appendTo('body');
    });
} else {
    document.body.removeChild(popup_root);
}