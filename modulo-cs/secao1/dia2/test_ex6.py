import pytest
from ex6 import validar_email


def test_exception_of_validar_email():
    with pytest.raises(Exception, match="O e-mail é inválido!"):
        validar_email('xxxxxx')
