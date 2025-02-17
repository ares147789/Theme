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
            <h2>9.3 การสืบทอดคลาสและการทำงานกับ polymorphism ใน C#</h2>
            <p>การสืบทอด (Inheritance) คือความสามารถในการสร้างคลาสใหม่จากคลาสที่มีอยู่แล้ว โดยการถ่ายทอดคุณสมบัติและเมธอดจากคลาสแม่ไปยังคลาสลูก การสืบทอดช่วยลดการทำซ้ำโค้ดและเพิ่มความสามารถในการขยายโปรแกรมได้สะดวก</p>
    
            <p>Polymorphism คือความสามารถในการใช้เมธอดที่มีชื่อเดียวกันในคลาสลูกที่สืบทอดจากคลาสแม่ โดยที่เมธอดสามารถทำงานต่างกันไปตามแต่ละคลาสลูกได้</p>
    
            <h3>ตัวอย่างการสืบทอดคลาสและการทำงานกับ polymorphism</h3>
            <pre><code>{`
    using System;
    
    class Animal {
        public virtual void MakeSound() {
            Console.WriteLine("สัตว์กำลังส่งเสียง");
        }
    }
    
    class Dog : Animal {
        public override void MakeSound() {
            Console.WriteLine("สุนัขเห่า");
        }
    }
    
    class Cat : Animal {
        public override void MakeSound() {
            Console.WriteLine("แมวเหมียว");
        }
    }
    
    class Program {
        static void Main() {
            Animal myAnimal = new Animal();
            Animal myDog = new Dog();
            Animal myCat = new Cat();
    
            myAnimal.MakeSound();
            myDog.MakeSound();
            myCat.MakeSound();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คลาส <code>Animal</code> เป็นคลาสแม่ และ <code>Dog</code> กับ <code>Cat</code> เป็นคลาสลูกที่สืบทอดจาก <code>Animal</code> โดยแต่ละคลาสลูกมีการทำงานของเมธอด <code>MakeSound</code> ที่ต่างกัน ซึ่งแสดงถึงการทำงานของ polymorphism</p>
    
            <h3>1. การใช้คำสั่ง base เพื่อเข้าถึงฟังก์ชันของคลาสแม่</h3>
            <p>ในบางกรณี เราสามารถใช้คำสั่ง <code>base</code> เพื่อเรียกใช้เมธอดจากคลาสแม่ภายในเมธอดของคลาสลูก ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Animal {
        public virtual void MakeSound() {
            Console.WriteLine("สัตว์ส่งเสียงพื้นฐาน");
        }
    }
    
    class Dog : Animal {
        public override void MakeSound() {
            base.MakeSound();  // เรียกใช้เมธอดของคลาสแม่
            Console.WriteLine("สุนัขเห่า");
        }
    }
    
    class Program {
        static void Main() {
            Dog myDog = new Dog();
            myDog.MakeSound();
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คลาสลูก <code>Dog</code> จะเรียกใช้ทั้งเมธอดของตัวเองและเมธอดของคลาสแม่โดยใช้คำสั่ง <code>base</code></p>
    
            <h3>2. การสืบทอดคุณสมบัติและเมธอดจากคลาสแม่</h3>
            <p>นอกจากเมธอดแล้ว คลาสลูกยังสามารถสืบทอดคุณสมบัติ (Property) และฟิลด์ (Field) จากคลาสแม่ได้ ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Animal {
        public string Name { get; set; }
        public int Age { get; set; }
    
        public void DisplayInfo() {
            Console.WriteLine($"ชื่อ: {Name}, อายุ: {Age}");
        }
    }
    
    class Dog : Animal {
        public string Breed { get; set; }
    
        public void DisplayBreed() {
            Console.WriteLine($"สายพันธุ์: {Breed}");
        }
    }
    
    class Program {
        static void Main() {
            Dog myDog = new Dog {
                Name = "Buddy",
                Age = 3,
                Breed = "Golden Retriever"
            };
    
            myDog.DisplayInfo();  // เรียกใช้เมธอดจากคลาสแม่
            myDog.DisplayBreed(); // เรียกใช้เมธอดของคลาสลูก
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ คลาส <code>Dog</code> สืบทอดคุณสมบัติ <code>Name</code> และ <code>Age</code> จากคลาส <code>Animal</code> และมีเมธอดเฉพาะของตัวเองในการแสดงสายพันธุ์</p>
    
            <h3>3. Polymorphism กับการใช้ Array หรือ List</h3>
            <p>Polymorphism ช่วยให้เราสามารถจัดการกับออบเจ็คหลายชนิดที่มีคลาสแม่เดียวกันได้ใน Array หรือ List ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    class Animal {
        public virtual void MakeSound() {
            Console.WriteLine("สัตว์ส่งเสียง");
        }
    }
    
    class Dog : Animal {
        public override void MakeSound() {
            Console.WriteLine("สุนัขเห่า");
        }
    }
    
    class Cat : Animal {
        public override void MakeSound() {
            Console.WriteLine("แมวเหมียว");
        }
    }
    
    class Program {
        static void Main() {
            Animal[] animals = new Animal[] { new Dog(), new Cat() };
    
            foreach (Animal animal in animals) {
                animal.MakeSound();  // ใช้ polymorphism เพื่อเรียกใช้เมธอดที่ต่างกัน
            }
        }
    }
            </code></pre>
            <p>ในตัวอย่างนี้ เราสามารถเก็บออบเจ็คของ <code>Dog</code> และ <code>Cat</code> ในอาร์เรย์ประเภท <code>Animal</code> และเรียกใช้เมธอดที่ต่างกันของแต่ละคลาสลูกผ่าน polymorphism</p>
    
            <h3>4. การใช้ abstract class และ abstract method</h3>
            <p>ในบางกรณี เราอาจต้องการให้คลาสแม่เป็นแบบกึ่งนามธรรม (abstract) ซึ่งจะมีเมธอดที่ยังไม่มีการกำหนดการทำงานในคลาสแม่ แต่คลาสลูกต้องกำหนดเมธอดนี้เอง ตัวอย่างเช่น:</p>
            <pre><code>
    using System;
    
    abstract class Animal {
        public abstract void MakeSound();  // เมธอดนามธรรม (abstract)
    }
    
    class Dog : Animal {
        public override void MakeSound() {
            Console.WriteLine("สุนัขเห่า");
        }
    }
    
    class Cat : Animal {
        public override void MakeSound() {
            Console.WriteLine("แมวเหมียว");
        }
    }
    
    class Program {
        static void Main() {
            Animal myDog = new Dog();
            Animal myCat = new Cat();
    
            myDog.MakeSound();
            myCat.MakeSound();
        }
    }
            `}</code></pre>
            <p>ในตัวอย่างนี้ คลาส <code>Animal</code> เป็นคลาสนามธรรม (abstract) ที่มีเมธอดนามธรรม <code>MakeSound</code> ซึ่งคลาสลูกจะต้องนำไปกำหนดเอง</p>
    
        </section>
    </main> 
        <section class="navigation-buttons">
            <a href="topic9-2.html" class="button">ย้อนกลับ: คุณสมบัติและเมธอดของคลาส</a>
            <a href="pre-quiz9.html" class="button">หน้าถัดไป: แบบทดสอบก่อนเรียน </a>
        </section>
    

    <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
    </footer>
 </>
    );
    }