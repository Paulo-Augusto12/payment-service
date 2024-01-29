import dotenv from "dotenv";
import { app } from "./router/app/app";
dotenv.config();

app.listen(process.env.PORT || 3030, () => {
  console.log("Server is running 🤘");
  console.log(`http://localhost:${process.env.PORT || 3030}`);
});
