import Head from "next/head";
import Link from "next/link";

export default function Topic3_1() {
  return (
    <div className="background">
      <Head>
        <title>3.1 การประกาศตัวแปรใน C#</title>
      </Head>
      
      <header className="navbar">
        <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>
      
      <div className="content">
        <h2>3.1 การประกาศตัวแปรใน C#</h2>
        <p>ในภาษา C# การประกาศตัวแปรเป็นขั้นตอนพื้นฐานที่สำคัญมากสำหรับการเก็บค่าหรือข้อมูลที่เราต้องการใช้ในโปรแกรม ตัวแปรใน C# จะต้องถูกกำหนดชนิดข้อมูล (data type) เพื่อระบุประเภทของข้อมูลที่สามารถเก็บได้ เช่น ตัวเลข ข้อความ หรือค่าทางตรรกะ การประกาศตัวแปรใน C# มีความยืดหยุ่นสูงและสามารถทำได้หลายรูปแบบ โดยแต่ละรูปแบบจะเหมาะสมกับกรณีการใช้งานที่แตกต่างกัน</p>
        
        <h3>การประกาศตัวแปรด้วยชนิดข้อมูลพื้นฐาน</h3>
        <p>ชนิดข้อมูลพื้นฐานใน C# ประกอบด้วย <code>int</code> (จำนวนเต็ม), <code>float</code> (ตัวเลขทศนิยม), <code>double</code> (ตัวเลขทศนิยมที่มีความแม่นยำสูง), <code>char</code> (ตัวอักษร), <code>string</code> (ข้อความ), และ <code>bool</code> (ค่าทางตรรกะ: true หรือ false) การประกาศตัวแปรที่ใช้ชนิดข้อมูลพื้นฐานมีตัวอย่างดังนี้:</p>
        <pre className="code-block">int age = 25;
float temperature = 36.6f;</pre>
        
<h3>ตัวอย่างการใช้งานตัวแปรในโปรแกรม</h3>
<pre className="code-block">
{`using System;
class Program {
  static void Main() {
    int age = 20;
    string name = "John";
    float grade = 3.75f;

    Console.WriteLine("ชื่อนักเรียน: " + name);
    Console.WriteLine("อายุ: " + age + " ปี");
    Console.WriteLine("เกรดเฉลี่ย: " + grade);
  }
}`}
</pre>

        <div className="navigation-buttons">
          <Link href="/topic2-3" legacyBehavior>
            <a className="btn">ย้อนกลับ: การใช้คำสั่งพื้นฐานใน C#</a>
          </Link>
          <Link href="/topic3-2" legacyBehavior>
            <a className="btn">หน้าถัดไป: ชนิดข้อมูลพื้นฐาน</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .background {
          background-image: url('/your-image.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: white;
          font-family: 'Poppins', sans-serif;
          padding: 20px;
        }

        .navbar {
          width: 100%;
          display: flex;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .nav-link {
          color: #8e44ad;
          font-size: 18px;
          font-weight: bold;
          margin: 0 15px;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: #d35400;
        }

        .content {
          max-width: 70%;
          padding: 30px;
          background: rgba(0, 166, 255, 0.9);
          border-radius: 15px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .code-block {
          background: #1e1e1e;
          padding: 12px;
          border-radius: 8px;
          text-align: left;
          white-space: pre-wrap;
          font-family: "Courier New", monospace;
          color: #00ff99;
          font-size: 14px;
          overflow-x: auto;
        }

        .navigation-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }

        .btn {
          display: inline-block;
          padding: 12px 24px;
          background-color: #3498db;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
        }

        .btn:hover {
          background-color: #2980b9;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
