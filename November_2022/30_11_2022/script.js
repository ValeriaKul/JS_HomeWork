//todo: Необходимо реализовать интерфейс, с полем ввода (textarea). При обновлении страницы текст должен сохраняться в поле ввода. Реализуйте данное приложение через textarea и событие input.

// находим поле ввода с помощью id
const textarea = document.querySelector("#textarea");

// наполняем поле ввода текстом
textarea.placeholder = " Enter some text ...";

// задаем значение value 
textarea.value = localStorage.getItem('text');

// объявляем слушатель ивентов по инпуту и отображаем данные в нем из localStorage
textarea.addEventListener('input', () => {
   localStorage.setItem('text', textarea.value);
});
