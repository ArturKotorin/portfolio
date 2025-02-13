document.addEventListener('DOMContentLoaded', () => {
    const hamburgBtn = document.getElementById("hamburgBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
  
    // Открытие меню
    hamburgBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // предотвращаем всплытие, чтобы глобальный обработчик не закрыл меню сразу
      dropdownMenu.classList.add("active");
    });
  
    // Закрытие меню по кнопке "cancel"
    cancelBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.classList.remove("active");
    });
  
    // Закрытие меню при клике на любой пункт меню
    document.querySelectorAll('.dropdown-links a').forEach(link => {
      link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
      });
    });
  
    // Глобальный обработчик кликов по документу для скрытия меню
    document.addEventListener("click", (e) => {
      // Если клик вне элементов меню и кнопки открытия, скрыть меню
      if (dropdownMenu.classList.contains("active") &&
          !dropdownMenu.contains(e.target) &&
          !hamburgBtn.contains(e.target)) {
        dropdownMenu.classList.remove("active");
      }
    });

    // Обработчики для модального окна
  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const modalClose = document.getElementById("modalClose");

  // Открытие модального окна при клике на кнопку "Напиши мне"
  contactBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    contactModal.style.display = "flex";
  });

  // Закрытие модального окна по клику на крестик
  modalClose.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  // Закрытие модального окна при клике вне области содержимого
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
  
    // Инициализация AOS (при условии, что библиотека загружена)
    if (typeof AOS !== "undefined") {
      AOS.init({ offset: 0 });
    }
  
    // Эффект печатной машинки для .typewriter-text
    const typewriterElement = document.querySelector(".typewriter-text");
    // Массив строк, которые будут печататься (можно добавить несколько вариантов)
    const texts = ["Frontend-разработчик"];
    const typingSpeed = 150; // скорость набора в мс на символ
    const pauseDelay = 2000; // задержка после завершения набора строки (в мс)
    let textIndex = 0;
    let charIndex = 0;
  
    function type() {
      if (charIndex < texts[textIndex].length) {
        typewriterElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        // После завершения набора текста, подождать и начать заново
        setTimeout(() => {
          typewriterElement.textContent = "";
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          type();
        }, pauseDelay);
      }
    }
  
    if (typewriterElement) {
      type();
    }
  });
  