import Head from "next/head";
import Link from "next/link";

export default function Topic1_3() {
  return (
    <div className="background">
      <Head>
        <title>1.3 การใช้งานภาษา C# ในปัจจุบัน</title>
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
        <h2>1.3 การใช้งานภาษา C# ในปัจจุบัน</h2>
        <p>ภาษา C# ได้รับความนิยมอย่างกว้างขวางในหมู่นักพัฒนาโปรแกรมและองค์กรต่าง ๆ ด้วยคุณสมบัติที่ยืดหยุ่นและรองรับการพัฒนาแอปพลิเคชันหลายประเภท...</p>
        
        <h3>1. การพัฒนาแอปพลิเคชันเดสก์ท็อป</h3>
        <p>ภาษา C# เหมาะสำหรับพัฒนาแอปพลิเคชันเดสก์ท็อปที่ทำงานบน Windows ด้วย WPF และ Windows Forms</p>
        
        <h3>2. การพัฒนาเว็บแอปพลิเคชัน</h3>
        <p>ASP.NET และ ASP.NET Core ใช้ C# ในการพัฒนาเว็บแอปพลิเคชันที่มีประสิทธิภาพสูง</p>
        
        <h3>3. การพัฒนาเกม</h3>
        <p>C# เป็นภาษาหลักของ Unity ซึ่งเป็นเอนจินเกมยอดนิยม</p>
        
        <h3>4. การพัฒนาแอปพลิเคชันมือถือ</h3>
        <p>ผ่าน Xamarin และ .NET MAUI รองรับทั้ง iOS และ Android</p>
        
        <h3>5. การใช้งานในระบบ IoT และอุปกรณ์ฝังตัว</h3>
        <p>ใช้ในระบบ IoT และอุปกรณ์ฝังตัวที่ต้องการประสิทธิภาพสูง</p>
        
        <div className="navigation-buttons">
          <Link href="/topic1-2" legacyBehavior>
            <a className="btn">ย้อนกลับ</a>
          </Link>
          <Link href="/topic1-4" legacyBehavior>
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
