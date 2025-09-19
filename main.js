document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('continueBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      // Redireciona para 1.html
      window.location.href = '1.html';
    });
  }
});
