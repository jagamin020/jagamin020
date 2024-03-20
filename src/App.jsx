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
        <ImageProfile image="/src/assets/ohm2.png" />

        
        

        <Title title="ประวัติส่วนตัว">
          
     
          <p>ชื่อ จักมินทร์ ก้านศรีรัตน์</p>
          <p>ชื่อเล่น โอม</p>
          <p>อายุ 21 ปี</p>
          <p>วันเกิด {moment("2002/10/29").format("D MMM YYYY")}</p>
          
        </Title>

        <Title title="ช่องทางติดต่อ">
          <p>เบอร์โทร  093-294-0893</p>
          <p>ไลน์ ohmmycz</p> 
          <p>เฟชบุ๊ค Ohm jaggamin</p> 
          <p>อีเมล ohmmy1012545@gmail.com</p> 
        </Title>

        <button onclick="window.location.href='#'">ดูเพิ่มเติม</button>


      </div>



      <div className="rightPort">
        <Title title="การศึกษา">
          <p>กำลังศึกษา ปริญญาตรีชั้นปีที่ 3 ที่ มหาวิทยาลัยราชภัฎสวนสุนนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ </p>
        </Title>

        <Title title="เกรดเฉลี่ย">
          <p>GPA เกรดเฉลี่ยสะสม 3.75</p>
        </Title>

        <Title title="ทักษะความสมารถ">
          <p>การประกอบคอมพื้นฐาน</p>
          <p>การเขียน โค้ด html พื้นฐาน</p>
          <p>การออกแบบเว็บไซต์</p>
          <p>การต่อวงจรไฟ iot</p>
          
        </Title>
        <button onclick="window.location.href='#'">ดูเพิ่มเติม</button>
        

        
      </div>
    </main>
  )
}

export default App
