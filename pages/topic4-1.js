import Head from "next/head";
import Link from "next/link";


export default function Topic4_1() {
  return (
    <>
      <Head>
        <title>คำสั่ง if-else ใน C#</title>
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
          <h2>4.1 คำสั่ง if-else ใน C#</h2>
          <p>คำสั่ง <code>if-else</code> ใน C# เป็นคำสั่งที่ใช้ในการตัดสินใจภายในโปรแกรม ...</p>
          <h3>โครงสร้างของคำสั่ง if-else</h3>
          <pre><code>{`if (เงื่อนไข) {
    // คำสั่งเมื่อเงื่อนไขเป็นจริง
} else {
    // คำสั่งเมื่อเงื่อนไขเป็นเท็จ
}`}</code></pre>
          <h3>ตัวอย่างการใช้งานคำสั่ง if-else</h3>
          <pre><code>{`using System;

class Program {
    static void Main() {
        int score = 85;
        if (score >= 80) {
            Console.WriteLine("คุณได้เกรด A");
        } else if (score >= 70) {
            Console.WriteLine("คุณได้เกรด B");
        } else if (score >= 60) {
            Console.WriteLine("คุณได้เกรด C");
        } else if (score >= 50) {
            Console.WriteLine("คุณได้เกรด D");
        } else {
            Console.WriteLine("คุณได้เกรด F");
        }
    }
}`}</code></pre>
          <h3>การใช้คำสั่ง if-else ซ้อนกัน</h3>
          <pre><code>{`using System;

class Program {
    static void Main() {
        int x = 10;
        int y = 20;
        if (x > y) {
            Console.WriteLine("x มากกว่า y");
        } else {
            if (x == y) {
                Console.WriteLine("x เท่ากับ y");
            } else {
                Console.WriteLine("x น้อยกว่า y");
            }
        }
    }
}`}</code></pre>
          <h3>ตัวอย่างเพิ่มเติม</h3>
          <p>ตรวจสอบตัวเลขเป็นคู่หรือคี่:</p>
          <pre><code>{`using System;

class Program {
    static void Main() {
        int number = 15;
        if (number % 2 == 0) {
            Console.WriteLine(number + " เป็นเลขคู่");
        } else {
            Console.WriteLine(number + " เป็นเลขคี่");
        }
    }
}`}</code></pre>
        </section>
      </main>
      <section className="navigation-buttons">
        <Link href="/topics/topic3-3" className="button">ย้อนกลับ: การแปลงชนิดข้อมูล</Link>
        <Link href="/topics/topic4-2" className="button">หน้าถัดไป: คำสั่ง switch ใน C#</Link>
      </section>
      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
