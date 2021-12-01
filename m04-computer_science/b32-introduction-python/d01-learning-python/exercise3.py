# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n
def draw_asterisks(n):
    for i in range(n):
        print(n * "*")


if __name__ == "__main__":
    draw_asterisks(5)
