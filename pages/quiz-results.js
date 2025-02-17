import { useEffect, useState } from "react";

export default function QuizResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/quiz-results/S12345") // เปลี่ยน student_id ตามจริง
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz results:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>กำลังโหลดผลลัพธ์...</p>;

  return (
    <div>
      <h1>ผลลัพธ์แบบทดสอบ</h1>
      {results.length === 0 ? (
        <p>ไม่มีผลลัพธ์</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p>คะแนน: {result.score} / {result.total_questions}</p>
              <p>เวลาทำแบบทดสอบ: {result.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
