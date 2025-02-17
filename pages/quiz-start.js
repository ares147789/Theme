import { useState } from "react";
import { useRouter } from "next/router";

export default function QuizStart() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleStartQuiz = (type) => {
    if (!name.trim()) {
      alert("กรุณากรอกชื่อ-นามสกุล");
      return;
    }
    // ส่งชื่อไปยังหน้าแบบทดสอบ
    router.push({
      pathname: `/${type}-quiz`,
      query: { name },
    });
  };

  return (
    <div>
      <h1>กรุณากรอกชื่อ-นามสกุล</h1>
      <input
        type="text"
        placeholder="ชื่อ-นามสกุล"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleStartQuiz("pre")}>เริ่มแบบทดสอบก่อนเรียน</button>
      <button onClick={() => handleStartQuiz("post")}>เริ่มแบบทดสอบหลังเรียน</button>
    </div>
  );
}
