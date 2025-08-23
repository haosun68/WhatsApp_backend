import app from "./app.js";
import logger from "./configs/logger.config.js";

//env variables
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}...`);
});