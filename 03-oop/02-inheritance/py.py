# ============================================================
# 02 — Inheritance  (Python)
# ============================================================

class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"


# SAME — subclass with super()
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)  # DIFF — no `new`; super() then parent method
        self.breed = breed

    def speak(self):
        return f"{self.name} barks"  # override

    def info(self):
        return f"{self.speak()} ({self.breed})"


rex = Dog("Rex", "Shepherd")
print(rex.speak())
print(rex.info())
print(isinstance(rex, Dog))
print(isinstance(rex, Animal))

# SAME — call parent implementation
class LoudDog(Dog):
    def speak(self):
        return super().speak() + " loudly"


print(LoudDog("Max", "Lab").speak())

# PY-ONLY — multiple inheritance exists (use carefully)
class Robot:
    def charge(self):
        return "charging"


class RoboDog(Dog, Robot):
    pass


print(RoboDog("Bolt", "Metal").charge())
