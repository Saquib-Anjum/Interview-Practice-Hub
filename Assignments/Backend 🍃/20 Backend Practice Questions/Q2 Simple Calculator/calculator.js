import express from 'express';
const app = express();
app.use(express.json())

app.post('/calculator', (req, res) => {
    const { num1, num2, operation } = req.query;
    
    // Convert string inputs to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    
    // Validate inputs
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }
    
    let result;
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = number1 / number2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation. Use: add, subtract, multiply, or divide' });
    }
    
    res.json({ result });
})
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on : http://localhost:${PORT}`)
});