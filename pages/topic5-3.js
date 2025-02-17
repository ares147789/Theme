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
            <h2>5.3 การรับค่าจากฟังก์ชัน</h2>
            <p>ฟังก์ชันในภาษา C# สามารถส่งค่าผลลัพธ์กลับไปยังจุดที่เรียกใช้งานได้ โดยใช้คำสั่ง <code>return</code> ค่าที่ส่งกลับไปจะต้องตรงกับชนิดข้อมูลที่ระบุไว้ตอนประกาศฟังก์ชัน</p>
    
            <h3>ตัวอย่างการรับค่าจากฟังก์ชัน</h3>
            <p>ตัวอย่างต่อไปนี้แสดงการสร้างฟังก์ชันที่ส่งค่าผลลัพธ์กลับไปยังจุดที่เรียกใช้งาน:</p>
            <pre><code>{`
                 
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์และส่งค่ากลับเป็น int
        static int AddNumbers(int a, int b)
        {
            return a + b;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน AddNumbers และรับค่าผลลัพธ์
            int sum = AddNumbers(10, 20);
            Console.WriteLine("ผลรวม: " + sum); // ผลลัพธ์: 30
        }
    }
    </main>
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>AddNumbers(int a, int b)</code> ส่งค่าผลลัพธ์กลับไปยังโปรแกรมหลัก ซึ่งถูกเก็บในตัวแปร <code>sum</code> และแสดงผลออกทางหน้าจอ</p>
    
            <h3>การส่งค่ากลับแบบไม่มีค่า (void)</h3>
            <p>ฟังก์ชันบางชนิดอาจไม่มีค่าผลลัพธ์ที่ต้องส่งกลับ ฟังก์ชันเหล่านี้จะถูกประกาศด้วยชนิดข้อมูลเป็น <code>void</code> ซึ่งหมายความว่าไม่มีการส่งค่ากลับ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่ไม่มีการส่งค่ากลับ
        static void PrintMessage(string message)
        {
            Console.WriteLine(message);
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน PrintMessage
            PrintMessage("ยินดีต้อนรับสู่การเรียนรู้ C#!");
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>PrintMessage(string message)</code> ทำหน้าที่เพียงพิมพ์ข้อความออกทางหน้าจอ โดยไม่มีการส่งค่ากลับ</p>
    
            <h3>ฟังก์ชันที่รับค่าพารามิเตอร์หลายค่า</h3>
            <p>ฟังก์ชันใน C# สามารถรับค่าพารามิเตอร์ได้มากกว่า 1 ตัว โดยฟังก์ชันจะทำงานตามค่าพารามิเตอร์ที่ถูกส่งเข้าไปในฟังก์ชัน ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์หลายค่าและส่งค่ากลับเป็น int
        static int MultiplyNumbers(int a, int b, int c)
        {
            return a * b * c;
        }
    
        static void Main()
        {
            int result = MultiplyNumbers(2, 3, 4);
            Console.WriteLine("ผลคูณ: " + result); // ผลลัพธ์: 24
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>MultiplyNumbers(int a, int b, int c)</code> จะรับพารามิเตอร์ 3 ตัว และส่งค่าผลคูณกลับไปยังโปรแกรมหลัก</p>
    
            <h3>ฟังก์ชันที่มีพารามิเตอร์ค่าเริ่มต้น (Default Parameter)</h3>
            <p>ใน C# เราสามารถกำหนดค่าพารามิเตอร์เริ่มต้นได้ หากไม่มีการส่งค่าพารามิเตอร์เข้าไปในฟังก์ชัน ค่าที่กำหนดไว้จะถูกใช้งานแทน ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่มีพารามิเตอร์ค่าเริ่มต้น
        static int AddWithDefault(int a, int b = 10)
        {
            return a + b;
        }
    
        static void Main()
        {
            int sum1 = AddWithDefault(5);
            int sum2 = AddWithDefault(5, 15);
    
            Console.WriteLine("ผลรวมเมื่อใช้ค่าเริ่มต้น: " + sum1); // ผลลัพธ์: 15
            Console.WriteLine("ผลรวมเมื่อไม่ใช้ค่าเริ่มต้น: " + sum2); // ผลลัพธ์: 20
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>AddWithDefault</code> จะมีพารามิเตอร์ `b` เป็นค่าเริ่มต้น หากไม่ได้ส่งค่า `b` เข้าไปในฟังก์ชัน ค่านั้นจะถูกใช้แทน</p>
    
            <h3>ฟังก์ชันที่ส่งค่ากลับเป็น Boolean</h3>
            <p>ฟังก์ชันสามารถส่งค่ากลับเป็นค่า <code>Boolean</code> ซึ่งสามารถใช้ในการตรวจสอบเงื่อนไข เช่นการตรวจสอบว่าเลขเป็นคู่หรือเลขคี่ ตัวอย่างเช่น:</p>
            <pre> <code>{`
    using System;
    
    class Program
    {
        // ฟังก์ชันที่ส่งค่ากลับเป็น Boolean
        static bool IsEven(int number)
        {
            return number % 2 == 0;
        }
    
        static void Main()
        {
            int number = 10;
            bool isEven = IsEven(number);
    
            Console.WriteLine(number + " เป็นเลขคู่หรือไม่: " + isEven); // ผลลัพธ์: True
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>IsEven(int number)</code> จะตรวจสอบว่าเลขที่ส่งเข้าไปเป็นเลขคู่หรือไม่ และส่งค่ากลับเป็น <code>true</code> หรือ <code>false</code></p>
    
            <h3>ฟังก์ชันที่ส่งค่ากลับเป็นอาร์เรย์</h3>
            <p>ใน C# ฟังก์ชันสามารถส่งค่ากลับเป็นอาร์เรย์ได้ ทำให้เราสามารถส่งข้อมูลหลายๆ ค่าได้ในครั้งเดียว ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่ส่งค่ากลับเป็นอาร์เรย์ของ int
        static int[] GetNumbers()
        {
            return new int[] { 1, 2, 3, 4, 5 };
        }
    
        static void Main()
        {
            int[] numbers = GetNumbers();
    
            Console.WriteLine("ตัวเลขในอาร์เรย์: " + string.Join(", ", numbers)); // ผลลัพธ์: 1, 2, 3, 4, 5
        }
    }
           
            `}</code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>PrintMessage(string message)</code> ทำหน้าที่เพียงพิมพ์ข้อความออกทางหน้าจอ โดยไม่มีการส่งค่ากลับ</p>
        </section>
    </main>

      <section className="navigation-buttons">
        <Link href="/topic5-2" className="button">ย้อนกลับ: การส่งพารามิเตอร์</Link>
        <Link href="/pre-quiz5" className="button">หน้าถัดไป: แบบฝึกหัดก่อนเรียน</Link>
      </section>

      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
