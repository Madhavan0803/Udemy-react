import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ImageSection from './components/ImageSection';
import SkillSection from './components/SkillSection';
import Skill from './components/Skill';
import Learners from './components/Learners';
import CoursesSection from './components/CoursesSection';
import Topics from './components/Topics';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App(){
    return(
     <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <ImageSection></ImageSection>
      <SkillSection></SkillSection>
      <Skill></Skill>
      <Learners></Learners>
      <CoursesSection></CoursesSection>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
     </div>
    )
}

export default App