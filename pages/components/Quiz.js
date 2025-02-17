import React, { useState } from "react";
import { Card, CardContent, Typography, Button, FormControl, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const Quiz = ({ questions, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (questionIndex, answer) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: Number(answer) })); 
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setSubmitted(true);
    onComplete(totalScore);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <Card style={{ maxWidth: 600, margin: "auto", padding: "20px", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          📝 แบบทดสอบ
        </Typography>
        {questions.map((q, index) => (
          <div key={index} style={{ marginBottom: "20px", textAlign: "left" }}>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              {index + 1}. {q.question}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                value={answers[index] ?? ""} // ตั้งค่า default
                onChange={(e) => handleChange(index, e.target.value)}
              >
                {q.options.map((option, optIndex) => (
                  <FormControlLabel
                    key={optIndex}
                    value={optIndex} // เปลี่ยนเป็น index ของตัวเลือก
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        ))}
        {!submitted ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            style={{ marginTop: 10 }}
            disabled={Object.keys(answers).length !== questions.length} // กันส่งคำตอบไม่ครบ
          >
            ✅ ส่งคำตอบ
          </Button>
        ) : (
          <div>
            <Typography variant="h6" color="secondary" style={{ marginTop: "10px" }}>
              🎯 คะแนนของคุณ: {score} / {questions.length}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleReset}
              style={{ marginTop: 10 }}
            >
              🔄 ลองใหม่
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Quiz;
