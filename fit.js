function addActivity(type) {
    const inputId = type + 'Input';
    const listId = type + 'List';
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
  
    if (input.value.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = input.value;
      list.appendChild(li);
      input.value = '';
    } else {
      alert('Please enter a valid entry.');
    }
  }
  
