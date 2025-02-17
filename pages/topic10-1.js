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
            <h2>10.1 การใช้ LINQ กับอาร์เรย์ใน C#</h2>
            <p>LINQ (Language Integrated Query) คือฟีเจอร์ที่สำคัญในภาษา C# ที่ช่วยให้สามารถทำการคิวรีข้อมูลจากแหล่งข้อมูลต่างๆ ได้อย่างง่ายดาย เช่น อาร์เรย์, ลิสต์, หรือฐานข้อมูล โดยไม่ต้องเขียนโค้ดซับซ้อน</p>
    
            <h3>ตัวอย่างการใช้ LINQ กับอาร์เรย์</h3>
            <pre><code>{`
    using System;
    using System.Linq;
    
    class Program {
        static void Main() {
            int[] numbers = { 2, 4, 6, 8, 10 };
    
            // ใช้ LINQ เพื่อเลือกตัวเลขที่มากกว่า 5
            var selectedNumbers = from num in numbers
                                  where num > 5
                                  select num;
    
            Console.WriteLine("ตัวเลขที่มากกว่า 5:");
            foreach (var num in selectedNumbers) {
                Console.WriteLine(num);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อเลือกตัวเลขจากอาร์เรย์ที่มีค่ามากกว่า 5 และแสดงผลลัพธ์ออกทางหน้าจอ</p>
    
            <h3>1. การใช้ LINQ เพื่อเรียงลำดับข้อมูลในอาร์เรย์</h3>
            <p>LINQ ช่วยให้เราสามารถเรียงลำดับข้อมูลในอาร์เรย์ได้อย่างง่ายดาย ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.Linq;
    
    class Program {
        static void Main() {
            int[] numbers = { 10, 4, 6, 8, 2 };
    
            // ใช้ LINQ เพื่อเรียงลำดับตัวเลขจากน้อยไปมาก
            var sortedNumbers = from num in numbers
                                orderby num
                                select num;
    
            Console.WriteLine("ตัวเลขเรียงจากน้อยไปมาก:");
            foreach (var num in sortedNumbers) {
                Console.WriteLine(num);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อเรียงลำดับตัวเลขจากน้อยไปมาก</p>
    
            <h3>2. การใช้ LINQ เพื่อค้นหาข้อมูลในอาร์เรย์</h3>
            <p>คุณสามารถใช้ LINQ เพื่อค้นหาข้อมูลเฉพาะเจาะจงจากอาร์เรย์ได้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.Linq;
    
    class Program {
        static void Main() {
            string[] fruits = { "Apple", "Banana", "Cherry", "Date", "Fig" };
    
            // ใช้ LINQ เพื่อค้นหาผลไม้ที่เริ่มต้นด้วยตัวอักษร 'C'
            var selectedFruits = from fruit in fruits
                                 where fruit.StartsWith("C")
                                 select fruit;
    
            Console.WriteLine("ผลไม้ที่เริ่มต้นด้วย 'C':");
            foreach (var fruit in selectedFruits) {
                Console.WriteLine(fruit);
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อค้นหาผลไม้ที่เริ่มต้นด้วยตัวอักษร "C"</p>
    
            <h3>3. การใช้ LINQ เพื่อหาค่าสูงสุด ต่ำสุด และค่าเฉลี่ย</h3>
            <p>LINQ ช่วยให้สามารถหาค่าสูงสุด (Max), ค่าต่ำสุด (Min), และค่าเฉลี่ย (Average) จากอาร์เรย์ได้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.Linq;
    
    class Program {
        static void Main() {
            int[] numbers = { 10, 4, 6, 8, 2 };
    
            // ใช้ LINQ เพื่อหาค่าสูงสุด ต่ำสุด และค่าเฉลี่ย
            int max = numbers.Max();
            int min = numbers.Min();
            double average = numbers.Average();
    
            Console.WriteLine("ค่าสูงสุด: " + max);
            Console.WriteLine("ค่าต่ำสุด: " + min);
            Console.WriteLine("ค่าเฉลี่ย: " + average);
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อหาค่าสูงสุด ค่าต่ำสุด และค่าเฉลี่ยจากอาร์เรย์</p>
    
            <h3>4. การใช้ LINQ เพื่อแปลงข้อมูลในอาร์เรย์</h3>
            <p>คุณสามารถใช้ LINQ เพื่อแปลงข้อมูลในอาร์เรย์ เช่น การเพิ่มค่าหรือเปลี่ยนแปลงข้อมูล ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    using System.Linq;
    
    class Program {
        static void Main() {
            int[] numbers = { 1, 2, 3, 4, 5 };
    
            // ใช้ LINQ เพื่อเพิ่มค่าของแต่ละตัวเลข
            var transformedNumbers = from num in numbers
                                     select num * 2;
    
            Console.WriteLine("ค่าที่ถูกเพิ่มเป็นสองเท่า:");
            foreach (var num in transformedNumbers) {
                Console.WriteLine(num);
            }
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อเพิ่มค่าของตัวเลขแต่ละตัวในอาร์เรย์เป็นสองเท่า</p>
    
        </section>
    </main>   
        <section class="navigation-buttons">
            <a href="topic9-3.html" class="button">ย้อนกลับ: การสืบทอดคลาสและการทำงานกับ polymorphism</a>
            <a href="topic10-2.html" class="button">หน้าถัดไป: การกรองและจัดเรียงข้อมูลด้วย LINQ</a>
        </section>
   

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
 </>
    );
    }