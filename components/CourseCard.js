import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function CourseCard({ course, index, handleCompletePreQuiz, completedPreQuizzes = {} }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {course.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {course.description}
        </Typography>
        <ul>
          {course.topics.map((topic, topicIndex) => (
            <li key={topicIndex}>
              <Link href={topic.link}>
                <Typography color="primary">
                  {topic.title}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>

        {/* ปุ่มแบบทดสอบก่อนเรียน */}
        <Link href={course.preQuiz}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleCompletePreQuiz(index)}
            style={{ marginRight: 10 }}
          >
            แบบทดสอบก่อนเรียน
          </Button>
        </Link>

        {/* ปุ่มแบบทดสอบหลังเรียน (ปิดถ้ายังไม่ได้ทำ pre-quiz) */}
        <Link href={course.postQuiz}>
          <Button
            variant="contained"
            color="secondary"
            disabled={!completedPreQuizzes?.[index]} // ✅ ป้องกัน error
          >
            แบบทดสอบหลังเรียน
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
