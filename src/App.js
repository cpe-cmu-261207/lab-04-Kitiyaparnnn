import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
import 'bootstrap/dist/css/bootstrap.min.css';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
  integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({ name: '', code: '', creditt: ' ', gradee: '0.00' });
  const [GPA, setGPA] = useState(0.00);


  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(decourse) {
    // TODO
    var calgrade = 0
    var calcredit = 0
    var result = 0
    decourse.forEach((objjj) => {
      switch (objjj.gradee) {
        case 'A':
          calgrade = 4.00
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'B+':
          calgrade = 3.50
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'B':
          calgrade = 3.00
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'C+':
          calgrade = 2.50
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'C':
          calgrade = 2.00
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'D+':
          calgrade = 1.50
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'D':
          calgrade = 1.00
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
        case 'F':
          calgrade = 0.00
          calcredit += Number(objjj.creditt)
          result += (calgrade * objjj.creditt)
          break
      }
      // calcredit += Number(objjj.creditt)
      // result += (calgrade * objjj.creditt)
    });
    if (decourse.length == 0 && decourse) {
      setGPA(0.00)
    }
    else {
      setGPA(result / calcredit)
    }

  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    const add_course = [...myCourses, inputData]
    if (inputData.name == "" || inputData.code == "" || inputData.creditt == "" || inputData.gradee == "") { alert("Please input course information") }
    else if (inputData.code.length != 6) {
      alert("course code must has 6 character")
    }
    else {
      setMyCourse(add_course)
    }
    // recalculate GPA
    calculateGPA(add_course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(name) {
    // TODO
    const decourse = myCourses.filter(function (objj) {
      return objj.name != name;
    });
    setMyCourse(decourse)
    calculateGPA(decourse)
  }


  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="space-x-4 mine">
        <div>
          <h1 className="text-2xl my-3">My courses</h1>
          {/* TODO display courses */}
          {myCourses.map((obj) => {
            const deletebtn = document.createElement('button')
            deletebtn.innerHTML = 'x'
            deletebtn.onclick = () => { onDeleteCourse(obj.name) }
            return <CourseCard
              vname={obj.name}
              vcode={obj.code}
              vcredit={obj.creditt}
              vgrade={obj.gradee}
              del={onDeleteCourse} />
          })}
        </div>

        <div className="grade">
          <h2 className="temp">GPA : {GPA.toFixed(2)}</h2>
        </div>
      </div>



      {/* TODO add course input form */}
      <form onSubmit={addCourse}>
        <div class="row">
          <div class="col">
            <label for="name">Name</label> <br />
            <input class="rounded-full ; border" id="name" type="text"
              value={inputData.name}
              onChange={(e) => {
                setInputData({ ...inputData, name: e.target.value })
              }} />
          </div>
          <div class="col">
            <label for="code">Code</label><br />
            <input class="rounded-full ; border" id="code" type="text"
              value={inputData.code}
              onChange={(e) => {
                setInputData({ ...inputData, code: e.target.value })
              }} />
          </div>
          <div class="col">
            <label>Credit</label><br />
            <select name="credit" class="rounded-full ; border"
              value={inputData.creditt}
              onChange={(e) => {
                setInputData({ ...inputData, creditt: e.target.value })
              }}>
              <option selected class="italic">Choose credit</option>
              {credit.map((item) => (<option key={item} value={item}>{item}</option>))}
            </select>
          </div>
          <div class="col">
            <label>Grade</label><br />
            <select name="grade" class="rounded-full ; border" value={inputData.gradee}
              onChange={(e) => {
                setInputData({ ...inputData, gradee: e.target.value })
              }}>
              <option selected class="italic">Choose grade</option>
              {grade.map((item) => (<option key={item} value={item}>{item}</option>))}
            </select>
          </div>
          <div class="grade">
            <button className="button grade"
              type="submit"
              onclick={(e) => console.log(myCourses)}><div className="plus">+</div></button>
          </div>
        </div>
      </form>
      {/* TODO display calculated GPA */}
      {/* <div class="shadow-md ; p-5 rounded-3xl m-2">
        <h3 class="text-right ; text-gray-600">
          {GPA.toFixed(2)}</h3>
      </div> */}
    </div>
  );
}

export default App;
