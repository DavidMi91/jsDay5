let array = [];

class Car {
  brand;
  model;
  img;
  type;
  color;
  age;
  weight;

  constructor(brand, model, img, type, color, age, weight) {
      this.brand = brand;
      this.model = model;
      this.img = img;
      this.type = type;
      this.color = color;
      this.age = age;
      this.weight = weight;

      array.push(this);
      console.table(this);
  }

  infoStart() {
      return `<div class="card" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="height:180px;" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.brand} ${this.model}</h5>
        <p>${this.type} <br> ${this.color} <br> ${this.age} <br> ${this.weight}</p>
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}

class motorbike extends Car {
  numberOfWheels;
  fuelType;
  trunk;

  constructor(brand, model, img, type, color, age, weight, numberOfWheels, fuelType, trunk){
    super(brand, model, img, type, color, age, weight);
    this.numberOfWheels = numberOfWheels;
    this.fuelType = fuelType;
    this.trunk = trunk;
  }

  infoStart() {
    return `${super.infoStart()} <p class="card-text">${this.numberOfWheels} <br> ${this.fuelType} <br> ${this.trunk}</p> `;
  }
}




// start of animal class 
class Animal {
  name;
  age;
  img;
  breed;
  weight;
  color;

  constructor(name, age, img, breed, weight, color) {
    this.name = name;
    this.age = age;
    this.img = img;
    this.breed = breed;
    this.color = color;
    this.weight = weight;

      array.push(this);
      console.table(this);
  }

  infoStart() {
      return `<div class="card me-5" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="height:180px;" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name} ${this.breed}</h5>
        <p>${this.age} <br> ${this.weight} <br> ${this.color} <br></p>
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}
class fish extends Animal {
  typeOfWater;
  poisonous;
  mainRegion;


  constructor(name, age, img, breed, weight, color, typeOfWater, poisonous, mainRegion){
    super(name, age, img, breed, weight, color);
    this.typeOfWater = typeOfWater;
    this.poisonous = poisonous;
    this.mainRegion = mainRegion;
  }

  infoStart() {
    return `${super.infoStart()} <p class="card-text">${this.typeOfWater} <br> ${this.poisonous} <br> ${this.mainRegion}</p> `;
  }
}






class Person {
  name;
  age;
  img;
  hobbies;
  height;
  nationality;

  constructor(name, age, img, hobbies, height, nationality) {
      this.name = name;
      this.age = age;
      this.img = img;
      this.hobbies = hobbies;
      this.height = height;
      this.nationality = nationality;

      array.push(this);
      console.table(this);
  }

  infoStart() {
      return `<div class="card me-5" style="width: 18rem;">
      <img src="${this.img}" class="card-img-top" style="height:180px;" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.name} ${this.age}</h5>
        <p>${this.hobbies} <br> ${this.height} <br> ${this.nationality} <br></p>
        `;
  }
  infoEnd(){
    return `
      </div>
    </div>`;
  }
}
class profession extends Person {
  jobPosition;
  fieldOfWork;
  experienceYrs;


  constructor(name, age, img, hobbies, height, nationality, jobPosition, fieldOfWork, experienceYrs){
    super(name, age, img, hobbies, height, nationality);
    this.jobPosition = jobPosition;
    this.fieldOfWork = fieldOfWork;
    this.experienceYrs = experienceYrs;
  }

  infoStart() {
    return `${super.infoStart()} <p class="card-text">${this.jobPosition} <br> ${this.fieldOfWork} <br> ${this.experienceYrs}</p> `;
  }
}


new profession("Mary", "29", "https://cdn.pixabay.com/photo/2021/10/16/06/13/girl-6714026__340.jpg", "Reading", "177cm", "Austrian", "Junior Web Developer", "Web Development", "1 Year");
new fish("Lucky", "1 y.o.", "https://images.pexels.com/photos/3626111/pexels-photo-3626111.jpeg", "Clownfish", "300g", "Striped", "Saltwater", "Kinda poisonous","Red Sea and Pacific Oceans");
new motorbike("Yamaha","XV950","https://images.pexels.com/photos/4577731/pexels-photo-4577731.jpeg", "Chopper", "Black", "10 y.o.", "250kg", "Two wheels", "Gasoline", "No Trunk");


for (let i = 0; i < array.length; i++) {
    document.getElementById("result").innerHTML += array[i].infoStart() + array[i].infoEnd();
}


// brand, model, img, type, color, age, weight, numberOfWheels, fuelType, trunk