document.getElementById('scrollButton').addEventListener('click', function() {
  const headerElement = document.getElementById('main-header');
  headerElement.scrollIntoView({ behavior: 'smooth' });
});