class Hero {
  constructor (name = "heroi", age = "18", type) {
    this.name = name
    this.age = age
    this.type = type 
    this.typeOfAttack
    
    switch(type) {
      case "mago":
        this.typeOfAttack = "usou magia"
        break
      case "guerreiro": 
        this.typeOfAttack = "usou espada"
        break
      case "monge":
        this.typeOfAttack = "usou artes marciais"
        break
      case "ninja":
        this.typeOfAttack = "usou shuriken"
        break
      default: 
        this.type = "sem classe"
        this.typeOfAttack = "usou soco"
        break
    }
  }

  attack() {
    console.log(` O ${this.type} usou ${this.typeOfAttack}`)
  }
}

//test
let mago = new Hero("Juan", 18, "lutador")

mago.attack()
