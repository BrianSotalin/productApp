class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
      <div class="card text-center mb-4">
      <div class="card-body">
<strong>Videojuego:  </strong>: ${product.name}
<strong>Precio:  </strong>: ${product.price}
<strong>Año: </strong>: ${product.year}
<a href="#" class= "btn btn-danger" name="delete">Eliminar</a>
      </div>
      </div>
      `;
        productList.appendChild(element);
      
    }
    resetForm(){
        document.getElementById('product-form').reset(); 
    }
    deleteProduct(element) {
if(element.name === 'delete'){
    element.parentElement.parentElement.parentElement.remove();
}
    }
    showMessage(message, cssclass) {
const div = document.createElement('div');
div.className = `alert alert-${cssclass}`;
div.appendChild(document.createTextNode(message));
//showing DOM- mostrar en pantalla
const container = document.querySelector('.container');
const app = document.querySelector('#app');
container.insertBefore(div,app);
setTimeout(function(){
document.querySelector('.alert').remove();
},2600);
}
    }

//DOM events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const product = new Product(name, price, year);
        const ui = new UI();
        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Producto agregado exitosamente','success');

        e.preventDefault();
    });
document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showMessage('Producto eliminado exitosamente','danger')
});


