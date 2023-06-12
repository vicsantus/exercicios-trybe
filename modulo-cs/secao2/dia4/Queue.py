class Queue():
    def __init__(self):
        self._data = list()

    def __str__(self) -> str:
        return self._data

    def enqueue(self, element):
        self._data.append(element)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.pop(0)

    def is_empty(self):
        return not bool(len(self._data))

    def peek(self):
        if self.is_empty():
            return None

        return self._data[0]
