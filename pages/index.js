import React from "react";
import { useRouter } from "next/router";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.page}>
      {/* Header */}
      <Header
        brand="คอร์สภาษา C#"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{ height: 400, color: "white" }}
      />

      {/* Hero Section */}
      <Parallax image="/img/csharp_course_banner.jpg">
        <div style={styles.heroSection}>
          <GridContainer>
            <GridItem>
              <div style={styles.brand}>
                <h1 style={styles.title}>ยินดีต้อนรับสู่คอร์สภาษา C#</h1>
                <h3 style={styles.subtitle}>
                  เรียนรู้พื้นฐานและการเขียนโปรแกรมภาษา C# อย่างละเอียด
                </h3>
                <button
                  style={styles.button}
                  onClick={() => router.push("/courses")}
                >
                  เริ่มเรียนรู้
                </button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      {/* Main Content */}
      <div style={styles.main}>
        <div style={styles.container}>
          <section>
            <h2 style={styles.sectionTitle}>เกี่ยวกับภาษา C#</h2>
            <p style={styles.text}>
              ภาษา C# ถูกพัฒนาโดย Microsoft เพื่อใช้ในการพัฒนาแอปพลิเคชัน เช่น
              ระบบเว็บ เดสก์ท็อป และโมบายล์
            </p>

            <div style={styles.features}>
              <div style={styles.featureCard}>
                <h3>🔥 สร้างพื้นฐานที่แข็งแกร่ง</h3>
                <p>ภาษา C# เป็นพื้นฐานสำคัญสำหรับการเรียนรู้ OOP</p>
              </div>
              <div style={styles.featureCard}>
                <h3>🚀 เพิ่มโอกาสในการทำงาน</h3>
                <p>ทักษะภาษา C# เป็นที่ต้องการในอุตสาหกรรมซอฟต์แวร์</p>
              </div>
              <div style={styles.featureCard}>
                <h3>🎮 ทำโปรเจคได้หลากหลาย</h3>
                <p>สร้างแอปพลิเคชัน เกม และระบบต่างๆ ด้วย C#</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// 🎨 สไตล์ CSS-in-JS
const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f9fafb",
    color: "#333",
  },
  heroSection: {
    textAlign: "center",
    padding: "100px 20px",
  },
  brand: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "#3498db",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: "400",
    color: "#666",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#2ecc71",
    color: "white",
    padding: "14px 28px",
    fontSize: "1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s ease",
    boxShadow: "0px 5px 15px rgba(46, 204, 113, 0.4)",
  },
  main: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "50px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
    margin: "50px auto",
    maxWidth: "1000px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#f39c12",
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    color: "#444",
    textAlign: "center",
    lineHeight: "1.6",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  featureCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
};

