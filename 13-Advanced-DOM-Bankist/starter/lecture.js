//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

console.log('inline: ', message.style.color, message.style.backgroundColor);
console.log('compute: ', getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log('Atts: ', logo.alt, logo.className, logo.getAttribute('customAtt'));
console.log(logo.src, logo.getAttribute('src'));

//Data Attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('one', 'two');
logo.classList.remove();
logo.classList.toggle('one');
logo.classList.contains('two');
