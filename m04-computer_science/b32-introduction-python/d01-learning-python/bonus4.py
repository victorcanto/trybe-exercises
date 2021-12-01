# Exercício 4: Um posto está vendendo combustíveis
# com a seguinte tabela de descontos:

# Álcool:
#   - Até 20 litros, desconto de 3% por litro;
#   - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#   - Até 20 litros, desconto de 4% por litro;
#   - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do
# litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

import locale as lc

lc.setlocale(lc.LC_ALL, "pt_BR.UTF-8")


def discount(price, percent):
    return price * (1 - percent)


def calculate(liters, price, percent):
    return lc.currency(liters * discount(price, percent))


def get_payment_amount(liters, fuel_type=None):
    fuel_price = {"A": 1.90, "G": 2.50}
    fuel_discount = {
        "A": {"min_discount": 3 / 100, "max_discount": 5 / 100},
        "G": {"min_discount": 4 / 100, "max_discount": 6 / 100},
    }

    liter_discount = 0

    if fuel_type == "A":
        if liters <= 20:
            liter_discount = fuel_discount["A"]["min_discount"]
        else:
            liter_discount = fuel_discount["A"]["max_discount"]
    elif fuel_type == "G":
        if liters <= 20:
            liter_discount = fuel_discount["G"]["min_discount"]
        else:
            liter_discount = fuel_discount["G"]["max_discount"]
    else:
        return "Tipo de combustível não informado ou inválido"

    return calculate(liters, fuel_price[fuel_type], liter_discount)


if __name__ == "__main__":
    result_1 = get_payment_amount(10, "A")
    result_2 = get_payment_amount(10, "G")
    print(result_1)
    print(result_2)
