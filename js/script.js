/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students.
*/

function showPage(list, page) {
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';
  for (let i = 0; i < list.length; i ++) {
    if (i >= startIndex && i < endIndex) {
      const studentItem = `
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
          <h3>${list[i].name.title + ' ' + list[i].name.first + ' ' + list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
      </li>
      `
    studentList.insertAdjacentHTML('beforeend', studentItem);
    }
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons.
It will also give the page button corresponding to the actively display data to be highlighted and styled as 'active'.
*/
 
function addPagination() {
  const numOfPages = Math.ceil(data.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';
  for (let i = 1; i <= numOfPages; i ++) {
    const pageButton = `<li><button type="button">${i}</button>`
    linkList.insertAdjacentHTML('beforeend', pageButton);
  }
  document.querySelector('button').className = 'active';
  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      document.querySelector('.active').className = ''; //this ensures that the active class won't be on multiple buttons at once
      e.target.className = 'active';
      showPage(data, e.target.textContent); //The text content in this case is the page number
    }
  });
}

// Call functions
  showPage(data, 1);
  addPagination(data);
