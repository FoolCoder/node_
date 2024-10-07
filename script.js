import { connect } from "mongoose";
connect("mongodb://localhost/testdb", () => {
  console.log("connected");
});
