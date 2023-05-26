import json
import csv
from collections import Counter


with open('books.json', 'r') as file:
    books_list = json.load(file)

# print(books_list)
contando = []
for book in books_list:
    contando += [*book["categories"]]

contado = Counter(contando).most_common()
len_total = len(contando)  # 100%
in_percent = []

with open('result.csv', 'w', encoding='utf-8') as file:
    writer = csv.writer(file)
    header = [
        'categoria',
        'porcentagem'
    ]

    writer.writerow(header)

    for categ, value in contado:
        value_per_cent = value * 100
        row = [
            categ,
            value_per_cent / len_total
        ]
        writer.writerow(row)
        in_percent.append({categ: value_per_cent / len_total})


print(in_percent)
