import Head from "next/head";
import Link from "next/link";

export default function Topic23() {
  return (
    <div className="background">
      <Head>
        <title>การใช้คำสั่งพื้นฐานใน C#</title>
      </Head>
      
      <header className="navbar">
        <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>

      <main className="content">
        <h2>2.3 การใช้คำสั่งพื้นฐานใน C#</h2>
        <p>การเขียนโปรแกรมภาษา C# นั้นเริ่มต้นจากการทำความเข้าใจและใช้คำสั่งพื้นฐานต่างๆ...</p>

        <h3>1. คำสั่งควบคุมการทำงาน (Control Statements)</h3>
        <pre className="code-block">
{`// ตัวอย่างคำสั่ง if-else
int number = 10;
if (number > 5) {
    Console.WriteLine("Number is greater than 5");
} else {
    Console.WriteLine("Number is 5 or less");
}

// ตัวอย่างคำสั่ง switch
int day = 3;
switch (day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}`}
        </pre>

        <h3>2. การวนลูป (Loops)</h3>
        <pre className="code-block">
{`// ตัวอย่างการใช้ for loop
for (int i = 0; i < 5; i++) {
    Console.WriteLine("Iteration " + i);
}

// ตัวอย่างการใช้ while loop
int j = 0;
while (j < 5) {
    Console.WriteLine("Iteration " + j);
    j++;
}`}
        </pre>
      </main>

      <section className="navigation-buttons">
        <Link href="/topic2-2" className="btn">ย้อนกลับ: ส่วนประกอบของโปรแกรม C#</Link>
        <Link href="/pre-quiz2" className="btn">หน้าถัดไป: แบบฝึกหัดก่อนเรียน</Link>
      </section>

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
          display: flex;
          justify-content: center;
          gap: 15px;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
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
