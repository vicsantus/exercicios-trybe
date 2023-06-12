class Stack():
    def __init__(self) -> None:
        self._data = list()

    def is_empty(self):
        return not bool(len(self._data))

    def peek(self):
        if self.is_empty():
            return None

        return self._data[-1]

    def push(self, element):
        self._data.append(element)

    def pop(self):
        if self.is_empty():
            return None

        return self._data.pop()

    def __str__(self) -> str:
        return self._data
