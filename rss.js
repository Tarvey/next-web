fetch("https://chrisbingcdn.ct8.pl/rss.xml")
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <h3>
              ${el.querySelector("title").innerHTML}
          </h3>
          <p>
              ${el.querySelector("content").innerHTML}
          </p>
          <hr>
              ${el.querySelector("date").innerHTML}
          </hr>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });