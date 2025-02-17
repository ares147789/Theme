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
            <h2>7.3 การใช้ finally ใน C#</h2>
            <p>บล็อก <code>finally</code> ใช้สำหรับทำงานที่จำเป็นต้องทำเสมอ ไม่ว่าข้อผิดพลาดจะเกิดขึ้นหรือไม่ในบล็อก <code>try</code> หรือ <code>catch</code> เช่น การปิดไฟล์หรือการปล่อยทรัพยากรต่างๆ</p>
    
            <h3>ตัวอย่างการใช้ finally</h3>
            <pre><code>{`
    StreamReader reader = null;
    
    try {
        reader = new StreamReader("file.txt");
        string content = reader.ReadToEnd();
        Console.WriteLine(content);
    } catch (FileNotFoundException ex) {
        Console.WriteLine("ไม่พบไฟล์: " + ex.Message);
    } finally {
        if (reader != null) {
            reader.Close(); // ปิดไฟล์ไม่ว่าข้อผิดพลาดจะเกิดขึ้นหรือไม่
            Console.WriteLine("ปิดไฟล์เรียบร้อยแล้ว");
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ บล็อก <code>finally</code> จะทำงานเสมอไม่ว่าข้อผิดพลาดจะเกิดขึ้นหรือไม่ เพื่อให้แน่ใจว่าไฟล์ถูกปิดอย่างถูกต้อง</p>
    
            <h3>1. การใช้ finally เพื่อปิดการเชื่อมต่อฐานข้อมูล</h3>
            <p>ในการทำงานกับฐานข้อมูล เมื่อมีการเปิดการเชื่อมต่อ เราควรปิดการเชื่อมต่อในบล็อก <code>finally</code> ไม่ว่าข้อผิดพลาดจะเกิดขึ้นหรือไม่ ตัวอย่างเช่น:</p>
            <pre><code>
    SqlConnection connection = null;
    
    try {
        connection = new SqlConnection("connection_string");
        connection.Open();
        // การทำงานกับฐานข้อมูล
    } catch (SqlException ex) {
        Console.WriteLine("เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล: " + ex.Message);
    } finally {
        if (connection != null) {
            connection.Close(); // ปิดการเชื่อมต่อฐานข้อมูลเสมอ
            Console.WriteLine("ปิดการเชื่อมต่อฐานข้อมูลเรียบร้อยแล้ว");
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ <code>finally</code> จะปิดการเชื่อมต่อฐานข้อมูลไม่ว่าการเชื่อมต่อจะสำเร็จหรือเกิดข้อผิดพลาด</p>
    
            <h3>2. การใช้ finally ในการจัดการหน่วยความจำ</h3>
            <p>การใช้ <code>finally</code> เป็นสิ่งสำคัญในการปล่อยหน่วยความจำหรือทรัพยากรอื่นๆ ที่ถูกใช้ ตัวอย่างเช่น:</p>
            <pre><code>
    class ResourceHolder : IDisposable {
        public void Dispose() {
            Console.WriteLine("ปล่อยทรัพยากรเรียบร้อยแล้ว");
        }
    }
    
    ResourceHolder resource = null;
    
    try {
        resource = new ResourceHolder();
        // ใช้ทรัพยากร
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    } finally {
        if (resource != null) {
            resource.Dispose(); // ปล่อยทรัพยากรเสมอ
            Console.WriteLine("ทรัพยากรถูกปล่อยแล้ว");
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ <code>finally</code> ถูกใช้เพื่อเรียก <code>Dispose()</code> เพื่อปล่อยทรัพยากรที่ถูกใช้ไม่ว่าข้อผิดพลาดจะเกิดขึ้นหรือไม่</p>
    
            <h3>3. การใช้ finally เพื่อยืนยันการทำงานของโปรแกรม</h3>
            <p>บล็อก <code>finally</code> ยังสามารถใช้เพื่อยืนยันว่าโปรแกรมจะทำงานบางอย่างเสมอ เช่น การบันทึกการทำงานของโปรแกรม ตัวอย่างเช่น:</p>
            <pre><code>
    try {
        Console.WriteLine("ทำงานในบล็อก try");
        // ทำงานหลักของโปรแกรม
    } catch (Exception ex) {
        Console.WriteLine("เกิดข้อผิดพลาด: " + ex.Message);
    } finally {
        Console.WriteLine("ทำงานในบล็อก finally เพื่อยืนยันว่าการทำงานสิ้นสุดลง");
    }
            </code></pre>
            <p>ในตัวอย่างนี้ บล็อก <code>finally</code> จะทำงานเสมอเพื่อยืนยันว่าโปรแกรมได้ทำงานเสร็จสมบูรณ์ ไม่ว่าจะเกิดข้อผิดพลาดหรือไม่</p>
    
            <h3>4. การใช้ finally กับการทำงานร่วมกับไฟล์</h3>
            <p>บล็อก <code>finally</code> ถูกใช้เพื่อปิดไฟล์หลังจากการอ่านหรือเขียนข้อมูลลงในไฟล์ ตัวอย่างเช่น:</p>
            <pre><code>
    StreamWriter writer = null;
    
    try {
        writer = new StreamWriter("output.txt");
        writer.WriteLine("เขียนข้อมูลลงในไฟล์");
    } catch (IOException ex) {
        Console.WriteLine("เกิดข้อผิดพลาดในการเขียนไฟล์: " + ex.Message);
    } finally {
        if (writer != null) {
            writer.Close(); // ปิดไฟล์เสมอ
            Console.WriteLine("ปิดไฟล์เรียบร้อยแล้ว");
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ <code>finally</code> จะปิดไฟล์ไม่ว่าการเขียนไฟล์จะสำเร็จหรือเกิดข้อผิดพลาด</p>
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic7-2.html" class="button">ย้อนกลับ: การจัดการข้อผิดพลาดแบบเฉพาะเจาะจง</a>
            <a href="pre-quiz7.html" class="button">หน้าถัดไป: แบบทดสอบก่อนเรียน </a>
        </section>
   

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
     </>
    );
    }