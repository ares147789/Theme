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
            <h2>6.2 การเข้าถึงข้อมูลในอาร์เรย์ใน C#</h2>
            <p>การเข้าถึงข้อมูลในอาร์เรย์ใน C# ทำได้โดยใช้ดัชนี (index) ของอาร์เรย์นั้นๆ ดัชนีของอาร์เรย์จะเริ่มต้นที่ 0 หมายความว่าค่าตัวแรกของอาร์เรย์อยู่ที่ตำแหน่งที่ 0 ซึ่งแตกต่างจากการนับที่เราคุ้นเคยที่เริ่มต้นจาก 1 ดังนั้นการเข้าถึงตำแหน่งที่ 1 ของอาร์เรย์จะใช้ดัชนีที่ 0</p>
    
            <h3>การเข้าถึงข้อมูลในอาร์เรย์หนึ่งมิติ</h3>
            <p>สำหรับอาร์เรย์หนึ่งมิติ คุณสามารถเข้าถึงค่าภายในอาร์เรย์ได้โดยใช้ดัชนีของตำแหน่งที่ต้องการ เช่น:</p>
            <pre><code>{`
    // ประกาศอาร์เรย์และกำหนดค่า
    int[] numbers = {10, 20, 30, 40, 50};
    
    // การเข้าถึงค่าภายในอาร์เรย์
    int firstValue = numbers[0]; // ค่าที่ตำแหน่งแรกคือ 10
    int thirdValue = numbers[2]; // ค่าที่ตำแหน่งที่สามคือ 30
    
    Console.WriteLine("ค่าที่ตำแหน่งแรก: " + firstValue);
    Console.WriteLine("ค่าที่ตำแหน่งที่สาม: " + thirdValue);
            </code></pre>
    
            <h3>การเข้าถึงข้อมูลในอาร์เรย์สองมิติ</h3>
            <p>การเข้าถึงข้อมูลในอาร์เรย์สองมิติทำได้โดยใช้ดัชนีสองตัว ซึ่งตัวแรกจะระบุแถว และตัวที่สองจะระบุคอลัมน์ เช่น:</p>
            <pre><code>
    // ประกาศอาร์เรย์สองมิติและกำหนดค่า
    int[,] matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    // การเข้าถึงค่าภายในอาร์เรย์สองมิติ
    int topLeft = matrix[0, 0]; // ค่าที่มุมบนซ้ายคือ 1
    int center = matrix[1, 1]; // ค่าที่กลางคือ 5
    
    Console.WriteLine("ค่าที่มุมบนซ้าย: " + topLeft);
    Console.WriteLine("ค่าที่กลาง: " + center);
            </code></pre>
    
            <h3>การใช้ลูปเพื่อเข้าถึงข้อมูลในอาร์เรย์</h3>
            <p>การใช้ลูปช่วยให้สามารถเข้าถึงข้อมูลในอาร์เรย์ได้ทุกตำแหน่งอย่างเป็นระบบ ตัวอย่างเช่น:</p>
            <pre><code>
    // วนลูปผ่านอาร์เรย์หนึ่งมิติ
    for (int i = 0; i < numbers.Length; i++) {
        Console.WriteLine("ค่าในตำแหน่ง " + i + ": " + numbers[i]);
    }
    
    // วนลูปผ่านอาร์เรย์สองมิติ
    for (int i = 0; i < matrix.GetLength(0); i++) {
        for (int j = 0; j < matrix.GetLength(1); j++) {
            Console.WriteLine("ค่าที่ตำแหน่ง (" + i + "," + j + "): " + matrix[i, j]);
        }
    }
            </code></pre>
    
            <h3>การเข้าถึงข้อมูลในอาร์เรย์แบบหลายมิติ (Jagged Array)</h3>
            <p>**Jagged Array** คืออาร์เรย์ที่มีอาร์เรย์เป็นสมาชิก ซึ่งทำให้เราสามารถสร้างอาร์เรย์ที่มีขนาดไม่เท่ากันได้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Program
    {
        static void Main()
        {
            // ประกาศ jagged array
            int[][] jaggedArray = new int[3][];
            jaggedArray[0] = new int[] {1, 2};
            jaggedArray[1] = new int[] {3, 4, 5};
            jaggedArray[2] = new int[] {6, 7, 8, 9};
    
            // การเข้าถึงข้อมูลใน jagged array
            Console.WriteLine("ค่าที่ [0][1]: " + jaggedArray[0][1]); // ผลลัพธ์: 2
            Console.WriteLine("ค่าที่ [2][3]: " + jaggedArray[2][3]); // ผลลัพธ์: 9
        }
    }
            `}</code></pre>
    
            <h3>การใช้ `foreach` เพื่อเข้าถึงข้อมูลในอาร์เรย์</h3>
            <p>การใช้คำสั่ง `foreach` ช่วยให้เราสามารถเข้าถึงข้อมูลในอาร์เรย์ได้อย่างสะดวกสบายโดยไม่ต้องสนใจดัชนี ตัวอย่างเช่น:</p>
            <pre><code>{`
    
    class Program
    {
        static void Main()
        {
            int[] numbers = {10, 20, 30, 40, 50};
    
            // ใช้ foreach วนผ่านข้อมูลในอาร์เรย์
            foreach (int number in numbers)
            {
                Console.WriteLine("ค่า: " + number);
            }
        }
    }
           </pre>
    
            <h3>การเปลี่ยนแปลงค่าภายในอาร์เรย์</h3>
            <p>ในบางกรณี เราอาจต้องการเปลี่ยนแปลงค่าภายในอาร์เรย์ เราสามารถทำได้โดยการระบุดัชนีของค่าที่ต้องการเปลี่ยน ตัวอย่างเช่น:</p>
            <pre><code>
    // ประกาศและกำหนดค่าให้กับอาร์เรย์
    int[] numbers = {10, 20, 30, 40, 50};
    
    // เปลี่ยนแปลงค่าที่ตำแหน่งที่ 2
    numbers[2] = 100;
    
    Console.WriteLine("ค่าที่เปลี่ยนแปลงในตำแหน่งที่ 2: " + numbers[2]); // ผลลัพธ์: 100
            `}</code></pre>
    
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic6-1.html" class="button">ย้อนกลับ: การประกาศและกำหนดค่าอาร์เรย์</a>
            <a href="topic6-3.html" class="button">หน้าถัดไป: การจัดการข้อมูลในอาร์เรย์</a>
        </section>
    

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
    </>
);
}