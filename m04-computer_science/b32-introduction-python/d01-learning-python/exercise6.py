# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo" ,
# caso não seja possível formar um triângulo.


def classify_triangle(a, b, c):
    is_triangle = a + b > c and a + c > b and b + c > a
    if is_triangle:
        if a == b == c:
            print("Triângulo Equilátero: três lados iguais.")
        elif a == b != c or a == c != b or b == c != a:
            print("Triângulo Isósceles: quaisquer dois lados iguais.")
        elif a != b != c:
            print("Triângulo Escaleno: três lados diferentes.")
    else:
        print("Não é triangulo")


if __name__ == "__main__":
    classify_triangle(7, 7, 7)
    classify_triangle(7, 7, 5)
    classify_triangle(5, 3, 7)
    classify_triangle(7, 5, 1)
