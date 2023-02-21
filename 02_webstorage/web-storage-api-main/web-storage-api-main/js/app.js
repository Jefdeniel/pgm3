const app = {
  init() {
    // Get the groceries from the localStorage, if there are any
    this.groceries = JSON.parse(localStorage.getItem("groceries")) || [];

    this.cacheElements();
    this.registerListeners();
    this.createHTMLList();
  },
  cacheElements() {
    this.$inpGrocery = document.querySelector("#grocery");
    this.$btnAdd = document.querySelector("#add");
    this.$ulGroceries = document.querySelector("#groceries");
  },
  registerListeners() {
    this.$inpGrocery.addEventListener("keydown", (e) => {
      // Voorkomt dat de pagina herlaad
      // Als de gebruiker op enter drukt, voeg de boodschap toe
      if (e.key === "Enter") {
        e.preventDefault();
        const grocery = this.$inpGrocery.value;
        this.addGrocery(grocery);
        this.$inpGrocery.value = "";
      }
    });

    this.$btnAdd.addEventListener("click", () => {
      const grocery = this.$inpGrocery.value;
      this.addGrocery(grocery);
      this.$inpGrocery.value = "";
    });
  },
  addGrocery(grocery) {
    // Add grocery to the HTML list
    this.$ulGroceries.innerHTML += `<li>${grocery}</li>`;

    // Add grocery to the array
    this.groceries.push(grocery);
    console.log(this.groceries);

    // Add grocery to the localStorage
    localStorage.setItem("groceries", JSON.stringify(this.groceries));
  },
  createHTMLList() {
    // transform the array into an array of li's
    const liGroceries = this.groceries.map((grocery) => `<li>${grocery}</li>`);
    // Put de li's in the ul
    this.$ulGroceries.innerHTML = liGroceries.join("");
  },
};

app.init();
