let notes = []
  
  const filters = {
    searchText: ''
  }
  
  const notesJSON = localStorage.getItem('notes');
  if(notesJSON !== null){
    notes = JSON.parse(notesJSON);
  }

  // // Create/Update        key       value
  // localStorage.setItem('location', 'Athens'); // saves users location

  // // Read                 key
  // localStorage.getItem('location'); // reads the saves key console.log(localStorage.getItem('location'));

  // // Delete                  key
  // localStorage.removeItem('location'); // deletes the key from the saved data
  // localStorage.clear() // deletes everything no matter what the key is
 
  // const user = {
  //   name: 'Petros',
  //   age : 34
  // }

  // const userJson = JSON.stringify(user);
  // console.log(userJson);
  // localStorage.setItem('user', userJson)

  // const userJson = localStorage.getItem('user');
  // const user = JSON.parse(userJson);
  // console.log(`${user.name} is ${user.age}.`);
  

  const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
  
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        if(note.title.length > 0){
          noteEl.textContent = note.title
        }else{
          noteEl.textContent = 'Unnamed note!'
        }
        document.querySelector('#notes').appendChild(noteEl)
    })
  }
  
  renderNotes(notes, filters)
  
  document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
      title : '',
      body : ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
  })
  
  document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
  })
  
  document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
  })