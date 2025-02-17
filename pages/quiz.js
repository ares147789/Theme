import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const { name, topic } = router.query;

  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions] = useState(10); // สมมติว่ามี 10 ข้อ

  const handleSubmitQuiz = () => {
    // ข้อมูลที่จะส่งไปยัง API
    const quizData = {
      name,
      topic,
      score,
      correct_answers: correctAnswers,
      total_questions: totalQuestions,
    };

    // ส่งข้อมูลไปยัง API
    fetch("http://localhost:4000/submit-quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quizData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("บันทึกผลสำเร็จ:", data);
        router.push("/quiz-results"); // ไปที่หน้าดูผลลัพธ์
      })
      .catch((err) => console.error("เกิดข้อผิดพลาด:", err));
  };

  return (
    <div>
      <h1>แบบทดสอบ: {topic}</h1>
      <p>ชื่อผู้ทำแบบทดสอบ: {name}</p>
      {/* แสดงแบบทดสอบ (สมมติว่าเป็นตัวเลือก A B C D) */}
      <button onClick={() => setCorrectAnswers(correctAnswers + 1)}>+ คำตอบถูก</button>
      <button onClick={() => setScore(score + 1)}>+ คะแนน</button>
      <button onClick={handleSubmitQuiz}>ส่งคำตอบ</button>
    </div>
  );
}
