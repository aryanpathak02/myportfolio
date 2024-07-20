  // script foe navbar section 
  let hamburgur_btn = document.querySelector("#hamburgur_btn");
  let list = document.querySelector("#list");

  hamburgur_btn.addEventListener("click", () => {
      list.classList.toggle("hidden");
  })

  let lists = document.querySelectorAll(".list");

  lists.forEach((el) => {
      el.addEventListener("click", () => {
          list.classList.toggle("hidden");
      });
  });
 
  // script for form submission 
  document.getElementById('myForm').addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      const feedback = document.getElementById('feedback');
      feedback.classList.remove("hidden");

      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          comment: document.getElementById('comment').value
      };

      try {
          const response = await fetch('https://emaildispatcher-d3fb.onrender.com/send-email', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });

          if (response.ok) {
              const jsonResponse = await response.json();
              alert('Data sent successfully!');
              document.getElementById('myForm').reset();
              feedback.classList.add("hidden");
          } else {
              alert(`some error occurse ${response.statusText}`);

              feedback.classList.add("hidden");
          }
      } catch (error) {
          alert(`catch default ${error.message}`);

          feedback.classList.add("hidden");

      }
  });


