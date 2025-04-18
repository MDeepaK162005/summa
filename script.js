const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('register-link');

 registerlink.addEventListener('Click' , ()=> {
    wrapper.classList.add('active');
 });

 loginlink.addEventListener('Click' ,()=> {
  wrapper.classList.remove('active');
 });
 





