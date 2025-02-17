'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Quiz() {
    const questions = [
        { id: "q1", question: "ภาษา C# ถูกพัฒนาโดยบริษัทใด?", options: ["Microsoft", "Google", "Apple"], answer: "Microsoft" },
        { id: "q2", question: "C# เป็นภาษาที่ใช้ใน .NET framework ใช่หรือไม่?", options: ["Yes", "No"], answer: "Yes" },
        { id: "q3", question: "C# เป็นภาษาโปรแกรมประเภทใด?", options: ["General-purpose", "Scripting", "Markup"], answer: "General-purpose" },
        { id: "q4", question: "C# เปิดตัวครั้งแรกในปีใด?", options: ["1995", "2000", "2010"], answer: "2000" },
        { id: "q5", question: "C# ใช้พัฒนาแอปพลิเคชันประเภทใด?", options: ["All", "Desktop", "Web"], answer: "All" },
        { id: "q6", question: "C# รองรับการเขียนโปรแกรมเชิงวัตถุหรือไม่?", options: ["Yes", "No"], answer: "Yes" },
        { id: "q7", question: "C# สามารถใช้งานข้ามแพลตฟอร์มหรือไม่?", options: ["Yes", "No"], answer: "Yes" },
        { id: "q8", question: "C# ใช้ได้กับ Windows หรือ Linux?", options: ["Windows", "Linux", "Both"], answer: "Both" },
        { id: "q9", question: "C# ใช้กลไกการจัดการหน่วยความจำแบบใด?", options: ["Manual", "Garbage Collection", "Pointer"], answer: "Garbage Collection" },
        { id: "q10", question: "ภาษา C# มีพื้นฐานมาจากภาษาใด?", options: ["Java", "Python", "Derived from C and C++"], answer: "Derived from C and C++" }
    ];

    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);
    const [studentId, setStudentId] = useState("");

    useEffect(() => {
        const preQuizStatus = JSON.parse(localStorage.getItem('preQuizCompleted'));
        if (preQuizStatus) {
            setIsCompleted(true);
            setScore(parseInt(localStorage.getItem('quizScore'), 10) || 0);
        }
    }, []);

    const handleChange = (e) => {
        if (!isCompleted) {
            setAnswers({ ...answers, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!studentId) {
            alert('กรุณากรอกรหัสนักศึกษาก่อนส่งคำตอบ!');
            return;
        }

        if (Object.keys(answers).length < questions.length) {
            alert('กรุณาตอบให้ครบทุกข้อก่อนส่งคำตอบ!');
            return;
        }

        let newScore = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.answer) {
                newScore++;
            }
        });

        setScore(newScore);
        setIsCompleted(true);

        localStorage.setItem('preQuizCompleted', JSON.stringify(true));
        localStorage.setItem('quizScore', JSON.stringify(newScore));

        // ส่งข้อมูลไปยัง API
        try {
            const response = await fetch('http://localhost:4000/submit-quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ studentId, score: newScore, quizType: 'pre-learning' })
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
            <h1 className="text-xl font-bold text-blue-600 text-center">แบบฝึกหัดก่อนเรียน: ภาษา C# คืออะไร</h1>
            {isCompleted ? (
                <div className="text-center mt-6">
                    <h3 className="text-lg font-semibold">คุณได้คะแนน: {score}/10</h3>
                    <p className="text-gray-600">คุณได้ทำแบบฝึกหัดไปแล้ว ไม่สามารถทำซ้ำได้</p>
                    <Link href="/courses" className="block mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        กลับไปหน้าหัวข้อการเรียนรู้
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block font-medium">รหัสนักศึกษา:</label>
                        <input 
                            type="text" 
                            value={studentId} 
                            onChange={(e) => setStudentId(e.target.value)} 
                            className="border p-2 w-full rounded" 
                            required 
                        />
                    </div>
                    {questions.map((q, index) => (
                        <div key={q.id} className="mb-4">
                            <h3 className="font-medium">ข้อ {index + 1}: {q.question}</h3>
                            {q.options.map((option) => (
                                <label key={option} className="block">
                                    <input 
                                        type="radio" 
                                        name={q.id} 
                                        value={option} 
                                        onChange={handleChange} 
                                        disabled={isCompleted}
                                        required 
                                    /> {option}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button 
                        type="submit" 
                        className={`w-full py-2 px-4 rounded ${isCompleted ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 text-white'}`}
                        disabled={isCompleted}
                    >
                        ส่งคำตอบ
                    </button>
                </form>
            )}
        </div>
    );
}
