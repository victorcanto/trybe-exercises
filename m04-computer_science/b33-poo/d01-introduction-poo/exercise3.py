# Exercício 3: E como poderíamos definir um círculo?
# Qual seu nome, atributos e comportamentos?


class Circle:
    __pi = 3.14

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.__pi * self.radius ** 2

    def perimeter(self):
        return 2 * self.__pi * self.radius


# Abstração --> Circle
# Atributos --> radius
# Métodos --> area and perimeter


if __name__ == "__main__":
    circle1 = Circle(7)
    print(circle1.area())
