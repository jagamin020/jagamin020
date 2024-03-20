import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Jagamin Kansrirat (OHM)">
          <h3>ตำแหน่ง : Frontend</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/10/29").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66877543002
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202020@ssru.ac.th</p>
          <p>www.s64122202020@ssru.ac.th.com</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>กำลังศึกษา ปริญญาตรีชั้นปีที่ 3 ที่ มหาวิทยาลัยราชภัฎสวนสุนนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ </p>
        </Title>

        <Title title="Work Experience">
          <p>ประสบการณ์การทำ งานพาร์ทไทม์ โรงพิมพ์,สกี้ตี๋น้อย</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>Git</p>
        </Title>
      </div>
    </main>
  )
}

export default App
