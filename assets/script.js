async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      // Realiza la solicitud HTTP a la API
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const posts = await response.json();
  
      // Construye el HTML con los datos de los posts
      const container = document.getElementById('post-data');
      container.innerHTML = ''; // Limpia el contenido previo
      const ul = document.createElement('ul');
      posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    } catch (error) {
      console.error('Error fetching data: ', error);
      document.getElementById('post-data').innerHTML = `<p>Error al cargar los datos: ${error.message}</p>`;
    }
  }
  