function checkedHobby(element) {
  const div = document.createElement('div');
  div.className = 'checked-hobby';
  div.innerHTML = `<span class="checked-hobby-icon"></span>Добавленно в ваши увлечения`;
  element.appendChild(div);
};

export default checkedHobby;
