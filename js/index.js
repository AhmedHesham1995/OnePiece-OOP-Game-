








function character(name,strength,health){
        this.name = name;
        this.strength = strength;
        this.health = health;

        this.attackBtn = document.querySelector(`#${this.name}-attack`)
        this.healthBtn = document.querySelector(`#${this.name}-make-health`)
        this.progress = document.querySelector(`.${this.name}-health span`)
        this.alive = document.querySelector(`.${this.name}-alive`)
    }


let lofi = new character("lofi",5,100);
let zoro = new character("zoro",10,100);

character.prototype.attack = function(opponent){
    if(opponent.health > 0){
        opponent.health -= this.strength;
        opponent.progress.style.width = `${opponent.health}%`
    }
    else{
       opponent.attackBtn.remove(); 
       opponent.healthBtn.remove();
       opponent.alive.innerHTML = `${opponent.name} lose`
    }
    
}

character.prototype.increaseHealth = function(){
    if(this.health < 100){
        this.health += 10;
        this.progress.style.width = `${this.health}%`
    } 
    
    if(this.health > 100){
        this.health = 100
    } 
    
}

character.prototype.status = function(){
    console.log(`name: ${this.name}`);
    console.log(`strength: ${this.strength}`)
    console.log(`health: ${this.health}`)
}


zoro.attackBtn.addEventListener("click",function(){
    zoro.attack(lofi);
})

lofi.attackBtn.addEventListener("click",function(){
    lofi.attack(zoro);
})



zoro.healthBtn.addEventListener("click",function(){
    zoro.increaseHealth();
})

lofi.healthBtn.addEventListener("click",function(){
    lofi.increaseHealth();
})
