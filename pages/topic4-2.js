import Head from "next/head";
import Link from "next/link";

export default function Topic4_2() {
  return (
    <>
      <Head>
        <title>คำสั่ง switch ใน C#</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="navbar">
        <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>

      <main role="main">
        <section className="course-content">
          <h2>4.2 คำสั่ง switch ใน C#</h2>
          <p>
            คำสั่ง <code>switch</code> ใน C# ใช้สำหรับการตรวจสอบค่าของตัวแปรหรือการแสดงเงื่อนไขหลาย ๆ
            แบบที่เป็นไปได้ภายในโปรแกรม คำสั่ง <code>switch</code> ทำให้โค้ดที่มีหลายเงื่อนไขอ่านง่ายและจัดการง่ายขึ้นเมื่อเปรียบเทียบกับการใช้คำสั่ง
            <code>if-else</code> หลาย ๆ ตัว
          </p>

          <h3>โครงสร้างของคำสั่ง switch</h3>
          <pre>
              <code>{`
  switch (ตัวแปรหรือเงื่อนไข) {
    case ค่าที่เป็นไปได้ 1:
      // คำสั่งที่จะดำเนินการเมื่อค่าตรงกับ case นี้
      break;
    case ค่าที่เป็นไปได้ 2:
      // คำสั่งที่จะดำเนินการเมื่อค่าตรงกับ case นี้
      break;
    default:
      // คำสั่งที่จะดำเนินการเมื่อไม่ตรงกับค่าใด ๆ ใน case ข้างต้น
      break;
  }
            </code>
          </pre>

          <h3>ตัวอย่างการใช้งานคำสั่ง switch</h3>
          <pre>
            <code>
  using System;
  class Program {
    static void Main() {
      int day = 3;
      string dayName;

      switch (day) {
        case 1: dayName = "วันจันทร์"; break;
        case 2: dayName = "วันอังคาร"; break;
        case 3: dayName = "วันพุธ"; break;
        case 4: dayName = "วันพฤหัสบดี"; break;
        case 5: dayName = "วันศุกร์"; break;
        case 6: dayName = "วันเสาร์"; break;
        case 7: dayName = "วันอาทิตย์"; break;
        default: dayName = "ไม่พบข้อมูล"; break;
      }

      Console.WriteLine("วันนี้คือ: " + dayName);
    }
  }
             `}</code>
          </pre>
        </section>
      </main>

      <section className="navigation-buttons">
        <Link href="/topic4-1" className="button">ย้อนกลับ: คำสั่ง if-else</Link>
        <Link href="/topic4-3" className="button">หน้าถัดไป: การใช้ลูปใน C#</Link>
      </section>

      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
