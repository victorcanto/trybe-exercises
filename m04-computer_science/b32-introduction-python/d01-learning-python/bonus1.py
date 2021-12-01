# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .


# Resolução 1
def my_min(numbers):
    min_number = numbers[0]
    for number in numbers:
        if number < min_number:
            min_number = number
    return min_number


numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(my_min(numbers))

# Resolução 2
print(min(numbers))
