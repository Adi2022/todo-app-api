const express = require("express");
const cors=require("cors");
const app = express();

const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json())
app.use(cors())
// middleware
app.use('/api/v1/todos',require("./routes/todos"));

app.listen(PORT, () => {
  console.log(`Website is running on Sever Port ${PORT}`);
});
