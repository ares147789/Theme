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
            <h2>8.1 การเปิดและปิดไฟล์ใน C#</h2>
            <p>ใน C# การเปิดและปิดไฟล์เป็นขั้นตอนที่สำคัญเพื่อให้แน่ใจว่าไฟล์ได้รับการจัดการอย่างถูกต้อง การเปิดไฟล์ทำได้โดยใช้คลาส <code>FileStream</code> หรือคลาสอื่นๆ ที่เกี่ยวข้อง การปิดไฟล์เป็นสิ่งที่จำเป็นเพื่อป้องกันการใช้ทรัพยากรอย่างไม่จำเป็น</p>
    
            <h3>ตัวอย่างการเปิดและปิดไฟล์</h3>
            <pre><code>{`
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            FileStream fileStream = null;
    
            try {
                fileStream = new FileStream("example.txt", FileMode.OpenOrCreate);
                Console.WriteLine("ไฟล์ถูกเปิดเรียบร้อยแล้ว");
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเปิดไฟล์: " + ex.Message);
            } finally {
                if (fileStream != null) {
                    fileStream.Close();
                    Console.WriteLine("ไฟล์ถูกปิดเรียบร้อยแล้ว");
                }
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ โปรแกรมจะเปิดไฟล์ <code>example.txt</code> และปิดไฟล์เมื่อทำงานเสร็จ ไม่ว่าข้อผิดพลาดจะเกิดขึ้นหรือไม่</p>
    
            <h3>1. การเปิดไฟล์ด้วย StreamReader</h3>
            <p>นอกจาก <code>FileStream</code> เรายังสามารถใช้ <code>StreamReader</code> เพื่ออ่านข้อมูลจากไฟล์ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            StreamReader reader = null;
    
            try {
                reader = new StreamReader("example.txt");
                string content = reader.ReadToEnd();
                Console.WriteLine("เนื้อหาในไฟล์: ");
                Console.WriteLine(content);
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการอ่านไฟล์: " + ex.Message);
            } finally {
                if (reader != null) {
                    reader.Close();
                    Console.WriteLine("ปิดไฟล์เรียบร้อยแล้ว");
                }
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ <code>StreamReader</code> ถูกใช้เพื่ออ่านข้อมูลทั้งหมดจากไฟล์ และปิดไฟล์หลังจากการอ่านเสร็จสิ้น</p>
    
            <h3>2. การเขียนข้อมูลลงในไฟล์ด้วย StreamWriter</h3>
            <p>หากต้องการเขียนข้อมูลลงในไฟล์ เราสามารถใช้ <code>StreamWriter</code> ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            StreamWriter writer = null;
    
            try {
                writer = new StreamWriter("example.txt");
                writer.WriteLine("ยินดีต้อนรับสู่การเขียนไฟล์ใน C#!");
                Console.WriteLine("เขียนข้อมูลลงในไฟล์เรียบร้อยแล้ว");
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
            } finally {
                if (writer != null) {
                    writer.Close();
                    Console.WriteLine("ปิดไฟล์เรียบร้อยแล้ว");
                }
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ <code>StreamWriter</code> เพื่อเขียนข้อมูลลงในไฟล์ และปิดไฟล์หลังจากเขียนเสร็จ</p>
    
            <h3>3. การใช้คำสั่ง using เพื่อจัดการไฟล์</h3>
            <p>การใช้คำสั่ง <code>using</code> เป็นวิธีที่สะดวกในการจัดการไฟล์ใน C# เนื่องจากจะทำการปิดไฟล์อัตโนมัติหลังจากการใช้งาน ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            // ใช้คำสั่ง using เพื่อเปิดและปิดไฟล์อัตโนมัติ
            using (StreamWriter writer = new StreamWriter("example.txt")) {
                writer.WriteLine("ข้อมูลถูกเขียนด้วยคำสั่ง using");
            }
            Console.WriteLine("เขียนและปิดไฟล์อัตโนมัติเรียบร้อยแล้ว");
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ การใช้ <code>using</code> ทำให้ไม่จำเป็นต้องเรียก <code>Close()</code> เอง เพราะระบบจะทำการปิดไฟล์ให้อัตโนมัติเมื่อจบการทำงาน</p>
    
            <h3>4. การเปิดและอ่านไฟล์แบบไบนารีด้วย FileStream</h3>
            <p>นอกจากการเปิดไฟล์แบบข้อความ เรายังสามารถเปิดไฟล์ในรูปแบบไบนารีได้เช่นกัน ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.IO;
    
    class Program {
        static void Main() {
            FileStream fileStream = null;
    
            try {
                fileStream = new FileStream("binaryfile.bin", FileMode.OpenOrCreate);
                byte[] data = new byte[fileStream.Length];
                fileStream.Read(data, 0, data.Length);
    
                Console.WriteLine("อ่านข้อมูลไบนารีสำเร็จ");
            } catch (Exception ex) {
                Console.WriteLine("เกิดข้อผิดพลาดในการเปิดไฟล์ไบนารี: " + ex.Message);
            } finally {
                if (fileStream != null) {
                    fileStream.Close();
                    Console.WriteLine("ปิดไฟล์ไบนารีเรียบร้อยแล้ว");
                }
            }
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ <code>FileStream</code> ถูกใช้เพื่ออ่านข้อมูลไบนารีจากไฟล์</p>
        </section>
    </main>  
        <section class="navigation-buttons">
            <a href="topic7-3.html" class="button">ย้อนกลับ: การใช้ finally</a>
            <a href="topic8-2.html" class="button">หน้าถัดไป: การอ่านไฟล์ด้วย StreamReader</a>
        </section>
 

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
     </>
    );
    }