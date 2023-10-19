// SRP => A class should have only one reason to change
// DIP => A High level module should not depend on a Low Level module,
    // instead both should depend on abstraction

/*
    Computer class:
    - Can input data
    - can store & retrieve data to memory
    - can process data
    - Can output data
    - can connect to WI-FI
    - can connect bluetooth device
*/

abstract class InputDevice{
    abstract input(): any;
}

class Keyboard extends InputDevice{
    input(){
        console.log("Inputing data from keyboard...");
    }
}

class Mouse extends InputDevice{
    input(){
        console.log("Inputing data from Mouse...");
    }
}


// Supertype / Contract
class Computer{
    // Fields
        // public name: string;
        // public brand: string;
        // public model: string;
        // public category: string = "generic";
        // public internalMemory = {}

    private inputDevice:InputDevice;

    // Methods
    constructor(inputDevice:InputDevice){
        this.inputDevice = inputDevice
    }

    // Input
    input(){
       this.inputDevice.input();
    }

    setInputDevice(inputDevice:InputDevice){
        this.inputDevice = inputDevice;
    }

    getInputDevice(){
        return this.inputDevice
    }

    // Process
    process(){
        console.log("process with Intel processor...")
     }
 

    // Store
    store(data:any){
        console.log("Storing data into internal memory...");
    }

    // Retrieve
    retrieve(key:string):any{
        console.log("Retrieving data from internal memory...");
    }

    // Output
    output(information: any){
        console.log(information);
    }
}

interface WiFiSupportedDevice{
    connectToWIFI();
}

interface BluetoothSupportedDevice{
    connectToBleatooth();
}

// Is-A Relationship LSP & ISP
class Desktop extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    // We can add extra functionality to this class
    balance(){}
    connectToWIFI(){
        console.log(' Desktop Connecting to wifi.');
    }

    connectToBleatooth(){
        console.log(' Deasktop Connecting to Bluetooth.');
    }
}

class Laptop extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    // We can add extra functionality to this class   
    fold(){}
    connectToWIFI(){
        console.log(' Laptop Connecting to wifi.');
    }

    connectToBleatooth(){
        console.log('Laptop Connecting to Bluetooth.');
    }
}


class Walltop extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    // We can add extra functionality to this class   
    hang(){}
    connectToWIFI(){
        console.log('Walltop Connecting to wifi.');
    }

    connectToBleatooth(){
        console.log('Walltop Connecting to Bluetooth.');
    }
}

class SmartPhone extends Computer implements WiFiSupportedDevice, BluetoothSupportedDevice{
    // We can add extra functionality to this class   
    screenTouch(){}
    connectToWIFI(){
        console.log('SmartPhone Connecting to wifi.');
    }

    connectToBleatooth(){
        console.log('Smartphone Connecting to Bluetooth.');
    }
}

class OldModelComputer extends Computer implements BluetoothSupportedDevice{
    // We can add extra functionality to this class
    legacyMethod(){
    }

    connectToBleatooth(){
        console.log('OldPC Connecting to Bluetooth.');
    }
} 


// // Computer Objects
// let computer1 = new Computer(new Keyboard());

// // Change inpute device dynamically using a setter
// computer1.setInputDevice(new Mouse());

// // Access the value of a private field using a getter
// console.log(computer1.getInputDevice());

// Tests
// function testComputer(computer:Computer){
//     computer.input();
//     computer.process();
//     computer.store("any thing");
//     computer.retrieve("name");
//     computer.output("just");
// }
// testComputer(computer1);
const keyboard = new Keyboard();
const desktop = new Desktop(keyboard);
desktop.connectToWIFI();
desktop.connectToBleatooth();

const laptop = new Laptop(keyboard);
laptop.connectToWIFI();
laptop.connectToBleatooth();


const walltop = new Walltop(keyboard);
walltop.connectToWIFI();
walltop.connectToBleatooth();

const smartPhone = new SmartPhone(keyboard);
smartPhone.connectToWIFI();
smartPhone.connectToBleatooth();

const oldModelComputer = new OldModelComputer(keyboard);
oldModelComputer.connectToBleatooth();



