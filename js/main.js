var elsFeaturesTabsItem = document.querySelectorAll('.features-tabs__item');
var elsFeaturesTabsLink = document.querySelectorAll('.features-tabs__link');

// Har bir linkka quloq klikka quloq solishni buyuramiz
elsFeaturesTabsLink.forEach(function (link) {
  link.addEventListener('click', function () {
    // Avval hamma li lardan faollik klassini olib tashlaymiz
    elsFeaturesTabsItem.forEach(function (item) {
      item.classList.remove('features-tabs__item--active');
    });

    // Bosilgan link ota elementiga faollik klassini qo'shamiz
    link.parentElement.classList.add('features-tabs__item--active');
  });
});