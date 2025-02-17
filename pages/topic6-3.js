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
            <h2>6.3 การจัดการข้อมูลในอาร์เรย์ใน C#</h2>
            <p>การจัดการข้อมูลในอาร์เรย์ใน C# มีหลายวิธี เช่น การเพิ่มข้อมูล การลบข้อมูล การค้นหาข้อมูล และการเรียงลำดับข้อมูล ซึ่งสามารถทำได้ทั้งในอาร์เรย์แบบหนึ่งมิติและหลายมิติ</p>
    
            <h3>1. การเพิ่มและแก้ไขข้อมูลในอาร์เรย์</h3>
            <p>ใน C# อาร์เรย์มีขนาดคงที่เมื่อถูกสร้างขึ้นแล้ว ไม่สามารถเพิ่มหรือลดขนาดได้ แต่คุณสามารถแก้ไขค่าภายในอาร์เรย์ที่มีอยู่แล้วได้โดยใช้ดัชนี ตัวอย่างเช่น:</p>
            <pre><code>{`
    // ประกาศอาร์เรย์และกำหนดค่า
    int[] numbers = {10, 20, 30, 40, 50};
    
    // แก้ไขค่าที่ตำแหน่งที่สอง
    numbers[1] = 25;
    
    Console.WriteLine("ค่าที่ตำแหน่งที่สองหลังจากแก้ไข: " + numbers[1]); // ผลลัพธ์: 25
            </code></pre>
    
            <h3>2. การค้นหาข้อมูลในอาร์เรย์</h3>
            <p>การค้นหาค่าภายในอาร์เรย์สามารถทำได้โดยการวนลูปผ่านอาร์เรย์และเปรียบเทียบค่าที่ต้องการค้นหา ตัวอย่างเช่น:</p>
            <pre>
    int target = 30;
    bool found = false;
    
    for (int i = 0; i < numbers.Length; i++) {
        if (numbers[i] == target) {
            found = true;
            Console.WriteLine("พบค่าที่ต้องการที่ตำแหน่ง: " + i);
            break;
        }
    }
    
    if (!found) {
        Console.WriteLine("ไม่พบค่าที่ต้องการในอาร์เรย์");
    }
            </code></pre>
    
            <h3>3. การเรียงลำดับข้อมูลในอาร์เรย์</h3>
            <p>การเรียงลำดับข้อมูลในอาร์เรย์สามารถทำได้ง่ายโดยใช้เมธอด <code>Array.Sort()</code> ที่มีใน C# ตัวอย่างเช่น:</p>
            <pre><code>
    // เรียงลำดับข้อมูลในอาร์เรย์จากน้อยไปมาก
    Array.Sort(numbers);
    
    Console.WriteLine("ข้อมูลในอาร์เรย์หลังการเรียงลำดับ:");
    for (int i = 0; i < numbers.Length; i++) {
        Console.WriteLine(numbers[i]);
    }
            </code></pre>
            <p>หลังจากการเรียงลำดับ ข้อมูลในอาร์เรย์จะถูกจัดเรียงใหม่ตามลำดับที่ต้องการ</p>
    
            <h3>4. การลบข้อมูลจากอาร์เรย์</h3>
            <p>ใน C# อาร์เรย์มีขนาดคงที่ ดังนั้นการ "ลบ" ข้อมูลจะต้องทำโดยการสร้างอาร์เรย์ใหม่ที่มีขนาดเล็กกว่า และคัดลอกข้อมูลที่ต้องการเก็บไว้ ตัวอย่างเช่น:</p>
            <pre><code>
    // ลบค่าที่ตำแหน่งที่ 2 จากอาร์เรย์
    int[] newNumbers = new int[numbers.Length - 1];
    int indexToRemove = 2;
    int newIndex = 0;
    
    for (int i = 0; i < numbers.Length; i++) {
        if (i != indexToRemove) {
            newNumbers[newIndex] = numbers[i];
            newIndex++;
        }
    }
    
    Console.WriteLine("ข้อมูลในอาร์เรย์หลังจากลบ:");
    for (int i = 0; i < newNumbers.Length; i++) {
        Console.WriteLine(newNumbers[i]);
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราได้สร้างอาร์เรย์ใหม่ที่ไม่มีค่าที่ตำแหน่งที่ 2 แล้วคัดลอกข้อมูลที่เหลือไปยังอาร์เรย์ใหม่</p>
    
            <h3>5. การค้นหาดัชนีของข้อมูลในอาร์เรย์</h3>
            <p>คุณสามารถค้นหาดัชนีของข้อมูลในอาร์เรย์ได้โดยใช้เมธอด <code>Array.IndexOf()</code> ซึ่งจะคืนค่าเป็นดัชนีของค่าที่ต้องการค้นหา หรือคืนค่า <code>-1</code> ถ้าไม่พบค่าในอาร์เรย์ ตัวอย่างเช่น:</p>
            <pre><code>
    int index = Array.IndexOf(numbers, 30);
    
    if (index != -1) {
        Console.WriteLine("พบค่าที่ตำแหน่ง: " + index);
    } else {
        Console.WriteLine("ไม่พบค่าในอาร์เรย์");
    }
            </code></pre>
    
            <h3>6. การใช้ LINQ ในการจัดการอาร์เรย์</h3>
            <p>LINQ (Language Integrated Query) เป็นเครื่องมือที่ทรงพลังในการจัดการข้อมูลในอาร์เรย์ ตัวอย่างเช่น การค้นหาค่าขั้นต่ำและค่าขั้นสูงในอาร์เรย์:</p>
            <pre><code>
    using System;
    using System.Linq;
    
    class Program
    {
        static void Main()
        {
            int[] numbers = {10, 20, 30, 40, 50};
    
            int minValue = numbers.Min();
            int maxValue = numbers.Max();
    
            Console.WriteLine("ค่าน้อยที่สุดในอาร์เรย์: " + minValue);
            Console.WriteLine("ค่ามากที่สุดในอาร์เรย์: " + maxValue);
        }
    }
            `}</code></pre>
            <p>การใช้ LINQ ทำให้คุณสามารถจัดการข้อมูลในอาร์เรย์ได้อย่างรวดเร็วและมีประสิทธิภาพ</p>
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic6-2.html" class="button">ย้อนกลับ: การเข้าถึงข้อมูลในอาร์เรย์</a>
            <a href="pre-quiz6.html" class="button">หน้าถัดไป: แบบฝึกหัดก่อนเรียน </a>
        </section>
 

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
     </>
    );
    }