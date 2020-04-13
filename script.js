const themeSwitcher = document.getElementById('checkbox');
const themeName = document.querySelector('.header__theme');

themeSwitcher.addEventListener('change', e => {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeName.innerHTML = "Light Mode";
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeName.innerHTML = "Dark Mode";
  }
})