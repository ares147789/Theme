import Head from "next/head";
import Link from "next/link";

export default function Topic1_2() {
  return (  
    <div className="background">
      <Head>
        <title>1.2 ความสำคัญของภาษา C#</title>
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
        <h2>1.2 ความสำคัญของภาษา C#</h2>
        <p>ภาษา C# เป็นหนึ่งในภาษาการเขียนโปรแกรมที่สำคัญและทรงพลัง มีบทบาทสำคัญในการพัฒนาซอฟต์แวร์หลายประเภท...</p>
        
        <h3>1. การสนับสนุนจาก Microsoft</h3>
        <p>C# ได้รับการพัฒนาโดย Microsoft ทำให้มีการอัปเดตและปรับปรุงฟีเจอร์ใหม่ ๆ อยู่เสมอ</p>
        
        <h3>2. การพัฒนาแอปพลิเคชันข้ามแพลตฟอร์ม</h3>
        <p>C# สามารถใช้พัฒนาแอปพลิเคชันบน Windows, macOS, Linux, iOS และ Android ผ่าน .NET Core และ Xamarin</p>
        
        <h3>3. ความยืดหยุ่นและใช้งานได้หลากหลาย</h3>
        <p>C# ใช้พัฒนาเว็บ, เดสก์ท็อป, เกม (Unity), และ IoT</p>
        
        <h3>4. การออกแบบเชิงวัตถุ (OOP)</h3>
        <p>สนับสนุน OOP ทำให้โครงสร้างโค้ดชัดเจนและง่ายต่อการดูแล</p>
        
        <h3>5. ความปลอดภัยและประสิทธิภาพ</h3>
        <p>มีระบบจัดการหน่วยความจำอัตโนมัติ (Garbage Collection) และ Exception Handling</p>
        
        <h3>6. การใช้งานในอุตสาหกรรม</h3>
        <p>ใช้ในธุรกิจ การพัฒนาเกม ระบบฝังตัว และ AI อย่างแพร่หลาย</p>
        
        <h3>7. ชุมชนและทรัพยากรการเรียนรู้</h3>
        <p>มีเอกสารจาก Microsoft และชุมชนขนาดใหญ่ที่ให้การสนับสนุน</p>
        
        <div className="navigation-buttons">
          <Link href="/topic1-1" legacyBehavior>
            <a className="btn">ย้อนกลับ</a>
          </Link>
          <Link href="/topic1-3" legacyBehavior>
            <a className="btn">หน้าถัดไป</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .background {
          background-image: url('/your-image.png');
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
