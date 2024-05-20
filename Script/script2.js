document.getElementById('scrollButton2').addEventListener('click', function() {
  const headerElement = document.getElementById('search-header');
  headerElement.scrollIntoView({ behavior: 'smooth' });
});