// JScript File

function closeErrorWindow() {
    window.close();
}

function openErrorWindow(ID) {
    window.open('ErrorHandler.aspx?ID=' + ID, 'ERRORWINDOW', 'alwaysRaised=yes,toolbar=no,width=535,height=350,resizable=yes,scrollbars=yes');
}