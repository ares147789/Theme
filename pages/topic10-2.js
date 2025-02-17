import Head from "next/head";
import Link from "next/link";

export default function Topic10_2() {
  return (
    <>
      <Head>
        <title>Topic 10.2 - การกรองและจัดเรียงข้อมูลด้วย LINQ ใน C#</title>
      </Head>
      <header className="navbar">
        <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>

      <main role="main">
        <section className="course-content">
          <h2>10.2 การกรองและจัดเรียงข้อมูลด้วย LINQ ใน C#</h2>
          <p>LINQ สามารถใช้ในการกรอง (filter) และจัดเรียง (sort) ข้อมูลได้อย่างมีประสิทธิภาพ ทำให้สามารถจัดการข้อมูลในอาร์เรย์หรือลิสต์ได้ง่ายขึ้น</p>

          <h3>ตัวอย่างการกรองและจัดเรียงข้อมูลด้วย LINQ</h3>
          <pre>
            <code>{`
<main role="main">
        <section class="course-content">
            <h2>10.2 การกรองและจัดเรียงข้อมูลด้วย LINQ ใน C#</h2>
            <p>LINQ สามารถใช้ในการกรอง (filter) และจัดเรียง (sort) ข้อมูลได้อย่างมีประสิทธิภาพ ทำให้สามารถจัดการข้อมูลในอาร์เรย์หรือลิสต์ได้ง่ายขึ้น</p>
            
            <h3>ตัวอย่างการกรองและจัดเรียงข้อมูลด้วย LINQ</h3>
            <pre><code>
            using System;
            using System.Linq;
            
            class Program {
                static void Main() {
                    int[] numbers = { 10, 5, 8, 3, 7 };
            
                    // กรองข้อมูลที่มีค่าน้อยกว่า 8 และจัดเรียงจากน้อยไปมาก
                    var sortedNumbers = from num in numbers
                                        where num < 8
                                        orderby num
                                        select num;
            
                    Console.WriteLine("ตัวเลขที่น้อยกว่า 8 และจัดเรียงจากน้อยไปมาก:");
                    foreach (var num in sortedNumbers) {
                        Console.WriteLine(num);
                    }
                }
            }
            </code></pre>
            <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อกรองข้อมูลที่มีค่าน้อยกว่า 8 และจัดเรียงตัวเลขเหล่านั้นจากน้อยไปมาก</p>
            
            <h3>ตัวอย่างเพิ่มเติมของการกรองและจัดเรียงข้อมูลด้วย LINQ</h3>
            
            <h4>ตัวอย่างที่ 1: การกรองข้อมูลที่เป็นเลขคู่และจัดเรียงจากมากไปน้อย</h4>
            <pre><code>
            using System;
            using System.Linq;
            
            class Program {
                static void Main() {
                    int[] numbers = { 10, 5, 8, 3, 7, 12, 4 };
            
                    // กรองข้อมูลที่เป็นเลขคู่และจัดเรียงจากมากไปน้อย
                    var evenNumbers = from num in numbers
                                      where num % 2 == 0
                                      orderby num descending
                                      select num;
            
                    Console.WriteLine("เลขคู่ที่จัดเรียงจากมากไปน้อย:");
                    foreach (var num in evenNumbers) {
                        Console.WriteLine(num);
                    }
                }
            }
            </code></pre>
            
            <h4>ตัวอย่างที่ 2: การกรองข้อมูลที่เป็นตัวเลขที่มากกว่า 5 และจัดเรียงจากน้อยไปมาก</h4>
            <pre><code>
            using System;
            using System.Linq;
            
            class Program {
                static void Main() {
                    int[] numbers = { 10, 5, 8, 3, 7, 12, 4 };
            
                    // กรองข้อมูลที่มากกว่า 5 และจัดเรียงจากน้อยไปมาก
                    var filteredNumbers = from num in numbers
                                          where num > 5
                                          orderby num
                                          select num;
            
                    Console.WriteLine("ตัวเลขที่มากกว่า 5 และจัดเรียงจากน้อยไปมาก:");
                    foreach (var num in filteredNumbers) {
                        Console.WriteLine(num);
                    }
                }
            }
            </code></pre>
            
            <h4>ตัวอย่างที่ 3: การกรองข้อมูลจากลิสต์ของสตริงและจัดเรียงตามตัวอักษร</h4>
            <pre><code>
            using System;
            using System.Linq;
            
            class Program {
                static void Main() {
                    string[] names = { "John", "Alice", "Bob", "Charlie", "David" };
            
                    // กรองชื่อที่มีความยาวมากกว่า 3 ตัวอักษรและจัดเรียงตามตัวอักษร
                    var sortedNames = from name in names
                                      where name.Length > 3
                                      orderby name
                                      select name;
            
                    Console.WriteLine("ชื่อที่มีความยาวมากกว่า 3 ตัวอักษรและจัดเรียงตามตัวอักษร:");
                    foreach (var name in sortedNames) {
                        Console.WriteLine(name);
                    }
                }
            }
            </code></pre>
            
            <h4>ตัวอย่างที่ 4: การกรองข้อมูลจากออบเจ็กต์และจัดเรียงตามชื่อ</h4>
            <pre><code>
            using System;
            using System.Linq;
            using System.Collections.Generic;
            
            class Program {
                public class Student {
                    public string Name { get; set; }
                    public int Age { get; set; }
                }
            
                static void Main() {
                    List<Student> students = new List<Student> {
                        new Student { Name = "John", Age = 18 },
                        new Student { Name = "Alice", Age = 22 },
                        new Student { Name = "Bob", Age = 20 }
                    };
            
                    // กรองนักเรียนที่มีอายุเกิน 18 ปีและจัดเรียงตามชื่อ
                    var sortedStudents = from student in students
                                         where student.Age > 18
                                         orderby student.Name
                                         select student;
            
                    Console.WriteLine("นักเรียนที่มีอายุเกิน 18 ปีและจัดเรียงตามชื่อ:");
                    foreach (var student in sortedStudents) {
                        Console.WriteLine(student.Name + " - " + student.Age);
                    }
                }
            }
            </code></pre>
            
            <h4>ตัวอย่างที่ 5: การใช้ LINQ กับลิสต์ที่ซับซ้อน</h4>
            <pre><code>
            using System;
            using System.Linq;
            using System.Collections.Generic;
            
            class Program {
                public class Product {
                    public string Name { get; set; }
                    public decimal Price { get; set; }
                }
            
                static void Main() {
                    List<Product> products = new List<Product> {
                        new Product { Name = "Laptop", Price = 50000 },
                        new Product { Name = "Phone", Price = 15000 },
                        new Product { Name = "Tablet", Price = 20000 }
                    };
            
                    // กรองสินค้าที่ราคาต่ำกว่า 20000 และจัดเรียงตามราคา
                    var cheapProducts = from product in products
                                        where product.Price < 20000
                                        orderby product.Price
                                        select product;
            
                    Console.WriteLine("สินค้าที่มีราคาต่ำกว่า 20000 บาทและจัดเรียงตามราคา:");
                    foreach (var product in cheapProducts) {
                        Console.WriteLine(product.Name + " - " + product.Price);
                    }
                }
            }
            </code></pre>
            
            <p>ตัวอย่างข้างต้นเป็นการใช้งาน LINQ เพื่อกรองและจัดเรียงข้อมูลได้อย่างมีประสิทธิภาพ สามารถใช้ได้ทั้งกับอาร์เรย์ ลิสต์ และข้อมูลเชิงซับซ้อน</p>
            
        <section class="navigation-buttons">
            <a href="topic10-1.html" class="button">ย้อนกลับ: การใช้ LINQ กับอาร์เรย์</a>
            <a href="topic10-3.html" class="button">หน้าถัดไป: การรวมข้อมูลด้วย LINQ</a>
        </section>
   

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
}`}</code>
          </pre>
          <p>ในตัวอย่างนี้ เราใช้ LINQ เพื่อกรองข้อมูลที่มีค่าน้อยกว่า 8 และจัดเรียงตัวเลขเหล่านั้นจากน้อยไปมาก</p>

          {/* เพิ่มตัวอย่างเพิ่มเติมที่นี่ */}

          <section className="navigation-buttons">
            <Link href="/topic10-1" legacyBehavior>
              <a className="button">ย้อนกลับ: การใช้ LINQ กับอาร์เรย์</a>
            </Link>
            <Link href="/topic10-3" legacyBehavior>
              <a className="button">หน้าถัดไป: การรวมข้อมูลด้วย LINQ</a>
            </Link>
          </section>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
