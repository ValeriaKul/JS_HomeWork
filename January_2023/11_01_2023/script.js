const root = document.querySelector('.root');
const form_txt = document.querySelector('.form_txt')
const input_id = document.querySelector('.input_id');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');

form_txt.innerText = 'Products search form by ID:';
btn.innerText = 'Go!';


function createPost (dttm, title, price, description, image) {
    const container = document.createElement('div');
    const descr = document.createElement('div');
    const p_tille = document.createElement('p');
    const p_price = document.createElement('p');
    const p_desc = document.createElement('p');
    const img = document.createElement('img');
    const delete_btn = document.createElement('button');
    
    p_tille.innerText = `Product: ${title}`;
    p_price.innerText = `Price: ${price} $`;
    p_desc.innerText = `About the product: ${description}`;
    delete_btn.innerText = 'Delete';
    img.src = image;
    
    container.setAttribute("id", dttm);
    container.classList.add('product');
    descr.classList.add('description');
    p_tille.classList.add('post_title');
    p_price.classList.add('post_price');
    p_desc.classList.add('post_desc');
    img.classList.add('img');
    delete_btn.classList.add('delete_btn')
    
    descr.append(p_tille, p_price, p_desc)
    container.append(descr, img, delete_btn);
    root.append(container);

    delete_btn.addEventListener("click", deleteProduct)
}

const showProducts = () => {
    const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
    if (products.length > 0) {
        products.forEach(({dttm, title, price, description, image}) => 
        createPost (dttm, title, price, description, image));
    }
};

const addProduct = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    if (id <= 0 || id >= 21) {
        alert("wrong ID");
    } else {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(resp => resp.json())
        .then(({title, price, description, image}) => {
            const dttm = new Date().getTime().toString();
            createPost (dttm, title, price, description, image)
            addToLocalStorage(dttm, title, price, description, image)})
        }
        
        e.target.id.value = '';
    };

    const deleteProduct = (e) => {
        const productElement = e.target.parentElement;
        const id = productElement.id;
        removeFromLocalStorage(id);
        
    };

    const getLocalStorage = () => {
        return localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : [];
    }
    
    const addToLocalStorage = (dttm, title, price, description, image) => {
        
        const products = getLocalStorage();
        const newProduct = { dttm, title, price, description, image};
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));
    };

    const removeFromLocalStorage = (id) => {
        const products = getLocalStorage();
        const newProducts = products.filter(el => el.dttm !== id);
        localStorage.setItem("products", JSON.stringify(newProducts))
    }
    
    form.addEventListener('submit', addProduct);

    showProducts();
    
    