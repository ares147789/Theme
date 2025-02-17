import Head from "next/head";
import Link from "next/link";

export default function Topic1_1() {
  return (  
    <div className="background">
      <Head>
        <title>1.1 ประวัติความเป็นมาของภาษา C#</title>
      </Head>
      
      <header className="navbar">
        <nav>
          <Link href="/" legacyBehavior><a className="nav-link">หน้าหลัก</a></Link>
          <Link href="/courses" legacyBehavior><a className="nav-link">หัวข้อการเรียนรู้ภาษา C#</a></Link>
          <Link href="/about" legacyBehavior><a className="nav-link">ผู้จัดทำ</a></Link>
          <Link href="/contact" legacyBehavior><a className="nav-link">ติดต่อเรา</a></Link>
        </nav>
      </header>
      
      <div className="content">
        <h2>1.1 ประวัติความเป็นมาของภาษา C#</h2>
        <p>ภาษา C# (อ่านว่า ซีชาร์ป) ได้รับการพัฒนาโดยบริษัท Microsoft เป็นส่วนหนึ่งของแพลตฟอร์ม .NET ซึ่งถูกเปิดตัวครั้งแรกในปี 2000 โดยมีเป้าหมายเพื่อเป็นภาษาที่ใช้งานง่ายและมีความยืดหยุ่น สามารถใช้พัฒนาแอปพลิเคชันต่างๆ ได้หลากหลาย เช่น แอปพลิเคชันเดสก์ท็อป เว็บ และเกม</p>
        <p>ผู้นำทีมพัฒนาภาษา C# คือ Anders Hejlsberg ซึ่งเคยมีประสบการณ์ในการพัฒนาภาษา Turbo Pascal และ Delphi มาก่อน ภายใต้การนำของเขา ภาษา C# ได้รับการออกแบบให้เป็นภาษาที่มีความคล้ายคลึงกับภาษา C++ และ Java แต่มีการปรับปรุงเพื่อให้เป็นภาษาที่มีความปลอดภัยและง่ายต่อการใช้งานมากขึ้น</p>
        <p>ภาษา C# เป็นภาษาที่มีการพัฒนาอย่างต่อเนื่อง โดยมีการเพิ่มฟีเจอร์ต่างๆ เพื่อรองรับการพัฒนาแอปพลิเคชันที่ทันสมัย และเป็นหนึ่งในภาษาที่ได้รับความนิยมสูงที่สุดในการพัฒนาแอปพลิเคชันบนแพลตฟอร์ม .NET</p>
        <h3>จุดเริ่มต้นและแรงบันดาลใจ</h3>
        <p>ก่อนที่จะพัฒนาภาษา C# ทีมงานของ Microsoft ได้พยายามค้นหาภาษาที่เหมาะสมในการพัฒนาแอปพลิเคชันบนแพลตฟอร์มใหม่ที่เรียกว่า .NET เนื่องจากพวกเขาต้องการภาษาที่สามารถเขียนโค้ดได้อย่างรวดเร็ว ปลอดภัย และสามารถทำงานร่วมกับภาษาโปรแกรมอื่น ๆ ที่มีอยู่ได้ Anders Hejlsberg และทีมของเขาได้แรงบันดาลใจจากภาษายอดนิยมในยุคนั้น เช่น C++ และ Java โดยเฉพาะ Java ที่มีความสามารถในการจัดการหน่วยความจำโดยอัตโนมัติและมีความเป็น Platform-Independent</p>
        
        <h3>การพัฒนาและการเปิดตัว</h3>
        <p>การพัฒนาภาษา C# เริ่มต้นขึ้นในช่วงปลายทศวรรษที่ 1990 โดยเป็นส่วนหนึ่งของโครงการภายในที่มีชื่อว่า "Project COOL" (C-like Object Oriented Language) ซึ่งต่อมาได้เปลี่ยนชื่อเป็น C# การเปิดตัวครั้งแรกของ C# เกิดขึ้นพร้อมกับการเปิดตัว .NET Framework 1.0 ในปี 2002 โดย C# ได้รับการยอมรับในฐานะภาษาที่เป็นทางการของแพลตฟอร์ม .NET ตั้งแต่นั้นเป็นต้นมา</p>
        
        <h3>การพัฒนาอย่างต่อเนื่อง</h3>
        <p>หลังจากการเปิดตัวครั้งแรก ภาษา C# ได้รับการพัฒนาและปรับปรุงอย่างต่อเนื่อง โดย Microsoft ได้เพิ่มฟีเจอร์ใหม่ๆ เพื่อรองรับความต้องการของนักพัฒนาในยุคที่เทคโนโลยีมีการเปลี่ยนแปลงอย่างรวดเร็ว ตัวอย่างเช่น การเพิ่มคุณสมบัติ Generic, LINQ (Language Integrated Query), Asynchronous Programming, และการสนับสนุนภาษา C# ในการพัฒนาแอปพลิเคชันบนแพลตฟอร์มต่างๆ เช่น Windows, macOS, Linux, iOS, และ Android</p>

        
        <h3>บทบาทของ C# ในปัจจุบัน</h3>
        <p>ในปัจจุบัน ภาษา C# ได้รับการยอมรับอย่างกว้างขวางและเป็นหนึ่งในภาษาที่มีการใช้งานมากที่สุดในโลก การพัฒนา C# ไม่ได้หยุดอยู่ที่การใช้ในแอปพลิเคชันเดสก์ท็อปและเว็บเท่านั้น แต่ยังครอบคลุมไปถึงการพัฒนาเกม (โดยเฉพาะบนแพลตฟอร์ม Unity), การพัฒนาแอปพลิเคชันสำหรับอุปกรณ์เคลื่อนที่ (ผ่าน Xamarin), และการพัฒนาปัญญาประดิษฐ์ (AI) และแมชชีนเลิร์นนิง (Machine Learning) บนแพลตฟอร์มต่าง ๆ</p>
        
        <h3>เครื่องมือในการพัฒนาภาษา C#</h3>
        <p>มีเครื่องมือพัฒนาเป็นจำนวนมากที่คุณสามารถใช้ได้ในการเขียนโปรแกรมด้วยภาษา C# หนึ่งในเครื่องมือที่นิยมมากที่สุดคือ Visual Studio ซึ่งพัฒนาโดย Microsoft เอง Visual Studio เป็น Integrated Development Environment (IDE) ที่ทรงพลังและมาพร้อมกับฟีเจอร์ต่าง ๆ ที่จะช่วยให้การพัฒนาโปรแกรมเป็นไปอย่างราบรื่นและมีประสิทธิภาพ ฟีเจอร์เหล่านี้รวมถึงการเขียนโค้ด การตรวจสอบข้อผิดพลาด การดีบัก (Debugging) และเครื่องมืออื่น ๆ ที่ช่วยให้การพัฒนาโปรแกรมเป็นเรื่องง่ายและรวดเร็ว</p>
<p>นอกจากนี้ Visual Studio ยังมาพร้อมกับคอมไพล์เลอร์ที่ใช้ในการแปลงโค้ด C# ที่คุณเขียนให้อยู่ในรูปแบบที่คอมพิวเตอร์เข้าใจได้ ซึ่งช่วยให้นักพัฒนาสามารถเขียนโค้ด ทดสอบ และรันโปรแกรมได้ในเครื่องมือเดียวกันโดยไม่ต้องสลับไปมาระหว่างเครื่องมือต่าง ๆ</p>
<p>นอกเหนือจาก Visual Studio แล้ว ยังมีเครื่องมืออื่น ๆ ที่สามารถใช้พัฒนาภาษา C# ได้ เช่น Visual Studio Code (VS Code) ซึ่งเป็นเครื่องมือที่เบาและสามารถติดตั้งส่วนขยายต่าง ๆ ได้ตามต้องการ ทั้งสองเครื่องมือนี้ได้รับการสนับสนุนจากชุมชนและ Microsoft ซึ่งทำให้การพัฒนาใน C# เป็นเรื่องง่ายสำหรับนักพัฒนาทุกระดับ</p>

        
        <div className="navigation-buttons">
          <Link href="/topic1-0" legacyBehavior>
            <a className="btn">ย้อนกลับ</a>
          </Link>
          <Link href="/topic1-2" legacyBehavior>
            <a className="btn">หน้าถัดไป</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .background {
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: white;
          font-family: 'Poppins', sans-serif;
          padding: 20px;
        }

        .navbar {
          width: 100%;
          display: flex;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }

        .nav-link {
          color: #8e44ad;
          font-size: 18px;
          font-weight: bold;
          margin: 0 15px;
          text-decoration: none;
          transition: color 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: #d35400;
        }

        .content {
          max-width: 70%;
          padding: 30px;
          background: rgba(0, 166, 255, 0.9);
          border-radius: 15px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .navigation-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }

        .btn {
          display: inline-block;
          padding: 12px 24px;
          background-color: #3498db;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
        }

        .btn:hover {
          background-color: #2980b9;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
