// Helper script to parse openGauss questions from text file
// Run: node parse-opengauss.js

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src', 'data', 'questions-openGauss.txt');
const outputFile = path.join(__dirname, 'src', 'data', 'questions-openGauss.json');

try {
  const content = fs.readFileSync(inputFile, 'utf-8');
  const lines = content.split('\n').map(line => line.trim()).filter(line => line);
  
  const questions = [];
  let currentQuestion = null;
  let questionCounter = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip header lines
    if (line.includes('HCIP-openGauss winback') || line === '单选题' || line === '多选题' || line === '判断题') {
      continue;
    }
    
    // Detect question start (number followed by Chinese chars or question mark)
    const questionMatch = line.match(/^(\d+)[、\.](.+)/);
    if (questionMatch && !line.startsWith('A.') && !line.startsWith('B.')) {
      // Save previous question
      if (currentQuestion && currentQuestion.options.length > 0) {
        questions.push(currentQuestion);
      }
      
      questionCounter++;
      currentQuestion = {
        id: questionCounter,
        type: 'single', // Default, will update later
        question: questionMatch[2].trim(),
        options: [],
        correctAnswer: [] // You need to fill this manually
      };
    }
    // Detect options
    else if (line.match(/^[A-D]\./)) {
      if (currentQuestion) {
        currentQuestion.options.push(line);
      }
    }
    // Detect 正确/错误 for judge questions
    else if ((line === '正确' || line === '错误') && currentQuestion) {
      if (currentQuestion.options.length === 0) {
        currentQuestion.type = 'judge';
        currentQuestion.options = ['正确', '错误'];
      }
    }
  }
  
  // Save last question
  if (currentQuestion && currentQuestion.options.length > 0) {
    questions.push(currentQuestion);
  }
  
  // Auto-detect multiple choice (more than 1 answer)
  // Note: You still need to manually fill correctAnswer array
  
  console.log(`Parsed ${questions.length} questions`);
  console.log(`First question:`, JSON.stringify(questions[0], null, 2));
  console.log(`\nWriting to ${outputFile}...`);
  
  fs.writeFileSync(outputFile, JSON.stringify(questions, null, 2), 'utf-8');
  
  console.log('✅ Done! Please manually add correct answers to the JSON file.');
  console.log('Note: For multiple choice questions, change type to "multiple"');
  
} catch (error) {
  console.error('Error:', error.message);
}
