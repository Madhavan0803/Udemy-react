import a1 from "../assets/images/a1.jpg"
import a2 from "../assets/images/a2.jpg"
import a3 from "../assets/images/a3.jpg"
import a4 from "../assets/images/a4.jpg"

function CoursesSection() {
    return (
      <div className="r-serious">
      <h1 class="r1">Recommended For you</h1>
      <p>Pick the best fit</p>
      <div class="r2">
        <div class="r3">
          <img src={a1} />
          <h3>2023 Python data vision Master class</h3>
          <p>Maddy</p>
          <p>5.0⭐⭐⭐⭐⭐</p>
          <p>444$ <del>999</del></p>
        </div>
  
        <div class="r3">
          <img src={a2} />
          <h3>Web Development Bootcamp 2023 | Advance</h3>
          <p>Maddy</p>
          <p>4.5 ⭐⭐⭐⭐</p>
          <p>444$ <del>999</del></p>
        </div>
  
        <div class="r3">
          <img src={a3} />
          <h3>Master UI|UX Designing with Figms</h3>
          <p>Maddy</p>
          <p>3.2⭐⭐⭐</p>
          <p>444$ <del>999</del></p>
        </div>
  
        <div class="r3">
          <img src={a4}/>
          <h3>Basic to Advance Core Training</h3>
          <p>Maddy</p>
          <p>4.1⭐⭐⭐⭐</p>
          <p>444$ <del>999</del></p>
        </div>
      </div>
    </div>
    );
  }

  export default CoursesSection