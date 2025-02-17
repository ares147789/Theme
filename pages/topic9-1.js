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
            <h2>9.1 การสร้างคลาสและออบเจ็คใน C#</h2>
            <p>ในภาษา C# คลาส (Class) คือแม่แบบที่ใช้ในการสร้างออบเจ็ค (Object) ซึ่งเป็นตัวแทนของสิ่งต่างๆ ที่เราต้องการจัดการในโปรแกรม คลาสประกอบด้วยฟิลด์ (Field) ซึ่งเก็บข้อมูล และเมธอด (Method) ซึ่งกำหนดพฤติกรรมของออบเจ็ค</p>
    
            <h3>ตัวอย่างการสร้างคลาสและออบเจ็ค</h3>
            <pre><code>{`
    using System;
    
    class Car {
        // ฟิลด์
        public string brand;
        public string model;
        public int year;
    
        // เมธอด
        public void DisplayInfo() {
            Console.WriteLine("ยี่ห้อ: " + brand);
            Console.WriteLine("รุ่น: " + model);
            Console.WriteLine("ปีที่ผลิต: " + year);
        }
    }
    
    class Program {
        static void Main() {
            // การสร้างออบเจ็คจากคลาส Car
            Car myCar = new Car();
            myCar.brand = "Toyota";
            myCar.model = "Corolla";
            myCar.year = 2020;
    
            // เรียกใช้เมธอดของออบเจ็ค
            myCar.DisplayInfo();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราได้สร้างคลาส <code>Car</code> ซึ่งมีฟิลด์สำหรับเก็บข้อมูลเกี่ยวกับรถ และเมธอด <code>DisplayInfo</code> สำหรับแสดงข้อมูล เมื่อสร้างออบเจ็ค <code>myCar</code> แล้ว เราสามารถกำหนดค่าให้กับฟิลด์และเรียกใช้เมธอดได้</p>
    
            <h3>1. การสร้างคอนสตรัคเตอร์ (Constructor)</h3>
            <p>คอนสตรัคเตอร์ (Constructor) คือเมธอดพิเศษที่ใช้สำหรับกำหนดค่าเริ่มต้นให้กับออบเจ็คเมื่อถูกสร้างขึ้น ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Car {
        public string brand;
        public string model;
        public int year;
    
        // คอนสตรัคเตอร์
        public Car(string brand, string model, int year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    
        public void DisplayInfo() {
            Console.WriteLine("ยี่ห้อ: " + brand);
            Console.WriteLine("รุ่น: " + model);
            Console.WriteLine("ปีที่ผลิต: " + year);
        }
    }
    
    class Program {
        static void Main() {
            // การสร้างออบเจ็คโดยใช้คอนสตรัคเตอร์
            Car myCar = new Car("Honda", "Civic", 2022);
            myCar.DisplayInfo();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราได้เพิ่มคอนสตรัคเตอร์ในคลาส <code>Car</code> ซึ่งจะถูกเรียกใช้เมื่อสร้างออบเจ็คใหม่และกำหนดค่าเริ่มต้นให้กับฟิลด์</p>
    
            <h3>2. การใช้ Property แทน Field</h3>
            <p>ใน C# การใช้ Property ช่วยให้สามารถควบคุมการเข้าถึงและการแก้ไขค่าของฟิลด์ได้ดีกว่า ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Car {
        // การใช้ Property
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
    
        public void DisplayInfo() {
            Console.WriteLine("ยี่ห้อ: " + Brand);
            Console.WriteLine("รุ่น: " + Model);
            Console.WriteLine("ปีที่ผลิต: " + Year);
        }
    }
    
    class Program {
        static void Main() {
            Car myCar = new Car();
            myCar.Brand = "Ford";
            myCar.Model = "Mustang";
            myCar.Year = 2021;
    
            myCar.DisplayInfo();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ Property แทน Field ซึ่งช่วยให้การเข้าถึงข้อมูลภายในคลาสมีความยืดหยุ่นมากขึ้น</p>
    
            <h3>3. การสร้างเมธอดที่มีการรับพารามิเตอร์</h3>
            <p>นอกจากการสร้างเมธอดแบบไม่มีพารามิเตอร์แล้ว เรายังสามารถสร้างเมธอดที่รับพารามิเตอร์เพื่อประมวลผลข้อมูลเพิ่มเติมได้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Car {
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
    
        // เมธอดที่รับพารามิเตอร์
        public void UpdateYear(int newYear) {
            Year = newYear;
            Console.WriteLine("ปีที่ผลิตถูกอัปเดตเป็น: " + Year);
        }
    
        public void DisplayInfo() {
            Console.WriteLine("ยี่ห้อ: " + Brand);
            Console.WriteLine("รุ่น: " + Model);
            Console.WriteLine("ปีที่ผลิต: " + Year);
        }
    }
    
    class Program {
        static void Main() {
            Car myCar = new Car() { Brand = "Mazda", Model = "CX-5", Year = 2019 };
            myCar.DisplayInfo();
    
            // อัปเดตปีที่ผลิตด้วยการเรียกเมธอด
            myCar.UpdateYear(2023);
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เมธอด <code>UpdateYear</code> จะรับพารามิเตอร์ปีใหม่และอัปเดตค่าในฟิลด์ของคลาส</p>
    
            <h3>4. การสร้างเมธอดแบบ Static</h3>
            <p>เมธอดแบบ <code>static</code> เป็นเมธอดที่สามารถเรียกใช้ได้โดยไม่ต้องสร้างออบเจ็คจากคลาส ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Calculator {
        // เมธอดแบบ static
        public static int Add(int a, int b) {
            return a + b;
        }
    }
    
    class Program {
        static void Main() {
            // เรียกใช้เมธอด static โดยไม่ต้องสร้างออบเจ็ค
            int result = Calculator.Add(5, 10);
            Console.WriteLine("ผลบวก: " + result);
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ เมธอด <code>Add</code> เป็นเมธอดแบบ <code>static</code> ซึ่งสามารถเรียกใช้ได้โดยตรงจากคลาส <code>Calculator</code> โดยไม่ต้องสร้างออบเจ็ค</p>
    
        </section>
    </main> 
        <section class="navigation-buttons">
            <a href="topic8-3.html" class="button">ย้อนกลับ: การเขียนไฟล์ด้วย StreamWriter</a>
            <a href="topic9-2.html" class="button">หน้าถัดไป: คุณสมบัติและเมธอดของคลาส</a>
        </section>
    

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
 </>
    );
    }