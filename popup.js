document.addEventListener('DOMContentLoaded', function () {

    const nodeList = document.querySelectorAll('.checkbox')

    document.querySelector('#ad').addEventListener('click', function() {
      chrome.tabs.executeScript(null,
            {code: 'toggleBlur('+'".vdQmEd"'+');'});
    })
    document.querySelector('#panes').addEventListener('click', function() {
      chrome.tabs.executeScript(null,
            {code: 'toggleBlur('+'".liYKde"'+');'});
    })

    document.querySelector('#twitter').addEventListener('click', function() {
          chrome.tabs.executeScript(null,
                {code: 'toggleBlur('+'".eejeod"'+');'});
    })
});