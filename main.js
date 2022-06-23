const DOMtypes = {
  'ad': ['.vdQmEd'], // '.fP1Qef', '.EtOod', '.pkphOe'
  'ad2': ['.DUkiH'], // '.cu-container'
  'alsoAsk': ['.AuVD'], // '.cUnQKe
  'locations': ['.D1Lyfe'],
  'news': ['.yG4QQe'], // '.TBC9u'
  'pane': ['.liYKde'], // '.VjDLd'
  'products':['.T98FId'],
  'related': ['.oIk2Cb'],
  'twitter': ['.eejeod'],
  'video': ['.uVMCKf'], // .aNytqb
};

// replace Google logo with old google logo
const logo = document.querySelector('#logo');
const logoImg = logo.firstChild
console.log(logoImg)
logoImg.setAttribute('src', 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/09/01/17/Google_Logo_Old.png?quality=75&width=1368&auto=webp')

for (const key in DOMtypes) {
  for (let i = 0; i < DOMtypes[key].length; i++ ) {
    let curClass = DOMtypes[key][i];
    console.log(curClass)
    const contents = document.querySelector(curClass);
    if (contents !== null) {
      contents.style.transitionDuration = '1000ms';
      contents.style.filter = 'blur(16px)';
      for (const node of contents.childNodes) {
          if (node.style) node.style.pointerEvents = 'none';
      }

      // Getting parent 
      contents.parentNode.addEventListener('dblclick', () => {
        toggleBlur(curClass)
      })
    }
    else {
      console.log('try again');
    }
  };
}

// Run when blurred object is double clicked
function toggleBlur(str) {
  const element = document.querySelector(str);
  if (element !== null) {
    if (element.style.filter === 'none') {
        console.log(element)
        element.style.transitionDuration = '1000ms';
        element.style.filter = 'blur(16px)';
        for (const node of element.childNodes) {
            if (node.style) node.style.pointerEvents = 'none';
        }
    } else {
        console.log(element)
        element.style.transitionDuration = '1000ms';
        element.style.filter = 'none';
        for (const node of element.childNodes) {
        if (node.style) node.style.pointerEvents = 'auto';
        }
    }
  }
}