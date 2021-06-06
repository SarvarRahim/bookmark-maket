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

var elsQA = document.querySelectorAll('.qa')

var elsQAToggler = document.querySelectorAll('.qa__toggler')


elsQAToggler.forEach(function (toggler){
  toggler.addEventListener('click', function () {
    elsQA.forEach(function (qa) {
      qa.classList.remove('qa--active');
    });

    toggler.closest('.qa').classList.add('qa--active');
  });
});

