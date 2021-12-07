# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema
# de vendas de uma cafeteria. Como podemos abstrair um pedido composto
#  por vários itens? Qual seu nome, atributos e comportamentos?

from datetime import datetime

now = datetime.now()
now_str = now.strftime("%d/%m/%Y %H:%M:%S")


class CoffeeShopOrder:
    def __init__(
        self, user_name, order_number, product_name, description, data
    ):
        self.user_name = user_name
        self.order_number = order_number
        self.product_name = product_name
        self.description = description
        self.data = data

    def get_order_info(self):
        return (
            f"Pedido: {self.order_number} \n"
            f"Nome do produto: {self.product_name} \n"
            f"Descrição: {self.description} \n"
            f"Nome do cliente: {self.user_name} \n"
            f"Data do pedido: {self.data} \n"
        )

    def update_order(self, product_name, description):
        self.product_name = product_name
        self.description = description
        self.data = now_str
        print(f"Pedido {self.order_number} atualizado com sucesso!!!\n")

    def submit_order(self):
        return (
            f"Opa {self.user_name}, tudo bem? Seu pedido saiu para entrega. "
            f"Até logo!"
        )


# Abstração --> CoffeeShopOrder
# Atributos --> user_name, order_number, product_name, description, data
# Métodos --> get_order_info, submit_order

if __name__ == "__main__":
    order1 = CoffeeShopOrder(
        "Victor",
        7,
        "Café forte",
        "café para programar por dias",
        now_str,
    )
    print(order1.get_order_info())
    order1.update_order("Café forte 2", "café ainda mais forte para programar")
    print(order1.get_order_info())
    print(order1.submit_order())
