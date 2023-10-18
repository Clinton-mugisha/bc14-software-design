from abc import ABC, abstractmethod


class InputDevice(ABC):
    @abstractmethod
    def input(self):
        pass


class Keyboard(InputDevice):
    def input(self):
        print("Inputting data from the keyboard...")


class Mouse(InputDevice):
    def input(self):
        print("Inputting data from the mouse...")


class Computer:
    def __init__(self, input_device):
        self.__input_device = input_device

    def input(self):
        self.__input_device.input()

    def wifi_connection(self):
        print("Discoverable... Connect")
        return {}

    def set_input_device(self, input_device):
        self.__input_device = input_device

    def get_input_device(self):
        return self.__input_device


computer1 = Computer(Keyboard())


def test_computer(computer):
    computer.input()
    computer.wifi_connection()


test_computer(computer1)


class WifiConnect(ABC):
    @abstractmethod
    def wifi_connection(self):
        pass


class Bluetooth(ABC):
    @abstractmethod
    def blue_tooth(self):
        pass


class Smartphone(WifiConnect, Bluetooth):
    def wifi_connection(self):
        return "Connecting"
    
    def blue_tooth(self):
        print("connects to bluetooth")

class Laptop(WifiConnect, Bluetooth):
    def wifi_connection(self):
        print("Enter password")

    def blue_tooth(self):
        print("connects to bluetooth")

class Walltop(WifiConnect):
    def wifi_connection(self):
        print("Connecting")

    def blue_tooth(self):
        print("Connecting to bluetooth")


class SmartWatch(WifiConnect, Bluetooth):
    def wifi_connection(self):
        print("Connecting")

    def blue_tooth(self):
        print("Connects to bluetooth")


# Update ButtonPhone to match the InputDevice interface
class OldModelComputer(Bluetooth):
    def blue_tooth(self):
        print("Connecting to bluetooth")


# Create a ButtonPhone instance


computer1 = Computer(Keyboard())
smartphone = Smartphone()
laptop = Laptop()
walltop = Walltop()
smartwatch = SmartWatch()
old_model = OldModelComputer()
test_computer(computer1)

print(smartphone.wifi_connection())
smartphone.blue_tooth()

laptop.wifi_connection()
laptop.blue_tooth()

walltop.wifi_connection()
walltop.blue_tooth()

smartphone.wifi_connection()
smartphone.blue_tooth()

old_model.blue_tooth()


