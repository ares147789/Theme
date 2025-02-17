import { useState } from "react";

export default function QuizResults() {
  const [studentId, setStudentId] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    if (!studentId) {
      setError("กรุณากรอก Student ID");
      return;
    }
    setError(null);
    try {
      const res = await fetch(`http://localhost:4000/quiz-results/${studentId}`);
      if (!res.ok) throw new Error("ไม่พบข้อมูล");
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setResults([]);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ผลลัพธ์แบบทดสอบ</h2>
      <input
        type="text"
        placeholder="กรอก Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <button onClick={fetchResults}>ดึงข้อมูล</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.length > 0 && (
        <table border="1" cellPadding="5" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>คะแนน</th>
              <th>ถูกต้อง</th>
              <th>ทั้งหมด</th>
              <th>เวลา</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.score}</td>
                <td>{result.correct_answers}</td>
                <td>{result.total_questions}</td>
                <td>{result.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
