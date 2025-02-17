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
            <h2>9.2 คุณสมบัติและเมธอดของคลาสใน C#</h2>
            <p>คุณสมบัติ (Property) ในคลาส C# เป็นวิธีการเข้าถึงฟิลด์ของคลาสที่ปลอดภัย โดยการใช้ getter และ setter เพื่อกำหนดหรือรับค่าจากฟิลด์ เมธอด (Method) เป็นฟังก์ชันที่อยู่ภายในคลาสและทำงานเฉพาะเมื่อถูกเรียกใช้</p>
    
            <h3>ตัวอย่างการใช้คุณสมบัติและเมธอด</h3>
            <pre><code>{`
    using System;
    
    class Car {
        private string brand;
        private string model;
        private int year;
    
        // คุณสมบัติ
        public string Brand {
            get { return brand; }
            set { brand = value; }
        }
    
        public string Model {
            get { return model; }
            set { model = value; }
        }
    
        public int Year {
            get { return year; }
            set { year = value; }
        }
    
        // เมธอด
        public void DisplayInfo() {
            Console.WriteLine("ยี่ห้อ: " + Brand);
            Console.WriteLine("รุ่น: " + Model);
            Console.WriteLine("ปีที่ผลิต: " + Year);
        }
    }
    
    class Program {
        static void Main() {
            Car myCar = new Car();
            myCar.Brand = "Toyota";
            myCar.Model = "Corolla";
            myCar.Year = 2020;
    
            myCar.DisplayInfo();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คลาส <code>Car</code> มีคุณสมบัติ <code>Brand</code>, <code>Model</code>, และ <code>Year</code> ซึ่งใช้ในการเข้าถึงฟิลด์ของคลาสอย่างปลอดภัย พร้อมกับมีเมธอด <code>DisplayInfo</code> เพื่อแสดงข้อมูลรถ</p>
    
            <h3>1. การสร้าง Property แบบย่อ (Auto-Implemented Properties)</h3>
            <p>ในกรณีที่ไม่ต้องการใช้ฟิลด์ภายในคลาส สามารถสร้าง Property แบบย่อได้โดยไม่ต้องประกาศฟิลด์ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Car {
        // Property แบบย่อ (Auto-Implemented Properties)
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
            Car myCar = new Car { Brand = "Honda", Model = "Civic", Year = 2021 };
            myCar.DisplayInfo();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ Property แบบย่อเพื่อจัดการข้อมูลโดยไม่ต้องประกาศฟิลด์ภายในคลาส</p>
    
            <h3>2. การใช้ Property แบบอ่านอย่างเดียว (Read-Only Property)</h3>
            <p>หากต้องการให้ Property เป็นแบบอ่านอย่างเดียว สามารถใช้เพียง getter โดยไม่ต้องมี setter ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Car {
        public string Brand { get; private set; }
        public string Model { get; private set; }
        public int Year { get; private set; }
    
        // คอนสตรัคเตอร์สำหรับกำหนดค่า Property
        public Car(string brand, string model, int year) {
            Brand = brand;
            Model = model;
            Year = year;
        }
    
        public void DisplayInfo() {
            Console.WriteLine("ยี่ห้อ: " + Brand);
            Console.WriteLine("รุ่น: " + Model);
            Console.WriteLine("ปีที่ผลิต: " + Year);
        }
    }
    
    class Program {
        static void Main() {
            Car myCar = new Car("Mazda", "CX-5", 2022);
            myCar.DisplayInfo();
            // myCar.Brand = "Toyota"; // ไม่สามารถเปลี่ยนค่าได้เพราะเป็น Read-Only
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ Property <code>Brand</code>, <code>Model</code> และ <code>Year</code> ถูกกำหนดค่าเพียงครั้งเดียวและไม่สามารถแก้ไขได้หลังจากที่สร้างออบเจ็ค</p>
    
            <h3>3. การสร้างเมธอดแบบ Static</h3>
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
            </code></pre>
            <p>ในตัวอย่างนี้ เมธอด <code>Add</code> เป็นเมธอดแบบ <code>static</code> ซึ่งสามารถเรียกใช้ได้โดยตรงจากคลาส <code>Calculator</code> โดยไม่ต้องสร้างออบเจ็ค</p>
    
            <h3>4. การใช้ Overloading กับเมธอด</h3>
            <p>Overloading คือการสร้างเมธอดหลายตัวที่มีชื่อเดียวกันแต่รับพารามิเตอร์ต่างกัน ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class MathOperations {
        // เมธอด Overloading
        public int Add(int a, int b) {
            return a + b;
        }
    
        public int Add(int a, int b, int c) {
            return a + b + c;
        }
    }
    
    class Program {
        static void Main() {
            MathOperations math = new MathOperations();
            Console.WriteLine("ผลบวกของ 2 จำนวน: " + math.Add(5, 10));
            Console.WriteLine("ผลบวกของ 3 จำนวน: " + math.Add(5, 10, 15));
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ เมธอด <code>Add</code> ถูก Overload เพื่อรับพารามิเตอร์ที่แตกต่างกัน</p>
        </section>
    </main>
        <section class="navigation-buttons">
            <a href="topic9-1.html" class="button">ย้อนกลับ: การสร้างคลาสและออบเจ็ค</a>
            <a href="topic9-3.html" class="button">หน้าถัดไป: การสืบทอดคลาสและการทำงานกับ polymorphism</a>
        </section>
  

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
 </>
    );
    }