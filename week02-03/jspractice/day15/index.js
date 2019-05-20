
// let block= false;

// const hoverImage = () => {
//     const imagePadlock = document.querySelector('.padlock');
//     const text = document.querySelector('.text').innerHTML;
//     if (imagePadlock.onmouseenter = function () {
      

//     }
    
// };

const reveal = (show) => {
    let message = document.querySelector('#message');
    if(show) {
      message.classList.remove('hidden');
    } else {
      message.classList.add('hidden');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    let padlock = document.querySelector('#padlock');
    padlock.addEventListener('mouseenter', () => reveal(true));
    padlock.addEventListener('mouseleave', () => reveal(false));
  });

