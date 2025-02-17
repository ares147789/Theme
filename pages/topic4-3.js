import Head from "next/head";
import Link from "next/link";

export default function Topic4_3() {
  return (
    <>
      <Head>
        <title>การใช้ลูปใน C#</title>
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
          <h2>4.3 การใช้ลูปใน C#</h2>
          <p>การใช้ลูป (Loop) ในภาษา C# เป็นเทคนิคที่ช่วยให้โปรแกรมสามารถทำงานซ้ำๆ ได้...</p>
          <h3>การใช้ลูป for</h3>
          <p>ลูป <code>for</code> เหมาะสำหรับการทำงานซ้ำๆ ที่จำนวนรอบเป็นที่รู้จักล่วงหน้า...</p>
          <pre><code>{`using System;

class Program {
    static void Main() {
        for (int i = 1; i <= 5; i++) {
            Console.WriteLine("รอบที่: " + i);
        }
    }
}`}</code></pre>
          <h3>การใช้ลูป while</h3>
          <p>ลูป <code>while</code> เหมาะสำหรับสถานการณ์ที่จำนวนรอบการทำงานไม่สามารถระบุได้ชัดเจน...</p>
          <pre><code>{`using System;

class Program {
    static void Main() {
        int i = 1;
        while (i <= 5) {
            Console.WriteLine("รอบที่: " + i);
            i++;
        }
    }
}`}</code></pre>
          <h3>การใช้ลูป do-while</h3>
          <p>ลูป <code>do-while</code> คล้ายกับลูป <code>while</code> แต่แตกต่างตรงที่...</p>
          <pre><code>{`using System;

class Program {
    static void Main() {
        int i = 1;
        do {
            Console.WriteLine("รอบที่: " + i);
            i++;
        } while (i <= 5);
    }
}`}</code></pre>
          <h3>การใช้ลูป foreach</h3>
          <p>ลูป <code>foreach</code> ใช้สำหรับการวนซ้ำผ่านคอลเลกชันของข้อมูล...</p>
          <pre><code>{`using System;

class Program {
    static void Main() {
        string[] fruits = { "Apple", "Banana", "Cherry" };
        foreach (string fruit in fruits) {
            Console.WriteLine(fruit);
        }
    }
}`}</code></pre>
        </section>
      </main>
      <section className="navigation-buttons">
        <Link href="/topic4-2" className="button">ย้อนกลับ: คำสั่ง switch</Link>
        <Link href="/pre-quiz4" className="button">หน้าถัดไป: แบบฝึกหัดก่อนเรียน</Link>
      </section>
      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
