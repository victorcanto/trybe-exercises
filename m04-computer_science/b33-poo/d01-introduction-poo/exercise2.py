# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar
# algumas partes de um software de geometria. Como poderíamos
# modelar um objeto retângulo?


class Rectangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height

    def perimeter(self):
        return self.base * 2 + self.height * 2


# Abstração --> Rectangle
# Atributos --> base and height
# Métodos --> area and perimeter

if __name__ == "__main__":
    rectangle1 = Rectangle(25, 4)
    print(rectangle1.area())
