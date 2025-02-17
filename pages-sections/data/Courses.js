const courses = [
  {
    title: "1. ภาษา C# คืออะไร",
    description: "C# เป็นภาษาโปรแกรมที่พัฒนาโดย Microsoft และเป็นส่วนหนึ่งของ .NET framework...",
    topics: [
      { title: "1.1 ประวัติความเป็นมาของภาษา C#", link: "/topic1-1" },
      { title: "1.2 ความสำคัญของภาษา C#", link: "/topic1-2" },
      { title: "1.3 การใช้งานภาษา C# ในปัจจุบัน", link: "/topic1-3" },
    ],
    preQuiz: "/pre-quiz1",
    postQuiz: "/post-quiz1",
  },
  {
    title: "2. โครงสร้างโปรแกรม C#",
    description: "เรียนรู้โครงสร้างพื้นฐานของโปรแกรมภาษา C#...",
    topics: [
      { title: "2.1 การเขียนโปรแกรม Hello World", link: "/topic2-1" },
      { title: "2.2 ส่วนประกอบของโปรแกรม C#", link: "/topic2-2" },
      { title: "2.3 การใช้คำสั่งพื้นฐานใน C#", link: "/topic2-3" },
    ],
    preQuiz: "/pre-quiz2",
    postQuiz: "/post-quiz2",
  },
  {
    title: "3. ตัวแปรและชนิดข้อมูล",
    description: "ศึกษาเกี่ยวกับชนิดข้อมูลต่างๆ ในภาษา C#...",
    topics: [
      { title: "3.1 การประกาศตัวแปร", link: "topic3-1" },
      { title: "3.2 ชนิดข้อมูลพื้นฐาน", link: "topic3-2" },
      { title: "3.3 การแปลงชนิดข้อมูล", link: "topic3-3" }
    ],
    preQuiz: "pre-quiz3",
    postQuiz: "post-quiz3"
  },
  {
    title: "4. การควบคุมการทำงาน",
    description: "เรียนรู้การใช้คำสั่งควบคุมการทำงาน เช่น if-else...",
    topics: [
      { title: "4.1 คำสั่ง if-else", link: "topic4-1" },
      { title: "4.2 คำสั่ง switch", link: "topic4-2" },
      { title: "4.3 การใช้ลูปใน C#", link: "topic4-3" }
    ],
    preQuiz: "pre-quiz4.",
    postQuiz: "post-quiz4."
  },
  {
    title: "5. ฟังก์ชันและเมธอด",
    description: "เข้าใจการสร้างและเรียกใช้ฟังก์ชันในภาษา C#...",
    topics: [
      { title: "5.1 การสร้างฟังก์ชัน", link: "topic5-1" },
      { title: "5.2 การส่งพารามิเตอร์", link: "topic5-2" },
      { title: "5.3 การรับค่าจากฟังก์ชัน", link: "topic5-3" }
    ],
    preQuiz: "pre-quiz5",
    postQuiz: "post-quiz5"
  },
  {
    title: "6. อาร์เรย์",
    description: "ศึกษาเกี่ยวกับการใช้อาร์เรย์แบบหนึ่งมิติและหลายมิติใน C#...",
    topics: [
      { title: "6.1 การประกาศและกำหนดค่าอาร์เรย์", link: "topic6-1" },
      { title: "6.2 การเข้าถึงข้อมูลในอาร์เรย์", link: "topic6-2" },
      { title: "6.3 การจัดการข้อมูลในอาร์เรย์", link: "topic6-3" }
    ],
    preQuiz: "pre-quiz6",
    postQuiz: "post-quiz6"
  },
  {
    title: "7. การจัดการข้อผิดพลาด",
    description: "เรียนรู้วิธีการจัดการข้อผิดพลาดในภาษา C#...",
    topics: [
      { title: "7.1 การใช้ try-catch", link: "topic7-1" },
      { title: "7.2 การจัดการข้อผิดพลาดแบบเฉพาะเจาะจง", link: "topic7-2" },
      { title: "7.3 การใช้ finally", link: "topic7-3" }
    ],
    preQuiz: "pre-quiz7",
    postQuiz: "post-quiz7"
  },
  {
    title: "8. การทำงานกับไฟล์",
    description: "ฝึกการเปิด, อ่าน, เขียน, และปิดไฟล์ใน C#...",
    topics: [
      { title: "8.1 การเปิดและปิดไฟล์", link: "topic8-1" },
      { title: "8.2 การอ่านไฟล์ด้วย StreamReader", link: "topic8-2" },
      { title: "8.3 การเขียนไฟล์ด้วย StreamWriter", link: "topic8-3" }
    ],
    preQuiz: "pre-quiz8",
    postQuiz: "post-quiz8"
  },
  {
    title: "9. คลาสและออบเจ็ค",
    description: "ศึกษาเกี่ยวกับ OOP (Object-Oriented Programming) ในภาษา C#...",
    topics: [
      { title: "9.1 การสร้างคลาส", link: "topic9-1" },
      { title: "9.2 การสร้างออบเจ็ค", link: "topic9-2" },
      { title: "9.3 การใช้คุณสมบัติและเมธอดในออบเจ็ค", link: "topic9-3" }
    ],
    preQuiz: "pre-quiz9",
    postQuiz: "post-quiz9"
  },
  {
    title: "10. การสร้างคลาสและออบเจ็คใน C#",
    description: "ศึกษาเกี่ยวกับ OOP (Object-Oriented Programming) ในภาษา C#...",
    topics: [
      { title: "10.1 การสร้างคลาสและออบเจ็คใน C#", link: "topic10-1" },
      { title: "10.2 การกรองและจัดเรียงข้อมูลด้วย LINQ ใน C#", link: "topic10-2" },
      { title: "10.3 การรวมข้อมูลด้วย LINQ ใน C#", link: "topic10-3" }
    ],
    preQuiz: "pre-quiz10",
    postQuiz: "post-quiz10"
  }
];

export default courses;
