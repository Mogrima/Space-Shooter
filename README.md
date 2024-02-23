# Space-Shooter
<img src="https://img.shields.io/badge/JavaScript-004524?style=for-the-badge&logo=javascript&logoColor=yellow" alt="JavaScript"> <img src="https://img.shields.io/badge/Canvas-6495ed?style=for-the-badge&logo=html5&logoColor=#E34F26" alt="Canvas">
<img src="https://img.shields.io/badge/HTML5-004524?style=for-the-badge&logo=html5&logoColor=#E34F26" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-004524?style=for-the-badge&logo=css3&logoColor=#E34F26" alt="css3">

## About
Космический шутер, адаптированный как под ПК, так и для мобильных устройств.

В мобильной игре реализовано три основных элемента: полноэкранный режим, сенсорное управление и оптимизированный код, который хорошо работает на различных устройствах.

С помощью шаблона проектирования пула объектов реализовано повторное использование объектов для избегания создания новых и уничтожения старых. 

Шаблон дизайна состояния позволяет разделить поведение объекта на отдельные блоки кода, что дает полный контроль над каждым состоянием и упрощает чтение, поддержку и отладку кода.

## Story
Не приближайтесь к этому газовому гиганту, так как что-то шевелится в верхних слоях атмосферы. Наше присутствие вызвало безудержное кормление, кажется, их привлекают признаки жизни наших немеханических членов экипажа. Это существо, обитающее в слоях сверхкритической жидкости этого далекого газового гиганта, живет в условиях экстремального давления. Они могут проходить через твердые препятствия, поэтому нам нужно наносить удары, когда они находятся в твердом состоянии. Поэтому рассчитывайте время для своих атак. Необходимо предотвратить попадание пришельцев на борт корабля для спасения жизни.

## Demo
![Изображение][1]

## Enemies
В игре 3 типа врагов, каждый из которых имеет свои особенности.
Первый тип - это Фантомморф. Он легко убивается, только если находится в твердом состоянии. Если случайно попасть в него, когда он переходит
в газовое состояние, то его скорость значительно увеличивается, а сам он никакого урона не получает.

![Изображение][2]

Второй тип — это Лобстеморф. Он имеет самое большое количество жизней, и при попадании в него снаряда он раздваивается на более мелких врагов.

![Изображение][3]

Третий тип - это Жукоморф. Он имеет одну жизнь, поэтому его легко уничтожить, но сам он может нанести не меньше урона, чем его предыдущие собратья. Не стоит его недооценивать! К тому же, его небольшой размер позволяет ему двигаться быстрее, чем другие космические монстры.

![Изображение][4]

## Control
Кликайте на врагов при помощи левой кнопки мыши либо пальцем, если экран сенсорный.

## How to play
1. Открыть игру в браузере можно по [ссылке](https://mogrima.github.io/Space-Shooter/)
2. Или скачать архив с игрой из репозитория. Для того, чтобы запустить игру локально:
  * Убедиться, что на ПК установлена node.js
  * Открыть консоль в корне проекта и набрать команду:
  ```node server.js ```
  * Если страница браузера не откроется автоматически, это можно сделать самостоятельно, просто указав в адресной строке: ```http://127.0.0.1:8125/```

## Acknowledgments
Lessons and support:

<img src="https://img.shields.io/badge/Franks laboratory -ffd700?style=for-the-badge&logo=youtube&logoColor=#FF0000" alt="Franks laboratory ">

Sounds:

<img src="https://img.shields.io/badge/Franks laboratory -ffd700?style=for-the-badge&logo=youtube&logoColor=#FF0000" alt="Franks laboratory ">

Sprites and background:

<img src="https://img.shields.io/badge/Franks laboratory -ffd700?style=for-the-badge&logo=youtube&logoColor=#FF0000" alt="Franks laboratory ">

Fonts

<img src="https://img.shields.io/badge/Bangers -ffd700?style=for-the-badge&logo=googlefonts&logoColor=#4285F4" alt="Bangers ">

## License

Unlicense

[1]:Assets/Preview/rceDqKaU3nY.jpg
[2]:Assets/Preview/phantomorph-preview.png
[3]:Assets/Preview/lobstermorph-preview.png
[4]:Assets/Preview/beetlemorph-preview.png
