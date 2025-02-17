import Head from "next/head";
import Link from "next/link";

export default function Topic5_1() {
  return (
    <>
      <Head>
        <title>Topic 5.1 - Your Course</title>
      </Head>
      <header  className="navbar">
      <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>
      <main role="main">
        <section class="course-content">
            <h2>7.2 การจัดการข้อผิดพลาดแบบเฉพาะเจาะจงใน C#</h2>
            <p>ในบางสถานการณ์ คุณอาจต้องการจัดการข้อผิดพลาดเฉพาะเจาะจง ซึ่งสามารถทำได้โดยการใช้บล็อก <code>catch</code> หลายบล็อกเพื่อจัดการกับข้อผิดพลาดที่แตกต่างกัน</p>
    
            <h3>ตัวอย่างการจัดการข้อผิดพลาดแบบเฉพาะเจาะจง</h3>
            <pre><code>{`
    try {
        int x = int.Parse("abc"); // เกิดข้อผิดพลาดในการแปลง string เป็น int
    } catch (FormatException ex) {
        Console.WriteLine("เกิดข้อผิดพลาดในการแปลงข้อมูล: " + ex.Message);
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาดทั่วไป: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ บล็อก <code>catch</code> แรกจะจัดการข้อผิดพลาดที่เกิดจากการแปลงข้อมูลผิดพลาด (FormatException) ในขณะที่บล็อก <code>catch</code> ที่สองจะจัดการข้อผิดพลาดทั่วไปอื่นๆ</p>
    
            <h3>1. การจัดการข้อผิดพลาดแบบเฉพาะเจาะจงที่เกิดจากการหารด้วยศูนย์ (DivideByZeroException)</h3>
            <p>ในกรณีที่เกิดการหารด้วยศูนย์ คุณสามารถจับข้อผิดพลาดโดยใช้ <code>DivideByZeroException</code> ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        int result = 10 / 0; // เกิดข้อผิดพลาดในการหารด้วยศูนย์
    } catch (DivideByZeroException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: ไม่สามารถหารด้วยศูนย์ได้");
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาดทั่วไป: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ข้อผิดพลาดที่เกิดจากการหารด้วยศูนย์จะถูกจับโดยบล็อก <code>catch</code> ที่จัดการกับ <code>DivideByZeroException</code></p>
    
            <h3>2. การจัดการข้อผิดพลาดที่เกี่ยวข้องกับอาร์เรย์ (IndexOutOfRangeException)</h3>
            <p>ข้อผิดพลาดที่เกี่ยวกับการเข้าถึงดัชนีของอาร์เรย์นอกช่วงสามารถจัดการได้ด้วย <code>IndexOutOfRangeException</code> ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        int[] numbers = {1, 2, 3};
        Console.WriteLine(numbers[5]); // เกิดข้อผิดพลาดเพราะดัชนีอยู่นอกช่วง
    } catch (IndexOutOfRangeException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: ดัชนีอยู่นอกช่วงของอาร์เรย์");
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาดทั่วไป: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เมื่อพยายามเข้าถึงดัชนีที่อยู่นอกช่วงของอาร์เรย์ จะเกิดข้อผิดพลาดที่ถูกจัดการด้วย <code>IndexOutOfRangeException</code></p>
    
            <h3>3. การจัดการข้อผิดพลาดที่เกิดจากการแปลงประเภทข้อมูล (InvalidCastException)</h3>
            <p>ข้อผิดพลาดที่เกิดจากการแปลงประเภทข้อมูลไม่ถูกต้องสามารถจัดการได้ด้วย <code>InvalidCastException</code> ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        object obj = "Hello";
        int number = (int)obj; // เกิดข้อผิดพลาดเนื่องจากแปลงประเภทผิด
    } catch (InvalidCastException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: ไม่สามารถแปลงประเภทข้อมูลได้");
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาดทั่วไป: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ การแปลงประเภทข้อมูลที่ไม่ถูกต้องจะทำให้เกิดข้อผิดพลาดที่จัดการได้ด้วย <code>InvalidCastException</code></p>
    
            <h3>4. การจัดการข้อผิดพลาดเกี่ยวกับการอ่านไฟล์ (IOException)</h3>
            <p>เมื่อมีปัญหาในการอ่านไฟล์ เช่น ไฟล์ไม่พบหรือไม่สามารถเข้าถึงไฟล์ได้ คุณสามารถจับข้อผิดพลาดนี้ด้วย <code>IOException</code> ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    try {
        string text = File.ReadAllText("nonexistentfile.txt"); // ไฟล์ไม่มีอยู่
    } catch (FileNotFoundException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: ไม่พบไฟล์ที่ต้องการอ่าน");
    } catch (IOException ex) {
        Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาดทั่วไป: " + ex.Message);
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ ข้อผิดพลาดจากการอ่านไฟล์จะถูกจับโดย <code>FileNotFoundException</code> หากไฟล์ไม่พบ หรือ <code>IOException</code> หากเกิดข้อผิดพลาดทั่วไปในการอ่านไฟล์</p>
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic7-1.html" class="button">ย้อนกลับ: การใช้ try-catch</a>
            <a href="topic7-3.html" class="button">หน้าถัดไป: การใช้ finally</a>
        </section>

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
    </>
    );
    }