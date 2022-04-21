import { Serie } from './serie';

import { series } from './data.js';

let coursesTbody: HTMLElement = document.getElementById('series')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();

renderCoursesInTable(series);

totalCreditElm.innerHTML = `${getTotalCredits(series)}`


function renderCoursesInTable(courses: Serie[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.id}</td>
                           <td>${course.name}</td>
                           <td>${course.channel}</td>
                           <td>${course.seasons}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Serie[] = searchCourseByName(text, series);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Serie[]) {
  return nameKey === '' ? series : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Serie[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.seasons);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}