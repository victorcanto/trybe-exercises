# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um triângulo retângulo com n asteriscos de base.


def draw_asterisk_triangle(n):
    for i in range(1, n + 1):
        print(i * "*")


if __name__ == "__main__":
    print(draw_asterisk_triangle(8))
