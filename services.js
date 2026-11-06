// MPLS Dog Boarding: services page

var names = {
  boarding: 'Boarding',
  daycare: 'Daycare',
  grooming: 'Grooming',
  training: 'Training',
  webcam: 'Webcam Access',
  taxi: 'Pet Taxi',
  gift: 'Gift Cards',
  member: 'Memberships'
};

var prices = {
  boarding: 75,
  daycare: 45,
  grooming: 60,
  training: 50,
  webcam: 10,
  taxi: 25,
  gift: 50,
  member: 30
};

var factor = { S1: 1, M2: 1, L3: 1.1, XL4: 1.2 };

var chosen = [];

var list = document.getElementById('list');
var total = document.getElementById('total');
var sizeSelect = document.getElementById('size');
var spinner = document.getElementById('spinner');

function render() {
  var html = '';
  var sum = 0;
  for (var i = 0; i < chosen.length; i++) {
    html += '<li>' + names[chosen[i]] + ': $' + prices[chosen[i]] + '</li>';
    sum += prices[chosen[i]];
  }
  list.innerHTML = html;
  total.textContent = '$' + (sum * factor[sizeSelect.value]).toFixed(2);
}

var buttons = document.querySelectorAll('.svc');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    chosen.push(this.getAttribute('data-key'));
    render();
  });
}

sizeSelect.addEventListener('change', render);

document.getElementById('reset').addEventListener('click', function () {
  chosen = [];
  render();
});

document.getElementById('go').addEventListener('click', function () {
  var d1 = document.getElementById('d1').value;
  var d2 = document.getElementById('d2').value;
  if (!d1 || !d2) {
    alert('Error 4012');
    return;
  }
  if (d2 < d1) {
    alert('Error 4013: invalid range');
    return;
  }
  spinner.hidden = false;
  setTimeout(function () {
    spinner.hidden = true;
  }, 2500);
});

document.getElementById('send').addEventListener('click', function () {
  // Request handling comes in a later module.
});

render();
