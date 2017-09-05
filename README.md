## Angular 2.0 - lista startowa zawodników( CRUD )
----
### Cel projektu

Zapoznanie się ze sposobem pisania aplikacji webowych we frameworku Angular 2.0. Do tego postanowiłem stworzyć CRUDa wraz z logowaniem i rejestracją na podstawie tutorialu [AngularJS](https://angular.io/guide/quickstart).

----
### Opis działania

Administrator przygotowuje listę startową zawodników za pomocą formularza, w którym może zarządzać danymi na liście, a użytkownik po wcześniejszej rejestracji i logowaniu może tą listę jedynie obejrzeć.

---
### Role w projekcie

* _administrator_ - dostęp do zarządzania listą startową zawodników. Konto admina: __login__: _admin_, __hasło__:_admin2_
* _użytkownik_ - możliwość utworzenie nowego konta oraz po zalogowaniu obejrzenia listy startowej zawodników.

---
### Funkcjonalność

* rejestracja
* logowanie
* lista startowa zawodników( CRUD )

---
### Wykorzystane Technologie:

Angular 2.0

---
### Sposób uruchomienia:

1. Instalacja [nodeJS](https://nodejs.org/en/).
2. Pobranie repozytorium.
3. Instalacja projektu: __npm install__
4. Uruchomienie serwera: __npm start__
5. Uruchomienie aplikacji w przeglądarce: __localhost:3000__

---
### Prezentacja aplikacji

##### Rejestracja
Formularz z możliwościa założenia konta. Po rejestracji zostajemy przekierowani do logowania.

![Rejestracja](https://github.com/kropeq/Angular2-CRUD/blob/master/screens/rejestracja.png)

##### Widok użytkownika
Użytkownik po zalogowaniu może obejrzeć listę startową.

![Widok użytkownika](https://github.com/kropeq/Angular2-CRUD/blob/master/screens/widok_uzytkownika.png)

##### Widok administratora
Administrator po zalogowaniu może zarządzać listą startową.

![Widok administratora](https://github.com/kropeq/Angular2-CRUD/blob/master/screens/widok_administratora.png)