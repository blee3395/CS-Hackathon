document.addEventListener('DOMContentLoaded', function () {

    const nodeList = document.querySelectorAll('.checkbox')

    document.querySelector('#ad').addEventListener('click', function() {
      chrome.tabs.executeScript(null,
            {code: 'toggleBlur('+'".vdQmEd"'+'); toggleBlur('+'".DUkiH"'+'); '});
    })
    document.querySelector('#news').addEventListener('click', function() {
      chrome.tabs.executeScript(null,
            {code: 'toggleBlur('+'".yG4QQe"'+');'});
    })
    document.querySelector('#panes').addEventListener('click', function() {
      chrome.tabs.executeScript(null,
            {code: 'toggleBlur('+'".liYKde"'+');'});
    })
    document.querySelector('#related').addEventListener('click', function() {
      chrome.tabs.executeScript(null,
            {code: 'toggleBlur('+'".oIk2Cb"'+');'});
    })

    document.querySelector('#twitter').addEventListener('click', function() {
          chrome.tabs.executeScript(null,
                {code: 'toggleBlur('+'".eejeod"'+');'});
    })
});