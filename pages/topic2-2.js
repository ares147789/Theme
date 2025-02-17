import Head from "next/head";
import Link from "next/link";

export default function Topic2_2() {
  return (
    <div className="background">
      <Head>
        <title>ส่วนประกอบของโปรแกรม C#</title>
      </Head>
      
      <nav className="navbar">
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
      </nav>
      
      <div className="content">
        <h2>2.2 ส่วนประกอบของโปรแกรม C#</h2>
        <p>ภาษา C# มีโครงสร้างที่ช่วยให้การพัฒนาโปรแกรมเป็นระเบียบ...</p>
        
        <h3>1. Namespace</h3>
        <p>Namespace ทำหน้าที่จัดกลุ่มคลาส...</p>
        <pre className="code-block">{`using System;

namespace MyNamespace
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`}</pre>
        
        <h3>2. Class</h3>
        <p>Class เป็นโครงสร้างที่สำคัญในภาษา C#...</p>
        <pre className="code-block">{`class Car
{
    public string Color { get; set; }
    public void Drive()
    {
        Console.WriteLine("The car is driving");
    }
}`}</pre>
      </div>

      <div className="navigation-buttons">
        <Link href="/courses" className="btn">ย้อนกลับ</Link>
        <Link href="/topic2-3" className="btn">หน้าถัดไป</Link>
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
