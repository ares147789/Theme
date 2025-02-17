import Head from "next/head";
import Link from "next/link";

export default function Topic5_1() {
  return (
    <>
      <Head>
        <title>การสร้างฟังก์ชันใน C#</title>
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
            <h2>5.1 การสร้างฟังก์ชันใน C#</h2>
            <p>ฟังก์ชัน (Function) ในภาษา C# เป็นกลุ่มของโค้ดที่สามารถเรียกใช้งานได้หลายครั้ง โดยที่ฟังก์ชันสามารถรับค่าพารามิเตอร์เข้าไปประมวลผลและส่งค่ากลับออกมาได้ ฟังก์ชันช่วยให้โค้ดมีความยืดหยุ่น ง่ายต่อการดูแล และนำกลับมาใช้ใหม่ได้ ในภาษา C# การสร้างฟังก์ชันต้องมีการกำหนดชนิดของค่าที่จะส่งกลับ (return type) และพารามิเตอร์ที่ฟังก์ชันรับเข้าไป</p>
    
            <h3>ตัวอย่างการสร้างฟังก์ชันพื้นฐาน</h3>
            <p>ตัวอย่างต่อไปนี้เป็นการสร้างฟังก์ชันที่ไม่มีการรับพารามิเตอร์และไม่มีการส่งค่ากลับ:</p>
            <pre> 
                 <code>{`
    using System;
    
    class Program
    {
        // ฟังก์ชันที่ไม่มีการรับพารามิเตอร์และไม่มีการส่งค่ากลับ
        static void Greet()
        {
            Console.WriteLine("สวัสดีครับ!");
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน Greet
            Greet();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Greet()</code> ถูกเรียกใช้งานในฟังก์ชัน <code>Main()</code> เพื่อแสดงข้อความ "สวัสดีครับ!"</p>
    
            <h3>การสร้างฟังก์ชันที่มีการรับพารามิเตอร์</h3>
            <p>ฟังก์ชันใน C# สามารถรับพารามิเตอร์เพื่อใช้ในการประมวลผลได้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์สองตัวและส่งค่ากลับเป็นผลรวม
        static int Add(int a, int b)
        {
            return a + b;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน Add และแสดงผลลัพธ์
            int result = Add(10, 20);
            Console.WriteLine("ผลรวม: " + result);
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Add(int a, int b)</code> รับพารามิเตอร์สองตัวและส่งค่ากลับเป็นผลรวมของทั้งสองค่า</p>
    
            <h3>การสร้างฟังก์ชันที่มีการส่งค่ากลับ</h3>
            <p>ฟังก์ชันใน C# สามารถส่งค่ากลับไปยังจุดที่เรียกใช้ได้ โดยต้องระบุชนิดของค่าที่จะส่งกลับ (return type) ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์ชื่อและส่งกลับเป็นข้อความต้อนรับ
        static string Greet(string name)
        {
            return "สวัสดีครับ " + name;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน Greet และแสดงผลลัพธ์
            string message = Greet("สมชาย");
            Console.WriteLine(message);
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Greet(string name)</code> รับพารามิเตอร์เป็นชื่อและส่งกลับเป็นข้อความต้อนรับ</p>
    
            <h3>ตัวอย่างเพิ่มเติม 1: การสร้างฟังก์ชันที่ใช้พารามิเตอร์แบบตัวแปร</h3>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Multiply()</code> รับพารามิเตอร์หลายตัวและทำการคูณตัวเลขทั้งหมด:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์หลายตัวและทำการคูณ
        static int Multiply(int a, int b, int c)
        {
            return a * b * c;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน Multiply และแสดงผลลัพธ์
            int result = Multiply(2, 3, 4);
            Console.WriteLine("ผลคูณ: " + result);
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Multiply()</code> จะทำการคูณค่าพารามิเตอร์ทั้งสามตัวและส่งค่าผลลัพธ์กลับ</p>
    
            <h3>ตัวอย่างเพิ่มเติม 2: การใช้ฟังก์ชันเพื่อคำนวณพื้นที่สี่เหลี่ยมผืนผ้า</h3>
            <p>ในตัวอย่างนี้ เราจะใช้ฟังก์ชัน <code>CalculateArea()</code> เพื่อคำนวณพื้นที่ของสี่เหลี่ยมผืนผ้า:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันคำนวณพื้นที่สี่เหลี่ยมผืนผ้า
        static int CalculateArea(int width, int height)
        {
            return width * height;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน CalculateArea
            int area = CalculateArea(5, 10);
            Console.WriteLine("พื้นที่สี่เหลี่ยมผืนผ้า: " + area);
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>CalculateArea()</code> จะทำการคำนวณพื้นที่จากค่าความกว้างและความสูงที่ส่งเข้าไป</p>
    
            <h3>ตัวอย่างเพิ่มเติม 3: การใช้ฟังก์ชันที่มีค่าเริ่มต้นของพารามิเตอร์</h3>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>PrintGreeting()</code> จะมีพารามิเตอร์ที่มีค่าเริ่มต้น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่มีพารามิเตอร์ค่าเริ่มต้น
        static void PrintGreeting(string name = "Guest")
        {
            Console.WriteLine("สวัสดีครับ " + name);
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน PrintGreeting พร้อมค่าเริ่มต้น
            PrintGreeting();
            // เรียกใช้ฟังก์ชัน PrintGreeting พร้อมส่งค่าพารามิเตอร์
            PrintGreeting("สมชาย");
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>PrintGreeting()</code> มีพารามิเตอร์ที่มีค่าเริ่มต้น หากไม่ได้ส่งค่าพารามิเตอร์ไป จะใช้ค่าเริ่มต้นเป็น "Guest"</p>
    
            <h3>ตัวอย่างเพิ่มเติม 4: การใช้ฟังก์ชันที่คืนค่าผลลัพธ์แบบตรรกะ (Boolean)</h3>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>IsEven()</code> จะตรวจสอบว่าค่าที่ส่งเข้ามาเป็นเลขคู่หรือไม่:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่คืนค่าเป็น Boolean
        static bool IsEven(int number)
        {
            return number % 2 == 0;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน IsEven
            int number = 10;
            if (IsEven(number))
            {
                Console.WriteLine(number + " เป็นเลขคู่");
            }
            else
            {
                Console.WriteLine(number + " เป็นเลขคี่");
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>IsEven()</code> จะคืนค่า <code>true</code> หากค่าที่ส่งเข้ามาเป็นเลขคู่ และคืนค่า <code>false</code> หากเป็นเลขคี่</p>
    
            <h3>ตัวอย่างเพิ่มเติม 5: การใช้ฟังก์ชันที่คืนค่าประเภท double</h3>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>CalculateCircleArea()</code> จะคำนวณพื้นที่ของวงกลมจากรัศมี:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันคำนวณพื้นที่วงกลม
        static double CalculateCircleArea(double radius)
        {
            return Math.PI * radius * radius;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน CalculateCircleArea
            double area = CalculateCircleArea(7.5);
            Console.WriteLine("พื้นที่วงกลม: " + area);
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>CalculateCircleArea()</code> จะคำนวณพื้นที่ของวงกลมและคืนค่าประเภท <code>double</code></p>
    
            <h3>สรุป</h3>
            <p>การสร้างฟังก์ชันใน C# ช่วยให้โปรแกรมมีโครงสร้างที่ชัดเจนและง่ายต่อการนำกลับมาใช้ใหม่ ฟังก์ชันสามารถรับพารามิเตอร์หลายตัว ประมวลผลข้อมูล และส่งค่ากลับไปยังจุดที่เรียกใช้งานได้ โดยชนิดของค่าที่ส่งกลับและพารามิเตอร์สามารถเปลี่ยนแปลงได้ตามความต้องการของโปรแกรม</p>
        </section>
    </main>
    <section className="navigation-buttons">
        <Link href="/topic4-3" className="button">ย้อนกลับ: การใช้ลูปใน C#</Link>
        <Link href="topic5-2" className="button">หน้าถัดไป: การส่งพารามิเตอร์ในฟังก์ชัน C#</Link>
      </section>
      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
