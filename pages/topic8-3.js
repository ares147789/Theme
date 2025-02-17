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
            <h2>8.3 การเขียนไฟล์ด้วย StreamWriter ใน C#</h2>
            <p>การเขียนข้อมูลลงในไฟล์ใน C# สามารถทำได้โดยใช้คลาส <code>StreamWriter</code> ซึ่งช่วยให้การเขียนข้อมูลเป็นเรื่องง่ายและมีประสิทธิภาพ</p>
    
            <h3>ตัวอย่างการเขียนไฟล์ด้วย StreamWriter</h3>
            <pre><code>{`
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamWriter writer = new StreamWriter("output.txt")) {
                    writer.WriteLine("นี่คือบรรทัดแรกในไฟล์");
                    writer.WriteLine("นี่คือบรรทัดที่สองในไฟล์");
                    Console.WriteLine("ข้อมูลถูกเขียนลงไฟล์เรียบร้อยแล้ว");
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ โปรแกรมจะเขียนข้อความสองบรรทัดลงในไฟล์ <code>output.txt</code> โดยใช้ <code>StreamWriter</code></p>
    
            <h3>1. การเขียนข้อมูลต่อท้ายไฟล์ที่มีอยู่แล้ว</h3>
            <p>ในบางกรณี เราต้องการเพิ่มข้อมูลลงในไฟล์ที่มีอยู่แล้วโดยไม่เขียนทับข้อมูลเก่า สามารถทำได้โดยใช้พารามิเตอร์ <code>true</code> ในการเปิดไฟล์เพื่อเขียนข้อมูลต่อท้าย:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamWriter writer = new StreamWriter("output.txt", true)) {
                    writer.WriteLine("นี่คือข้อมูลใหม่ที่ถูกเพิ่มเข้ามา");
                    Console.WriteLine("ข้อมูลถูกเขียนต่อท้ายไฟล์เรียบร้อยแล้ว");
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ข้อมูลใหม่จะถูกเพิ่มต่อท้ายในไฟล์ <code>output.txt</code> โดยไม่ลบข้อมูลเก่า</p>
    
            <h3>2. การเขียนข้อมูลที่รับจากผู้ใช้ลงในไฟล์</h3>
            <p>หากต้องการเขียนข้อมูลที่รับจากผู้ใช้ลงในไฟล์ สามารถใช้คำสั่ง <code>Console.ReadLine()</code> เพื่อรับข้อมูลจากผู้ใช้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamWriter writer = new StreamWriter("user_input.txt")) {
                    Console.WriteLine("กรุณาใส่ข้อมูลที่ต้องการบันทึกลงในไฟล์:");
                    string userInput = Console.ReadLine();
                    writer.WriteLine(userInput);
                    Console.WriteLine("ข้อมูลถูกบันทึกลงในไฟล์เรียบร้อยแล้ว");
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ข้อมูลที่ผู้ใช้ป้อนเข้ามาจะถูกเขียนลงในไฟล์ <code>user_input.txt</code></p>
    
            <h3>3. การเขียนข้อมูลโดยระบุการเข้ารหัส (Encoding)</h3>
            <p>เมื่อทำงานกับไฟล์ที่มีการเข้ารหัสเฉพาะ เช่น UTF-8 หรือ ASCII เราสามารถระบุการเข้ารหัสได้ขณะเปิดไฟล์ด้วย <code>StreamWriter</code> ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    using System.Text;
    
    class Program {
        static void Main() {
            try {
                using (StreamWriter writer = new StreamWriter("encoded_output.txt", false, Encoding.UTF8)) {
                    writer.WriteLine("นี่คือข้อมูลที่ถูกเขียนด้วยการเข้ารหัส UTF-8");
                    Console.WriteLine("ข้อมูลถูกเขียนด้วยการเข้ารหัส UTF-8 เรียบร้อยแล้ว");
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ข้อมูลจะถูกเขียนลงในไฟล์ด้วยการเข้ารหัส UTF-8 โดยระบุการเข้ารหัสในขณะที่เปิดไฟล์</p>
    
            <h3>4. การเขียนข้อมูลในรูปแบบ CSV</h3>
            <p>การเขียนข้อมูลในรูปแบบ CSV สามารถทำได้ง่ายๆ โดยใช้ <code>StreamWriter</code> ในการแยกข้อมูลแต่ละค่าออกด้วยเครื่องหมายจุลภาค (,) ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamWriter writer = new StreamWriter("data.csv")) {
                    writer.WriteLine("Name,Age,Location");
                    writer.WriteLine("John,25,New York");
                    writer.WriteLine("Anna,30,London");
                    Console.WriteLine("ข้อมูลถูกเขียนในรูปแบบ CSV เรียบร้อยแล้ว");
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
            }
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ ข้อมูลจะถูกเขียนลงในไฟล์ <code>data.csv</code> ในรูปแบบ CSV (Comma-Separated Values)</p>
    
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic8-2.html" class="button">ย้อนกลับ: การอ่านไฟล์ด้วย StreamReader</a>
            <a href="pre-quiz8.html" class="button">หน้าถัดไป: แบบฝึกหัดก่อนเรียน</a>
        </section>
  

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
 </>
    );
    }