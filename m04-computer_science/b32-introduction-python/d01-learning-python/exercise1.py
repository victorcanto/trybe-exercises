# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
# Resolucao 1
def my_max(a, b):
    return a if a > b else b


if __name__ == "__main__":
    result = my_max(10, 5)
    print(result)

    # Resolucao 2
    print(max([10, 5]))
