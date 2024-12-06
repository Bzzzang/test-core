
import { getPbimageURL } from "@/api/getPbimageURL";


// console.log(import.meta.env.VITE_PB_URL);

async function renderProduct() {
  const response = await fetch(`${import.meta.env.VITE_PB_URL}/api/collections/products/records`);

  const data = await response.json();

  // console.log(data.items);

  const tag = `
    <div class="container">
      <ul>
        ${data.items.map((item) =>  `
          <li>
            <a href="/">
              <figure>
                <img src="${`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.photo}`}" alt="" />
              </figure>
              <span class="brand">${item.brand}</span>
              <span class="description">${item.description}</span>
              <span class="price">${item.price}원</span>
              <div>
                <span class="discount">${item.discount}%</span>
                <span class="real-price">${(item.price - (item.price * item.discount * 0.01)).toLocaleString()}원</span>
              </div>
            </a>
          </li>
          `).join('')}
      </ul>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", tag);
}

renderProduct();


// ${(item.price * (1 - (item.discount / 100)))}