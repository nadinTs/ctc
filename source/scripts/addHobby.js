function addHobby(element, userList) {
  const text = element.value ?  element.value : element.querySelector('.js-text').innerHTML;

  const li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = `<div class="control-cross js-control-cross"></div>
          <p class="text js-text">${text}</p>`;
  userList.appendChild(li);
}

export default addHobby;
