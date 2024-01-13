document.addEventListener('DOMContentLoaded', function() {
  let toggle = document.querySelector('.toggle');
  let menu = document.querySelector('.menu');


  /* click menu then toogle class active */
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });


});
