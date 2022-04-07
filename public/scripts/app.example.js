class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.inputDriverAvailability = document.getElementById(
      "inputDriverAvailability"
    );
    this.inputDate = document.getElementById("inputDate");
    this.inputTime = document.getElementById("inputTime");
    this.inputPassangers = document.getElementById("inputPassangers");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      let child = this.carContainerElement.firstElementChild;

      while (child) {
        child.remove();
        child = this.carContainerElement.firstElementChild;
      }
      // return false;
    });
    this.loadButton.onclick = this.run;
  }

  run = () => {
    const node = document.createElement("div");
    node.className = "row";
    this.carContainerElement.className = "container";
    const baru = document.createElement("div");
    baru.className = "container";
    node.appendChild(baru);

    const baris = document.createElement("div");
    baris.className = "row";
    this.carContainerElement.appendChild(baris);

    const driverAvailabilityValue = this.inputDriverAvailability.value;
    const inputDateValue = this.inputDate.value;
    const inputTimeValue = this.inputTime.value;
    const inputPassangersValue = this.inputPassangers.value;
    // console.log(inputTimeValue);
    Car.list
      .filter((car) => {

        if (
          car.capacity === parseInt(inputPassangersValue) &&
          car.available === Boolean(driverAvailabilityValue) &&
          car.availableAt.toISOString().substring(0, 10) == inputDateValue &&
          car.availableAt.toISOString().substring(11, 16) < inputTimeValue
        ) {
          console.log(car);
          return car;
        }
      })
      .map((car) => {
        const col = document.createElement("div");
        col.className = "col-4";
        col.innerHTML = car.render();
        baris.appendChild(col);
      });
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);
    // });
  };

  async load() {
    let cars = await Binar.listCars();

    Car.init(cars);
  }

  clear = (e) => {
    console.log(e);
    e.preventDefault();
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
