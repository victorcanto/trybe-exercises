# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(numbers):
    return sum(numbers) / len(numbers)


if __name__ == "__main__":
    numbers = [5, 7, 10]
    print(round(average(numbers), 2))
