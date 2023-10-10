const localStorageKey = 'saved-name'

const nameReference = document.getElementById('nameInput')

const saveName = document.getElementById('save-name')
const removeName = document.getElementById('remove-name')

const save = function () {
  const content = nameReference.value

  localStorage.setItem(localStorageKey, content)
  nameReference.value = ''
}

const reset = function () {
  if (window.confirm('Cancellare tutto?')) {
    nameReference.value = ''
    localStorage.removeItem(localStorageKey)
  }
}

saveName.addEventListener('click', save)
removeName.addEventListener('click', reset)
