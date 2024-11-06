async function loadItems() {
  let res = await fetch("https://restcountries.com/v3.1/all");
  let items = await res.json();
  let body = "";
  items.forEach(element => {
    body += `
          <div class="col m-5">
              <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                      <h3 class="card-text fw-bold">${element.name.common}</h3>
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="btn-group">
                              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                          </div>
                          <small class="text-body-secondary">9 mins</small>
                      </div>
                  </div>
              </div>
          </div>`;
  });
  document.getElementById("row").innerHTML = body;
}

async function Search() {
  let search = document.getElementById("searchId").value.toLowerCase();
  let res = await fetch("https://restcountries.com/v3.1/all");
  let items = await res.json();
  let body = "";
  items.forEach(element => {
    if (element.name.common.toLowerCase() === search) {
      body += `
              <div class="card" style="width: 18rem;">
                  <img src="${element.flags.png}" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${element.name.common}</h5>
                      <p class="card-text">${element.name.official}</p>
                      <a href="#" class="btn btn-primary">${element.status}</a>
                  </div>
              </div>`;
    }
  });
  document.getElementById("row").innerHTML = body;
}