document.addEventListener('DOMContentLoaded', () => {
    const dogTableBody = document.getElementById('dog-breeds-table-body');
  
    fetch('http://localhost:5000/api/types')  
      .then(response => response.json())
      .then(data => {
        data.forEach(dog => {
          const row = document.createElement('tr');
          
          row.innerHTML = `
            <td>${dog.breed}</td>
            <td>${dog.speed} km/h</td>
            <td>${dog.weight} kg</td>
            <td>${dog.life_span} years</td>
            <td>
              <button class="btn btn-primary view-btn" data-id="${dog.id}">View</button>
            </td>
          `;
          
          dogTableBody.appendChild(row);
        });
        
        const viewButtons = document.querySelectorAll('.view-btn');
        viewButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            const dogId = e.target.getAttribute('data-id');
            window.location.href = `DogTypeView.html?id=${dogId}`;
          });
        });
      })
      .catch(error => {
        console.error('Failed to fetch dog breeds:', error);
        alert('Failed to load dog breeds. Please try again later.');
      });
  });
  