# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda" .
def get_longest_name(names):
    result = ""
    total = 0
    for name in names:
        if len(name) > total:
            total = len(name)
            result = name
    return result


if __name__ == "__main__":
    names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
    print(get_longest_name(names))
