fetch('main.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('main').innerHTML = data;
        });

      // Load the Footer
      fetch('footer.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('footer').innerHTML = data;
        });
