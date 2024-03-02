class Telephone {
    constructor(){

        this.contacts = []; 
    }

    addPhoneNumber( name, number){
        return this.contacts.push({name, number})
    }

    removePhoneNumber(number){
        const findNumber = this.contacts.find(num => num.number === number );

        if (!findNumber) return false;

        this.contacts.splice(findNumber, 1)
    }

    dialPhoneNumber(number){
        const findNumber = this.contacts.find(num => num.number === number );

        if (!findNumber) return `${number} does not exist`;

        return `Now dialing ${findNumber.name}: ${number}`

    }

    // notify(){
    //     return 'Now dailing ' 
    // }

    // show(){
    //     return this.contact;
    // }
}

 class Observer extends Telephone {

    viewContacts(){
        return this.contacts;
    }

    add(name, number){
        return this.addPhoneNumber(name, number)
    }

    remove(number){
        return this.removePhoneNumber(number)
    }

    dial(number){
        return  this.dialPhoneNumber(number)

    }

   
 }



 const observer = new Observer()

 observer.add('Muodum', '08163360727')
 observer.add('Ann', '08163364567')
 observer.add('Ebuka', '00963364567')
 observer.add('Paul', '08063364000')

const viewContacts = observer.viewContacts()

console.log( {viewContacts} )

observer.remove('08163360727')
console.log(observer.dial('00963364567'))

