function deleteElement(event) {
  const element = event.target.parentNode;
  event.target.classList.contains('js-control-cross') && element.parentNode.removeChild(element);
}

export default deleteElement;
