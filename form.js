var inputArr = document.querySelectorAll('input');
var btn = document.querySelector('.btn');
var errorIcon = document.querySelectorAll('.error-icon');

btn.addEventListener('click', function(){
  inputArr.forEach(function(input){
    if (input.value) {
      console.log('green');
    } else {
      input.classList.add('error');
      input.nextElementSibling.nextElementSibling.style.display = 'block';
      input.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'block';
      input.nextElementSibling.style.opacity = '0';
    }
  });
});

