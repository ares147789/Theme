import Head from "next/head";
import Link from "next/link";

export default function Topic10_2() {
  return (
    <>
      <Head>
        <title>Topic 10.2 - การกรองและจัดเรียงข้อมูลด้วย LINQ ใน C#</title>
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
        <section class="course-content">
            <h2>10.3 การรวมข้อมูลด้วย LINQ ใน C#</h2>
            <p>การรวมข้อมูล (Aggregation) ด้วย LINQ ช่วยให้เราสามารถคำนวณค่า เช่น การหาผลรวม, ค่าเฉลี่ย, หรือค่ามากที่สุด จากชุดข้อมูลได้อย่างง่ายดาย</p>

            <h3>ตัวอย่างการรวมข้อมูลด้วย LINQ</h3>
            <pre>
                 <code>{`
using System;
using System.Linq;

class Program {
    static void Main() {
        int[] numbers = { 2, 4, 6, 8, 10 };

        // การหาผลรวมของตัวเลขในอาร์เรย์
        int sum = numbers.Sum();
        Console.WriteLine("ผลรวมของตัวเลขในอาร์เรย์: " + sum);

        // การหาค่าเฉลี่ยของตัวเลขในอาร์เรย์
        double average = numbers.Average();
        Console.WriteLine("ค่าเฉลี่ยของตัวเลขในอาร์เรย์: " + average);

        // การหาค่ามากที่สุดในอาร์เรย์
        int max = numbers.Max();
        Console.WriteLine("ค่ามากที่สุดในอาร์เรย์: " + max);
    }
}
            `}</code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ ในการหาผลรวม, ค่าเฉลี่ย, และค่ามากที่สุดของตัวเลขในอาร์เรย์</p>
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic10-2.html" class="button">ย้อนกลับ: การกรองและจัดเรียงข้อมูลด้วย LINQ</a>
            <a href="pre-quiz10.html" class="button">หน้าถัดไป: แบบทดสอบก่อนเรียน</a>
        </section>

        <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
      </>
  );
}
