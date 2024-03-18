document.addEventListener("DOMContentLoaded", function () {
    

    const item_login = document.getElementById("item-login");
    const login_modal = document.getElementById("login_modal");
    const nuevaEntrada_modal = document.getElementById("nuevaEntrada_modal");
    const btnCancelarNuevaEntrada = document.getElementById("btnCancelarNuevaEntrada")
    const btnAccederLogin = document.getElementById("btnAccederLogin")

    const btnCancelarLogin = document.getElementById("btnCancelarLogin")
    const itemLogin = document.getElementById("item-login") 
    const nuevaEntrada = document.getElementById("nueva-entrada");
    const contenedor = document.getElementById("contenedor")


    
    
    item_login.addEventListener('click', () => {
        login_modal.showModal();
    })
    btnAccederLogin.addEventListener('click', () => {
        login_modal.close();
        itemLogin.textContent = "Logout";
        itemLogin.style.color = "white";
        nuevaEntrada.style.display = "block"
    })
    btnCancelarLogin.addEventListener('click', () => {
        login_modal.close();
    })
    nuevaEntrada.addEventListener('click', () => {
        nuevaEntrada_modal.showModal();
    })
    btnCancelarNuevaEntrada.addEventListener('click', () => {
        nuevaEntrada_modal.close();
    })
  
});
  
async function loadData() {
    console.log("cargado datos")
    const response = await fetch('data.json');
    const datos = await response.json();
   
    datos.forEach(entrada_item => {
        console.log(entrada_item)
        let entrada = document.createElement('div');
        entrada.classList.add("entrada");
        let blog_imagen = document.createElement('div');
        blog_imagen.classList.add("blog-imagen");
        let img = document.createElement('img');
        img.src = entrada_item.imagen;
        blog_imagen.appendChild(img)
        entrada.appendChild(blog_imagen)
        let blog_contenido = document.createElement('div');
        blog_contenido.classList.add("blog-contenido");
        let h3 = document.createElement('h3');
        h3.textContent = entrada_item.titulo;
        let span = document.createElement('span');
        span.textContent = entrada_item.descripcion;
        let br = document.createElement('br');
     
        let a = document.createElement('a');
        a.href = entrada_item.enlace;
        a.textContent = "Leer..."
        blog_contenido.appendChild(h3);
        blog_contenido.appendChild(span);
        blog_contenido.appendChild(br);
        blog_contenido.appendChild(br);
        blog_contenido.appendChild(a);
        entrada.appendChild(blog_contenido)
        contenedor.appendChild(entrada)
   
    });
  }
  

loadData();
