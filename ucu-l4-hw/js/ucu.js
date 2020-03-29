// 1. Submit the form, only if it is valid
//    email is between 5 and 50 chars long                                                ------- done
//    email format is correct                                                             ------- done
//    name has 0 or 2 whitespaces benween words                                           
//    name length is 1 or more chars                                                      ------- done
//    phone length is 12 or more digits                                                   ------- done
//    phone format is correct. Valid formats: "+38032 000 000 00", "+380(32) 000 000 00", "+380(32)-000-000-00", "0380(32) 000 000 00", + any combitaion                                                                     ------- done
//    message is 10 or more characters.                                                   ------- done
//    message must not iclude bad language: ugly, dumm, stupid, pig, ignorant             ------- done
// 2. Validate each input on the fly using onchange event                                 ------- done
// 3. Define re-usable validators: length, format,                                        ------- done  
function validateMessage(event) {
  valid = true;
  if (event['type'] == 'change')
    var messageNode = event.target;
  else
    var messageNode = event.target.elements['message'];
  const messageErrorNode = messageNode.parentNode.querySelector('p.help-block')
  messageErrorNode.innerHTML = '';

  let messageErrors = document.createElement('ul');
  messageErrors.setAttribute("role", "alert");

  lengthNotValidator(messageNode.value.length, [10, -1], messageErrors);

  pattern = /(?:Ugly|dumm|stupid|pig|ignorant)/i;
  // pattern = /[[Uu][Gg][Ll][Yy]]/
  formatNotValidator(messageNode.value, pattern, messageErrors, true);

  if (messageErrors.childElementCount > 0) {
    messageErrorNode.appendChild(messageErrors)
    valid = false;
  }

  if (valid)
    console.log("Message is submitted");
  return valid;
}

function validatePhone(event) {
  valid = true;
  if (event['type'] == 'change')
    var phoneNode = event.target;
  else
    var phoneNode = event.target.elements['phone'];
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block')
  phoneErrorNode.innerHTML = '';

  let phoneErrors = document.createElement('ul');
  phoneErrors.setAttribute("role", "alert");

  lengthNotValidator(phoneNode.value.length, [12, -1], phoneErrors);

  pattern = /^[\+0]\d{3}(?:\(\d{2}\)|\d{2})(?:\W\d{2,3}){3}/;
  formatNotValidator(phoneNode.value, pattern, phoneErrors);

  if (phoneErrors.childElementCount > 0) {
    phoneErrorNode.appendChild(phoneErrors)
    valid = false;
  }

  if (valid)
    console.log("Phone is submitted");
  return valid;
}

function validateName(event) {
  valid = true;
  if (event['type'] == 'change')
    var nameNode = event.target;
  else
    var nameNode = event.target.elements['name'];
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block');
  nameErrorNode.innerHTML = '';

  let nameErrors = document.createElement('ul');
  nameErrors.setAttribute("role", "alert");

  lengthNotValidator(nameNode.value.length, [1, -1], nameErrors);

  pattern = /^(?:\w+?(?:\s[2])?)+(?<=.*\w)$/;
  formatNotValidator(nameNode.value, pattern, nameErrors);

  if (nameErrors.childElementCount > 0) {
    nameErrorNode.appendChild(nameErrors)
    valid = false;
  }

  if (valid)
    console.log("Name is submitted");
  return valid;
}

function validateEmail(event) {
  valid = true;
  if (event['type'] == 'change')
    var emailNode = event.target;
  else
    var emailNode = event.target.elements['email'];
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
  emailErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul');
  emailErrors.setAttribute("role", "alert");

  lengthNotValidator(emailNode.value.length, [5, 50], emailErrors);

  pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formatNotValidator(emailNode.value, pattern, emailErrors);

  if (emailErrors.childElementCount > 0) {
    emailErrorNode.appendChild(emailErrors)
    valid = false;
  }

  if (valid)
    console.log("Email is submitted");
  return valid;
}

function validateMe(event) {
 console.log(event.target);
  event.preventDefault();
  validate = validateEmail(event);
  validate &= validateName(event);
  validate &= validatePhone(event);
  validate &= validateMessage(event);
  if (validate)
    event.target.submit();
  return validate;
}

function formatNotValidator(format, pattern, errors, flag = false) {
  if (!flag) {
    if (!format.match(pattern))
      createError("Format is not correct", errors);
  }
  else
    if (format.match(pattern))
      createError("Format is not correct", errors);
}

// -1 for non-existance
function lengthNotValidator(length, values, errors) {
  if (values[0] == -1) {
    if (length > values[1])
      createError(`You input is longer than ${values[1]} symbols`, errors);
  }
  else if (values[1] == -1) {
    if (length < values[0])
      createError(`You input is shorter than ${values[0]} symbols`, errors);
  }
  else if (values[0] >= length || length >= values[1])
    createError(`You input should be between ${values[0]} and ${values[1]} symbols`, errors);
}

function createError(text, errors) {
  let li = document.createElement('li');
  li.innerText = text;
  errors.appendChild(li)
}