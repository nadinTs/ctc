function hideWarningForm(event) {
    if (event.target.classList.contains('js-form')) {
        event.target.classList.remove('showForm')
    }
}

export default hideWarningForm;
