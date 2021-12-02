import json
import csv


def get_books(file):
    books = []
    for book in file:
        books.append(json.loads(book))
    return books


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    result = []
    for category, num_books in book_count_by_category.items():
        result.append(
            [
                category,
                num_books / total_books,
            ]
        )
    return result


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # recupera arquivo books.json
    with open("books.json", mode="r") as file:
        books = get_books(file)

    # calcula a quantidade de livros por categoria
    book_count_by_category = count_books_by_categories(books)

    # calcula a porcentagem de livros por categoria
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # escreve o resultado final no arquivo report.csv
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)

# Source Ref: Gabarito Trybe/32.2
