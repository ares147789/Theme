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
            <h2>8.2 การอ่านไฟล์ด้วย StreamReader ใน C#</h2>
            <p>การอ่านไฟล์ใน C# สามารถทำได้ง่ายๆ โดยใช้คลาส <code>StreamReader</code> ซึ่งเป็นคลาสที่มีประสิทธิภาพสำหรับการอ่านข้อมูลจากไฟล์ทีละบรรทัดหรือทั้งหมดในครั้งเดียว</p>
    
            <h3>ตัวอย่างการอ่านไฟล์ด้วย StreamReader</h3>
            <pre><code>{`
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamReader reader = new StreamReader("example.txt")) {
                    string line;
                    while ((line = reader.ReadLine()) != null) {
                        Console.WriteLine(line);
                    }
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ โปรแกรมจะอ่านไฟล์ <code>example.txt</code> ทีละบรรทัดจนกว่าจะถึงจุดสิ้นสุดของไฟล์</p>
    
            <h3>1. การอ่านไฟล์ทั้งหมดในครั้งเดียว</h3>
            <p>หากคุณต้องการอ่านข้อมูลทั้งหมดจากไฟล์ในครั้งเดียว เราสามารถใช้เมธอด <code>ReadToEnd()</code> ได้ดังนี้:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamReader reader = new StreamReader("example.txt")) {
                    string content = reader.ReadToEnd();
                    Console.WriteLine("เนื้อหาในไฟล์ทั้งหมด: ");
                    Console.WriteLine(content);
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ตัวอย่างนี้แสดงการอ่านข้อมูลทั้งหมดจากไฟล์ในครั้งเดียวโดยใช้เมธอด <code>ReadToEnd()</code></p>
    
            <h3>2. การอ่านไฟล์และแสดงบรรทัดที่มีตัวอักษรเฉพาะ</h3>
            <p>คุณสามารถใช้การตรวจสอบเงื่อนไขเพื่อแสดงเฉพาะบรรทัดที่มีคำหรืออักขระเฉพาะ เช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamReader reader = new StreamReader("example.txt")) {
                    string line;
                    while ((line = reader.ReadLine()) != null) {
                        if (line.Contains("C#")) {
                            Console.WriteLine("พบคำว่า 'C#' ในบรรทัด: " + line);
                        }
                    }
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ โปรแกรมจะแสดงเฉพาะบรรทัดที่มีคำว่า "C#"</p>
    
            <h3>3. การอ่านไฟล์โดยระบุการเข้ารหัส (Encoding)</h3>
            <p>ในบางกรณี ไฟล์อาจถูกบันทึกด้วยการเข้ารหัสที่ต่างกัน คุณสามารถระบุการเข้ารหัสขณะเปิดไฟล์ด้วย <code>StreamReader</code> ได้ เช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    using System.Text;
    
    class Program {
        static void Main() {
            try {
                using (StreamReader reader = new StreamReader("example.txt", Encoding.UTF8)) {
                    string line;
                    while ((line = reader.ReadLine()) != null) {
                        Console.WriteLine(line);
                    }
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราได้ระบุการเข้ารหัส UTF-8 ขณะเปิดไฟล์เพื่ออ่านข้อมูล</p>
    
            <h3>4. การนับจำนวนบรรทัดในไฟล์</h3>
            <p>หากคุณต้องการนับจำนวนบรรทัดในไฟล์ สามารถทำได้โดยการวนลูปอ่านแต่ละบรรทัดและนับจำนวนบรรทัด เช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            try {
                using (StreamReader reader = new StreamReader("example.txt")) {
                    int lineCount = 0;
                    while (reader.ReadLine() != null) {
                        lineCount++;
                    }
                    Console.WriteLine("จำนวนบรรทัดในไฟล์: " + lineCount);
                }
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
            }
        }
    }
            `}</code></pre>
            <p>ตัวอย่างนี้แสดงการนับจำนวนบรรทัดในไฟล์โดยการอ่านแต่ละบรรทัด</p>
        </section>
    </main>  
        <section class="navigation-buttons">
            <a href="topic8-1.html" class="button">ย้อนกลับ: การเปิดและปิดไฟล์</a>
            <a href="topic8-3.html" class="button">หน้าถัดไป: การเขียนไฟล์ด้วย StreamWriter</a>
        </section>

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
 </>
    );
    }