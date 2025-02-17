import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CourseCard from '../components/CourseCard'; // ✅ แก้ path ให้ตรง
import courses from '../pages-sections/data/Courses';

export default function Courses() {
  const [completedPreQuizzes, setCompletedPreQuizzes] = useState({});

  const handleCompletePreQuiz = (index) => {
    setCompletedPreQuizzes((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div>
      <Header brand="คอร์สภาษา C#" fixed color="transparent" />

      <motion.main 
        style={{ padding: '20px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          คอร์สศึกษาภาษา C# ระยะสั้น
        </Typography>

        <Grid container spacing={3}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CourseCard
                course={course}
                index={index} // ✅ เพิ่ม index ให้ CourseCard
                handleCompletePreQuiz={handleCompletePreQuiz} // ✅ ให้เป็น function
                completedPreQuizzes={completedPreQuizzes} // ✅ ให้ส่ง object ไปเลย
              />
            </Grid>
          ))}
        </Grid>
      </motion.main>

      <Footer />
    </div>
  );
}
