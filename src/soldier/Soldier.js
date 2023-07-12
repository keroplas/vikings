class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;

       
    }
    attack() {
        return this.strength;
    }
    
    receiveDamage(damage) {
        this.health = this.health - 50
    }

}



module.exports = Soldier;
