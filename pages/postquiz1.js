'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PostQuiz() {
    const [score, setScore] = useState(null);
    const [name, setName] = useState('');
    const [isPreQuizCompleted, setIsPreQuizCompleted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const preQuizCompleted = JSON.parse(localStorage.getItem('preQuizCompleted')) === true;
        if (preQuizCompleted) {
            setIsPreQuizCompleted(true);
        } else {
            alert('⚠ กรุณาทำแบบฝึกหัดก่อนเรียนก่อน!');
            setTimeout(() => router.push('/'), 500);
        }
    }, [router]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newScore = 0;
        const formData = new FormData(event.target);

        questions.forEach((q) => {
            if (formData.get(q.id) === q.answer) {
                newScore++;
            }
        });

        setScore(newScore);
        localStorage.setItem('postQuizCompleted', JSON.stringify(true));
        alert('🎉 คุณทำแบบฝึกหัดหลังเรียนเสร็จแล้ว!');

        // ส่งข้อมูลไปยัง API เพื่อบันทึกลง SQLite
        try {
            const response = await fetch('http://localhost:4000/submit-quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    student_id: name,
                    score: newScore,
                    correct_answers: newScore,
                    total_questions: questions.length,
                    type: 'post-quiz'
                })
            });
            const data = await response.json();
            console.log('บันทึกผลสำเร็จ', data);
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการบันทึก', error);
        }
    };

    if (!isPreQuizCompleted) return null;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md">
            <h1 className="text-xl font-bold text-blue-600 text-center">📝 แบบฝึกหัดหลังเรียนบทที่ 1: ภาษา C# คืออะไร</h1>
            
            {!name ? (
                <div className="text-center mt-4">
                    <label className="block mb-2 font-medium">กรอกชื่อ-นามสกุล</label>
                    <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="ชื่อ-นามสกุล"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={() => name && setName(name)}
                    >เริ่มทำแบบทดสอบ</button>
                </div>
            ) : score === null ? (
                <form onSubmit={handleSubmit} className="mt-4">
                    {questions.map((q, index) => (
                        <div key={q.id} className="mb-4">
                            <h3 className="font-medium">ข้อ {index + 1}: {q.question}</h3>
                            {q.options.map((option) => (
                                <label key={option} className="block">
                                    <input type="radio" name={q.id} value={option} required /> {option}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        ✅ ส่งคำตอบ
                    </button>
                </form>
            ) : (
                <div className="text-center mt-6">
                    <h3 className="text-lg font-semibold">🎯 คุณได้คะแนน: {score}/10</h3>
                    <button 
                        onClick={() => router.push('/courses')} 
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >📚 กลับไปหน้าหัวข้อการเรียนรู้</button>
                </div>
            )}
        </div>
    );
}
