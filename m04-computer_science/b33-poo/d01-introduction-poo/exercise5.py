# Exercício 5: Notou que os pilares da orientação a objetos
# começam a manifestar a medida que fizemos nossos exercícios
# de modelagem? Que tal agora então modelarmos uma televisão?


class TV:
    tv_is_on = False
    volume = 0

    def __init__(self, brand, screen_type, inches, price):
        self.brand = brand
        self.screen_type = screen_type
        self.inches = inches
        self.price = price

    def log_status_power(self):
        if self.tv_is_on:
            print("Tv ligada")
        else:
            print("Tv desligada")

    def log_volume(self):
        print(f"Volume: {self.volume}")

    def power(self):
        if not self.tv_is_on:
            self.tv_is_on = True
        else:
            self.tv_is_on = False
        self.log_status_power()

    def increase_volume(self):
        if self.volume <= 100:
            self.volume += 1
        self.log_volume()

    def decrease_volume(self):
        if self.volume >= 1:
            self.volume -= 1
        self.log_volume()


# Abstração --> TV
# Atributos --> brand, screen_type, inches, price, volume, tv_is_on
# Métodos --> log_volume, power, increase_volume, decrease_volume

if __name__ == "__main__":
    my_tv = TV("MelhorTV", "LED", 50, 5000)
    my_tv2 = TV("UltronTV", "Plasma", 75, 8000)
    my_tv.power()
    my_tv.increase_volume()
    my_tv.increase_volume()
    my_tv.increase_volume()
    my_tv.decrease_volume()
    my_tv.decrease_volume()

    my_tv2.power()
    my_tv2.increase_volume()
    my_tv2.increase_volume()
    my_tv2.decrease_volume()
    my_tv2.decrease_volume()
    my_tv2.decrease_volume()
    my_tv2.decrease_volume()
    my_tv2.increase_volume()
