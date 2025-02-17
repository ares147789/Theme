import Head from "next/head";
import Link from "next/link";

export default function Topic3_2() {
  return (  
    <div className="background">
      <Head>
        <title>3.2 ชนิดข้อมูลพื้นฐานใน C#</title>
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
        <h2>3.2 ชนิดข้อมูลพื้นฐานใน C#</h2>
        <p>ในภาษา C# ชนิดข้อมูลพื้นฐานมีความสำคัญมากเพราะเป็นการกำหนดประเภทของข้อมูลที่เราต้องการเก็บในตัวแปร...</p>
        
        <h3>1. <code>int</code> (Integer)</h3>
        <p>ชนิดข้อมูล <code>int</code> ใช้สำหรับเก็บค่าตัวเลขจำนวนเต็ม ตัวอย่างเช่น:</p>
        <pre className="code-block">int number = 10;</pre>
        
        <h3>2. <code>float</code> (Floating Point)</h3>
        <p>ชนิดข้อมูล <code>float</code> ใช้สำหรับเก็บค่าตัวเลขที่มีจุดทศนิยม ตัวอย่างเช่น:</p>
        <pre className="code-block">float temperature = 36.5f;</pre>
        
        <h3>3. <code>double</code> (Double Precision Floating Point)</h3>
        <p>ชนิดข้อมูล <code>double</code> คล้ายกับ <code>float</code> แต่มีความแม่นยำสูงกว่า ตัวอย่างเช่น:</p>
        <pre className="code-block">double price = 99.99;</pre>
        
        <h3>4. <code>char</code> (Character)</h3>
        <p>ชนิดข้อมูล <code>char</code> ใช้สำหรับเก็บตัวอักษรเพียงตัวเดียว เช่น:</p>
        <pre className="code-block">char grade = 'A';</pre>
        
        <h3>5. <code>string</code> (String)</h3>
        <p>ชนิดข้อมูล <code>string</code> ใช้สำหรับเก็บข้อความหรือชุดของตัวอักษร ตัวอย่างเช่น:</p>
        <pre className="code-block">string name = "John";</pre>
        
        <h3>6. <code>bool</code> (Boolean)</h3>
        <p>ชนิดข้อมูล <code>bool</code> ใช้สำหรับเก็บค่าทางตรรกะที่มีค่าเป็น <code>true</code> หรือ <code>false</code> เช่น:</p>
        <pre className="code-block">bool isStudent = true;</pre>
        
        <h3>สรุป</h3>
        <p>ชนิดข้อมูลพื้นฐานใน C# มีความหลากหลายและมีความสำคัญในการพัฒนาซอฟต์แวร์</p>
        
        <div className="navigation-buttons">
          <Link href="/topic3-1" legacyBehavior>
            <a className="btn">ย้อนกลับ: การประกาศตัวแปร</a>
          </Link>
          <Link href="/topic3-3" legacyBehavior>
            <a className="btn">หน้าถัดไป: การแปลงชนิดข้อมูล</a>
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
