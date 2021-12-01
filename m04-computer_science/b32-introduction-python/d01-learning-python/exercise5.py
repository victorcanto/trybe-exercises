# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).

import locale as lc

lc.setlocale(lc.LC_ALL, "pt_BR.UTF-8")


class Ink:
    can_volume = 18
    can_price = 80.00
    coverage_per_liter = 3

    @staticmethod
    def calculate(wall_size):
        qtd_liters = wall_size / Ink.coverage_per_liter
        qtd_can = round(qtd_liters / Ink.can_volume)
        total_price = round((qtd_can * Ink.can_price))
        return (qtd_can, lc.currency(total_price))


if __name__ == "__main__":
    print(Ink.calculate(54))

# Source Ref:
# https://www.alura.com.br/artigos/formatando-moeda-no-python
# https://www.caelum.com.br/apostila-python-orientacao-a-objetos/encapsulamento#atributos-de-classe
