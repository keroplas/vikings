class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
         const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
         const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
         const randomSaxon = this.saxonArmy[randomSaxonIndex];
         const randomViking = this.vikingArmy[randomVikingIndex];
    
        const damage = randomViking.strength;
        randomSaxon.receiveDamage(damage);
    
        if (randomSaxon.health <= 0) {
          this.saxonArmy.splice(randomSaxonIndex, 1);
          return "A Saxon has died in combat";
        }
    
        return randomSaxon.receiveDamage(damage);
      }

    
    saxonAttack(){
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
    
        const damage = randomSaxon.strength;
        randomViking.receiveDamage(damage);
    
        if (randomViking.health <= 0) {
          this.vikingArmy.splice(randomVikingIndex, 1);
          return randomViking.name + " has died in combat";
        }
    
        return randomViking.name + " has received " + damage + " points of damage";
    }
    showStatus(){
        if (this.saxonArmy = []){
            return "Vikings have won the war of the century!";
        }
    }

}

module.exports = War;
