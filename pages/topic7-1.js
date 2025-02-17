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
            <h2>7.1 การใช้ try-catch ใน C#</h2>
            <p>ใน C# การใช้ <code>try-catch</code> เป็นวิธีการจัดการข้อผิดพลาดที่อาจเกิดขึ้นระหว่างการทำงานของโปรแกรม เมื่อมีข้อผิดพลาดเกิดขึ้นในบล็อก <code>try</code> โปรแกรมจะกระโดดไปทำงานในบล็อก <code>catch</code> ที่ตรงกับข้อผิดพลาดนั้นๆ</p>
    
            <h3>ตัวอย่างการใช้ try-catch</h3>
            <pre><code>{`
    try {
        int[] numbers = {1, 2, 3};
        Console.WriteLine(numbers[5]); // เกิดข้อผิดพลาดเนื่องจากเข้าถึงดัชนีที่ไม่มีในอาร์เรย์
    } catch (IndexOutOfRangeException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เมื่อโปรแกรมพยายามเข้าถึงดัชนีที่ไม่มีในอาร์เรย์ จะเกิดข้อผิดพลาด <code>IndexOutOfRangeException</code> ซึ่งจะถูกจับโดยบล็อก <code>catch</code> และแสดงข้อความข้อผิดพลาด</p>
    
            <h3>1. การใช้ try-catch หลายบล็อกเพื่อจับข้อผิดพลาดหลายประเภท</h3>
            <p>ใน C# เราสามารถใช้ <code>try-catch</code> หลายบล็อกเพื่อตรวจจับข้อผิดพลาดหลายประเภท ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        int number = int.Parse("ABC"); // พยายามแปลงสตริงเป็นจำนวนเต็ม
    } catch (FormatException ex) {
        Console.WriteLine("รูปแบบไม่ถูกต้อง: " + ex.Message);
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ จะเกิด <code>FormatException</code> เมื่อพยายามแปลงสตริง "ABC" เป็นจำนวนเต็ม และจะถูกจับโดยบล็อก <code>catch</code> ที่ตรงกับข้อผิดพลาดนี้</p>
    
            <h3>2. การใช้ finally ใน try-catch</h3>
            <p>ในบางกรณี เราต้องการทำงานบางอย่างไม่ว่าจะเกิดข้อผิดพลาดหรือไม่ เราสามารถใช้บล็อก <code>finally</code> เพื่อให้คำสั่งในบล็อกนี้ทำงานเสมอ ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        int result = 10 / 0; // การหารด้วยศูนย์จะทำให้เกิดข้อผิดพลาด
    } catch (DivideByZeroException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    } finally {
        Console.WriteLine("ทำงานในบล็อก finally");
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เมื่อเกิดข้อผิดพลาดจากการหารด้วยศูนย์ ข้อความในบล็อก <code>catch</code> จะถูกแสดง หลังจากนั้นบล็อก <code>finally</code> จะทำงานเสมอ</p>
    
            <h3>3. การสร้างข้อผิดพลาดเอง (throw)</h3>
            <p>ในบางกรณี เราสามารถสร้างข้อผิดพลาดขึ้นมาเองโดยใช้คำสั่ง <code>throw</code> ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        int age = -5;
        if (age < 0) {
            throw new ArgumentOutOfRangeException("อายุไม่สามารถเป็นค่าติดลบได้");
        }
    } catch (ArgumentOutOfRangeException ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้คำสั่ง <code>throw</code> เพื่อสร้างข้อผิดพลาดเอง เมื่อค่าอายุติดลบและข้อความข้อผิดพลาดจะถูกส่งออกไป</p>
    
            <h3>4. การจับข้อผิดพลาดแบบทั่วไปด้วย Exception</h3>
            <p>เราสามารถจับข้อผิดพลาดที่ไม่เจาะจงได้ด้วย <code>Exception</code> ซึ่งเป็นคลาสพื้นฐานของข้อผิดพลาดทั้งหมด ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        string input = null;
        Console.WriteLine(input.Length); // จะเกิดข้อผิดพลาดเนื่องจาก input เป็น null
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ ข้อผิดพลาดใดๆ ที่เกิดขึ้นภายในบล็อก <code>try</code> จะถูกจับโดยบล็อก <code>catch</code> ที่ใช้ <code>Exception</code> ซึ่งจะจัดการข้อผิดพลาดทั้งหมดที่เกิดขึ้น</p>
    
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic6-3.html" class="button">ย้อนกลับ: การจัดการข้อมูลในอาร์เรย์</a>
            <a href="topic7-2" class="button">หน้าถัดไป: การจัดการข้อผิดพลาดแบบเฉพาะเจาะจง</a>
        </section>
   

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
    </>
    );
    }