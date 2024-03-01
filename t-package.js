class Telephone {
    constructor(){

        this.contact = []; 
    }

    addPhoneNumber( name, number){
        return this.contact.push({name, number})
    }

    removePhoneNumber(number){
        const findNumber = this.contact.find(num => num.number === number );

        if (!findNumber) return false;

        this.contact.splice(findNumber, 1)
    }

    dialPhoneNumber(number){
        const findNumber = this.contact.find(num => num.number === number );

        if (!findNumber) return `${number} does not exist`;

        return `Dialing ${findNumber.name}: ${number}`

    }

    show(){
        return this.contact;
    }
}

const t = new Telephone()
t.addPhoneNumber('Muodum', '08163360727')
t.addPhoneNumber('Ann', '08163364567')

console.log(t.show())
t.removePhoneNumber('08163360727')
console.log('////////////////////////////////////')
console.log(t.show())
console.log (t.dialPhoneNumber('08163364567'))