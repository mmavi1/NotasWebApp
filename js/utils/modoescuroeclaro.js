function toggleDark() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'on');
  } else {
    localStorage.setItem('darkMode', 'off');
  }
}

if (localStorage.getItem('darkMode') === 'on') {
  document.body.classList.add('dark');
}
