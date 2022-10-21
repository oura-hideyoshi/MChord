import { child, get, getDatabase, onValue, ref, set } from "@firebase/database";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { db } from "./firebase";

function App() {
  const [user, setUser] = useState({ username: "", content: "" });

  const usernameRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = {
      username: usernameRef.current?.value,
      content: contentRef.current?.value,
    };
    writeUserData(data.username, data.content);
  };

  const usersRef = ref(db, "users");
  useEffect(() => {
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);

  return (
    <div>
      <p>realtime</p>
      <div>name: {user.username}</div>
      <div>content: {user.content}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input id="username" ref={usernameRef} />
        </div>
        <div>
          <label>content</label>
          <input id="content" ref={contentRef} />
        </div>
        <button type={"submit"}>submit</button>
      </form>
    </div>
  );
}

function writeUserData(name: any, content: any) {
  set(ref(db, "users"), {
    username: name,
    content: content,
  });
}

export default App;
