(function () {
  //check fields and hide the submit
  document.addEventListener('DOMContentLoaded', function () {
    const display = new Display();
    display.checkFields();
    display.hideSubmit();
  });

  //************************************************************
  //display function
  function Display() {
    this.name = document.getElementById('name');
    this.email = document.getElementById('email');
    this.dateOfBirth = document.getElementById('date-of-birth');
    this.city = document.getElementById('city');
    this.country = document.getElementById('country');
  }

  //************************************************************
  //check fields
  Display.prototype.checkFields = function () {
    // console.log(this);

    this.name.addEventListener('blur', this.validateField);
    this.email.addEventListener('blur', this.validateField);
    this.dateOfBirth.addEventListener('blur', this.validateField);
    this.city.addEventListener('blur', this.validateField);
    this.country.addEventListener('blur', this.validateField);
  };

  //************************************************************
  //validate each field
  Display.prototype.validateField = function () {
    // console.log(this); "this here is referring to 'name', 'email', 'gender' etc and not the constructor function (Display)"

    if (this.value === '') {
      this.classList.remove('complete');
      this.classList.add('fail');
    } else {
      this.classList.add('complete');
      this.classList.remove('fail');
    }
    const complete = document.querySelectorAll('.complete');
    if (complete.length === 5) {
      document.querySelector('.submitBtn').disabled = false;
    } else {
      document.querySelector('.submitBtn').disabled = true;
    }
    this.country = document.getElementById('country');
    this.country.addEventListener('click', function () {
      document.querySelector('.submitBtn').disabled = false;
    });
  };

  //************************************************************
  //disable submit
  Display.prototype.hideSubmit = function () {
    const btn = document.querySelector('.submitBtn');
    btn.disabled = true;
  };

  //************************************************************
  //nav section
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.navigation');

  navToggle.addEventListener('click', function () {
    const containHidden = navigation.classList.contains('showNav');
    if (containHidden) {
      navigation.classList.remove('showNav');
    } else {
      navigation.classList.add('showNav');
    }
  });

  //************************************************************
  //gender section
  const genderMale = document.querySelector('.fas-male');
  const genderFemale = document.querySelector('.fas-female');
  const genderContent = document.querySelector('.gender-content');

  genderContent.addEventListener('click', function (e) {
    if (e.target === genderMale) {
      genderMale.classList.add('B-color');
    } else {
      genderMale.classList.remove('B-color');
    }

    if (e.target === genderFemale) {
      genderFemale.classList.add('B-color');
    } else {
      genderFemale.classList.remove('B-color');
    }
  });

  //************************************************************
  //subscription section
  const listItem = document.querySelector('.list-item');
  const listBronze = document.querySelector('.item-bronze');
  const listSilver = document.querySelector('.item-silver');
  const listGold = document.querySelector('.item-gold');

  listItem.addEventListener('click', function (e) {
    if (e.target === listBronze) {
      listBronze.classList.add('color');
    } else {
      listBronze.classList.remove('color');
    }

    if (e.target === listSilver) {
      listSilver.classList.add('color');
    } else {
      listSilver.classList.remove('color');
    }

    if (e.target === listGold) {
      listGold.classList.add('color');
    } else {
      listGold.classList.remove('color');
    }
  });

  //************************************************************
  // button section
  const submitButton = document.querySelector('.submitBtn');
  const alert = document.getElementById('alert');

  submitButton.addEventListener('click', function (e) {
    e.preventDefault();

    const complete = document.querySelectorAll('.complete');
    if (complete.length === 5) {
      displayAlert('Successful', 'success');
    }

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const dateOfBirth = document.getElementById('date-of-birth');
    const city = document.getElementById('city');
    const country = document.getElementById('country');
    const genderMale = document.querySelector('.fas-male');
    const genderFemale = document.querySelector('.fas-female');
    const listBronze = document.querySelector('.item-bronze');
    const listSilver = document.querySelector('.item-silver');
    const listGold = document.querySelector('.item-gold');
    const submitBtn = document.querySelector('submitBtn');

    name.value = '';
    name.classList.remove('complete');
    email.value = '';
    email.classList.remove('complete');
    dateOfBirth.value = '';
    dateOfBirth.classList.remove('complete');
    city.value = '';
    city.classList.remove('complete');
    country.value = '';
    country.classList.remove('complete');
    genderMale.classList.remove('B-color');
    genderFemale.classList.remove('B-color');
    listBronze.classList.remove('color');
    listGold.classList.remove('color');
    listSilver.classList.remove('color');
  });

  // display alert
  function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(function () {
      alert.textContent = '';
      alert.classList.remove(`alert-${action}`);
    }, 1000);
  }
})();
