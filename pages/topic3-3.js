import Head from "next/head";
import Link from "next/link";


export default function Topic3_3() {
  return (
    <>
      <Head>
        <title>ตัวอย่างเพิ่มเติมการแปลงชนิดข้อมูล - C# Course</title>
      </Head>

      <header className="navbar">
        <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>

      <main>
        <h3>4. ตัวอย่างเพิ่มเติมการแปลงชนิดข้อมูล</h3>
        <pre>
          <code>{`
using System;

class Program
{
    static void Main()
    {
        string strNum = "123";
        int parsedNum = Convert.ToInt32(strNum);
        Console.WriteLine("String to Int: " + parsedNum);

        string strDecimal = "123.45";
        double parsedDouble = Convert.ToDouble(strDecimal);
        Console.WriteLine("String to Double: " + parsedDouble);

        string boolStr = "true";
        bool boolValue = Convert.ToBoolean(boolStr);
        Console.WriteLine("String to Bool: " + boolValue);

        int number = 456;
        string strNumber = number.ToString();
        Console.WriteLine("Int to String: " + strNumber);

        string dateStr = "2024-08-30";
        DateTime dateValue = DateTime.Parse(dateStr);
        Console.WriteLine("String to DateTime: " + dateValue.ToShortDateString());

        double price = 19.95;
        string priceStr = price.ToString("C");
        Console.WriteLine("Double to String (Currency): " + priceStr);
    }
}
          `}</code>
        </pre>
        <p>การแปลงโดยใช้เมธอดเหล่านี้ช่วยให้โค้ดมีความชัดเจนและป้องกันการเกิดข้อผิดพลาดในการแปลงชนิดข้อมูล</p>
      </main>

      <section className="navigation-buttons">
        <Link href="/topic3-2">
          <a className="button">ย้อนกลับ: ชนิดข้อมูลพื้นฐาน</a>
        </Link>
        <Link href="/pre-quiz3">
          <a className="button">หน้าถัดไป: แบบฝึกหัดก่อนเรียน</a>
        </Link>
      </section>

      <footer>
        <p>&copy; 2024 คอร์สภาษา C# สำหรับนักศึกษา. สงวนลิขสิทธิ์.</p>
      </footer>
    </>
  );
}
