import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const quizzes = {
  1: {
    pre: [
      { question: 'C# ถูกพัฒนาโดยบริษัทใด?', options: ['Google', 'Microsoft', 'Apple', 'IBM'], answer: 1 },
      { question: 'C# ใช้รันบนแพลตฟอร์มใด?', options: ['.NET', 'JVM', 'V8', 'PyPy'], answer: 0 },
    ],
    post: [
      { question: 'C# เป็นภาษาโปรแกรมประเภทใด?', options: ['Low-level', 'Scripting', 'Object-Oriented', 'Assembly'], answer: 2 },
      { question: 'CLR มีบทบาทอะไรใน C#?', options: ['Compile', 'Interpret', 'Run-time', 'Debug'], answer: 2 },
    ],
  },
};

export default function QuizPage() {
  const router = useRouter();
  const { id, type } = router.query;
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (id && type) {
      const data = quizzes[id]?.[type] || [];
      setQuizData(data);
      setAnswers(Array(data.length).fill(null)); // รีเซ็ตคำตอบเป็น null
    }
  }, [id, type]);

  if (!id || !type) return <p>Loading...</p>; // กัน error ตอนโหลดครั้งแรก
  if (!quizData.length) return <p>ไม่พบแบบทดสอบ</p>; // กัน error ถ้า id หรือ type ผิด

  const handleAnswer = (index, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center', padding: '20px' }}>
      <h1>{type === 'pre' ? '📋 Pre-Quiz' : '📝 Post-Quiz'} บทที่ {id}</h1>
      
      {quizData.map((q, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p style={{ fontWeight: 'bold' }}>{q.question}</p>
          {q.options.map((option, optIndex) => (
            <button
              key={optIndex}
              onClick={() => handleAnswer(index, optIndex)}
              style={{
                display: 'block',
                margin: '5px auto',
                padding: '10px',
                width: '100%',
                backgroundColor: answers[index] === optIndex ? '#3498db' : '#ecf0f1',
                color: answers[index] === optIndex ? 'white' : 'black',
                border: '1px solid #bdc3c7',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {option}
            </button>
          ))}
          {submitted && (
            <p style={{ fontWeight: 'bold', color: answers[index] === q.answer ? 'green' : 'red' }}>
              {answers[index] === q.answer ? '✅ ถูกต้อง' : '❌ ผิด'}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button 
          onClick={handleSubmit} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ✅ ส่งคำตอบ
        </button>
      ) : (
        <button 
          onClick={() => router.push('/courses')} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px'
          }}
        >
          📚 กลับไปเรียนต่อ
        </button>
      )}
    </div>
  );
}
