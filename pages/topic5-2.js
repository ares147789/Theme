import Head from "next/head";
import Link from "next/link";

export default function Topic5_1() {
  return (
    <>
      <Head>
        <title>การส่งพารามิเตอร์ในฟังก์ชัน C#</title>
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
            <h2>5.2 การส่งพารามิเตอร์ในฟังก์ชัน</h2>
            <p>การส่งพารามิเตอร์ (Parameter) เป็นการส่งข้อมูลจากภายนอกฟังก์ชันเข้าไปในฟังก์ชันเพื่อใช้ในการประมวลผล พารามิเตอร์จะถูกกำหนดในวงเล็บถัดจากชื่อฟังก์ชัน และในฟังก์ชันสามารถรับพารามิเตอร์ได้หลายตัว พารามิเตอร์สามารถเป็นตัวเลข, ข้อความ, หรือชนิดข้อมูลใดๆ ตามที่โปรแกรมเมอร์ต้องการ</p>
    
            <h3>ตัวอย่างการส่งพารามิเตอร์ในฟังก์ชัน</h3>
            <p>ตัวอย่างต่อไปนี้แสดงการสร้างฟังก์ชันที่รับพารามิเตอร์สองตัวและใช้ในการประมวลผลภายในฟังก์ชัน:</p>
            <pre>
                <code>{`
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์สองตัวและส่งกลับผลลัพธ์
        static int Multiply(int a, int b)
        {
            return a * b;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน Multiply โดยส่งพารามิเตอร์เข้าไป
            int result = Multiply(5, 10);
            Console.WriteLine("ผลลัพธ์: " + result); // ผลลัพธ์: 50
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Multiply(int a, int b)</code> รับพารามิเตอร์สองตัวคือ <code>a</code> และ <code>b</code> แล้วคูณกันเพื่อส่งค่ากลับเป็นผลลัพธ์</p>
    
            <h3>การส่งพารามิเตอร์แบบค่าเริ่มต้น (Default Parameters)</h3>
            <p>ใน C# คุณสามารถกำหนดค่าเริ่มต้นให้กับพารามิเตอร์ได้ หากไม่ได้ส่งค่าพารามิเตอร์เข้าไป ฟังก์ชันจะใช้ค่าเริ่มต้นนั้น ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์พร้อมค่าเริ่มต้น
        static int Multiply(int a, int b = 2)
        {
            return a * b;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน Multiply โดยใช้ค่าเริ่มต้นของ b
            int result = Multiply(5);
            Console.WriteLine("ผลลัพธ์: " + result); // ผลลัพธ์: 10
    
            // เรียกใช้ฟังก์ชัน Multiply โดยกำหนดค่า b เอง
            result = Multiply(5, 3);
            Console.WriteLine("ผลลัพธ์: " + result); // ผลลัพธ์: 15
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>Multiply(int a, int b = 2)</code> มีพารามิเตอร์ <code>b</code> ที่มีค่าเริ่มต้นเป็น 2 หากไม่ได้ส่งค่า <code>b</code> เข้าไป ฟังก์ชันจะใช้ค่า 2 โดยอัตโนมัติ</p>
    
            <h3>การส่งพารามิเตอร์แบบ <code>ref</code> และ <code>out</code></h3>
            <p>ใน C# คุณสามารถใช้คำสั่ง <code>ref</code> และ <code>out</code> เพื่อส่งพารามิเตอร์แบบที่สามารถเปลี่ยนค่าได้ภายในฟังก์ชัน</p>
    
            <h4>ตัวอย่างการใช้ <code>ref</code></h4>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่ใช้พารามิเตอร์แบบ ref
        static void DoubleValue(ref int x)
        {
            x = x * 2;
        }
    
        static void Main()
        {
            int num = 10;
            Console.WriteLine("ก่อนเรียกฟังก์ชัน: " + num); // ผลลัพธ์: 10
    
            // เรียกใช้ฟังก์ชัน DoubleValue โดยใช้ ref
            DoubleValue(ref num);
    
            Console.WriteLine("หลังเรียกฟังก์ชัน: " + num); // ผลลัพธ์: 20
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คำสั่ง <code>ref</code> ใช้เพื่อส่งพารามิเตอร์ที่สามารถเปลี่ยนค่าได้ในฟังก์ชัน <code>DoubleValue()</code></p>
    
            <h4>ตัวอย่างการใช้ <code>out</code></h4>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่ใช้พารามิเตอร์แบบ out
        static void CalculateSquare(int input, out int square)
        {
            square = input * input;
        }
    
        static void Main()
        {
            int result;
            CalculateSquare(5, out result);
    
            Console.WriteLine("ผลลัพธ์: " + result); // ผลลัพธ์: 25
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คำสั่ง <code>out</code> ใช้เพื่อส่งพารามิเตอร์ที่ฟังก์ชันจะกำหนดค่าภายใน โดย <code>square</code> จะถูกกำหนดค่าในฟังก์ชัน <code>CalculateSquare()</code></p>
    
            <h3>การส่งพารามิเตอร์แบบหลายค่า (params)</h3>
            <p>ในบางกรณี เราอาจต้องการส่งพารามิเตอร์หลายค่าจำนวนไม่แน่นอน เราสามารถใช้คำสั่ง <code>params</code> เพื่อรับพารามิเตอร์แบบอาเรย์ (Array) ได้:</p>
            <pre><code>
    using System;
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์หลายตัวโดยใช้ params
        static int AddNumbers(params int[] numbers)
        {
            int sum = 0;
            foreach (int number in numbers)
            {
                sum += number;
            }
            return sum;
        }
    
        static void Main()
        {
            // เรียกใช้ฟังก์ชัน AddNumbers โดยส่งพารามิเตอร์หลายตัว
            int result = AddNumbers(1, 2, 3, 4, 5);
            Console.WriteLine("ผลรวม: " + result); // ผลลัพธ์: 15
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คำสั่ง <code>params</code> ใช้เพื่อรับพารามิเตอร์จำนวนหลายตัว และฟังก์ชันจะคำนวณผลรวมของตัวเลขทั้งหมด</p>
    
            <h3>การส่งพารามิเตอร์ชนิดวัตถุ (Object Parameters)</h3>
            <p>ในฟังก์ชันสามารถรับพารามิเตอร์ที่เป็นวัตถุ (Object) ได้เช่นกัน ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Person
    {
        public string Name { get; set; }
    }
    
    class Program
    {
        // ฟังก์ชันที่รับพารามิเตอร์เป็นวัตถุ
        static void GreetPerson(Person person)
        {
            Console.WriteLine("สวัสดีครับ " + person.Name);
        }
    
        static void Main()
        {
            // สร้างวัตถุ Person
            Person person = new Person();
            person.Name = "สมชาย";
    
            // ส่งวัตถุเข้าไปในฟังก์ชัน
            GreetPerson(person);
        }
    }
             `}</code></pre>
            <p>ในตัวอย่างนี้ ฟังก์ชัน <code>GreetPerson()</code> รับวัตถุ <code>Person</code> เป็นพารามิเตอร์ และแสดงผลชื่อของบุคคลนั้น</p>
    
            <h3>สรุป</h3>
            <p>การส่งพารามิเตอร์ในฟังก์ชันช่วยให้เราสามารถส่งข้อมูลเข้ามาประมวลผลภายในฟังก์ชันได้อย่างมีประสิทธิภาพ ไม่ว่าจะเป็นการส่งพารามิเตอร์แบบทั่วไป, การใช้ค่าเริ่มต้น, การใช้ <code>ref</code> และ <code>out</code> หรือแม้แต่การรับพารามิเตอร์แบบหลายค่า ทั้งนี้การใช้พารามิเตอร์อย่างเหมาะสมจะทำให้โค้ดสามารถนำกลับมาใช้ใหม่และง่ายต่อการดูแลรักษา</p>
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic5-1.html" class="button">ย้อนกลับ: การสร้างฟังก์ชัน</a>
            <a href="topic5-3.html" class="button">หน้าถัดไป: การรับค่าจากฟังก์ชัน</a>
        </section>
    

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
    </>
  );
}
