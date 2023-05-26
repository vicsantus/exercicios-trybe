import re


def validar_email(email):
    # Define o padrão para validação do e-mail
    padrao = r'^[\w\.-]+@[\w\.-]+\.\w+$'

    # Verifica se o e-mail corresponde ao padrão
    if re.match(padrao, email):
        print("O e-mail é válido!")
    else:
        raise Exception("O e-mail é inválido!")


if __name__ == '__main__':
    try:
        email = input("Digite o e-mail: ")
        validar_email(email)
    except Exception as e:
        print(str(e))
