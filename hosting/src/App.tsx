import { onValue, ref } from "@firebase/database";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { db } from "./firebase";
import { useFetchAllData } from "./hooks/useFethData";

function App() {
  const [count, setCount] = useState(0);
  const itemRef = ref(db, "sample/");
  onValue(itemRef, (snapshot) => {
    const data = snapshot.val();
    console.log("data", data);
  });

  return (
    <div>
      <p>realtime</p>
    </div>
  );
}

export default App;
