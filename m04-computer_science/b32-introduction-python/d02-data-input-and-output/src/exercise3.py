# Exercício 3: Modifique o exercício anterior para que as palavras
# sejam lidas de um arquivo. Considere que o arquivo terá cada palavra
# em uma linha.
import random


class Game:

    __words_list = []
    __attempts = 0
    __score = 0
    user_name = ""

    def scramble_word(word):
        return "".join(random.sample(word, len(word)))

    def draw_word():
        return random.choice(Game.__words_list)

    def add_attempt():
        Game.__attempts += 1

    def check_attempts():
        if Game.__attempts > 2:
            print("Ops, você atingiu o número máximo de tentativas")
        else:
            Game.start(Game.user_name)

    def show_scramble_word(word):
        print(
            "Palavra: {0}, Número de tentativas: {1}".format(
                word, Game.__attempts
            )
        )

    def show_correct_answer(correct_answer):
        print(
            "A resposta certa é: {0} \nAcertos: {1} \nTentativas: {2}".format(
                correct_answer,
                Game.__score,
                Game.__attempts,
            )
        )

    def add_score():
        Game.__score += 1

    def check_score(correct_answer, user_word):
        if correct_answer == user_word:
            print("Acertou!!!")
            Game.add_score()
        else:
            print("Errou!!!")

    def start(user_name):
        correct_answer = Game.draw_word()
        word = Game.scramble_word(correct_answer)
        Game.show_scramble_word(word)
        user_word = input("Digite a palava correta: ")
        Game.add_attempt()
        Game.check_score(correct_answer, user_word)
        Game.show_correct_answer(correct_answer)
        Game.check_attempts()

    def play(data):
        Game.__words_list = data
        user_name = input("Digite seu nome: ")
        print("Bem vindo(a) ao jogo {}, vamos começar".format(user_name))
        Game.start(user_name)


if __name__ == "__main__":
    data = []
    with open("words_list.txt", mode="r") as file:
        for line in file:
            data.append(line.replace("\n", ""))


Game.play(data)
