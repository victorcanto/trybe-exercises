# Exercício 1: Faça um programa que receba um nome e imprima
# o mesmo na vertical em escada invertida.
def print_vertical_name_on_inverted_ladder(name):
    for i in range(len(name), 0, -1):
        print(name[0:i])


name = input("Digite um nome: ")
print_vertical_name_on_inverted_ladder(name)
