'use client'

import styles from "./styles.module.css";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { io } from "socket.io-client";

const Chat = () => {
    
    const [user, setUser] = useState(null);
    const [socketID, setSocketID] = useState("");
    const [message, setMessage] = useState("");
    const [room, SetRoom] = useState("");
    const [chats, setChats] = useState([]);
    const chatContainerRef = useRef(null);
    const [onlineUsers, setOnlineUsers] = useState(0);
    const socket = useRef(null);
    
    useEffect(() => {
        setUser(localStorage.getItem("email").split("@")[0]);
    }, [])
    
    const handleLogout = () => {
        localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.reload();
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(socket);
    if (message.length > 0 && socket.current) socket.current.emit("message", { message, room, user });
    console.log("User id ", user);
    setMessage("");
};

useEffect(() => {

    socket.current = io("https://web-server-fvfv.onrender.com");
    console.log(socket);

    socket.current.on("connect", () => {
        console.log(" user connected (personal id):", socket.current.id);
        setSocketID(socket.current.id);
    });

    socket.current.on("receive-message", (data) => {
      setChats((prevChats) => [
        ...prevChats,
        { message: data.message, ID: data.ID, user: data.user },
      ]);
      scrollToBottom();
      // playMessageSound();
    });

    socket.current.on("online-users-count", (count) => {
      setOnlineUsers(count);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight -
        chatContainerRef.current.clientHeight;
    }
  };

  useEffect(scrollToBottom, [chats]);

  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>Chat</h1>
          <h5
            style={{
              padding: "4px",
              borderRadius: "10px",
              background: "#E8EFCF",
              color: "#075e54",
              margin: "10px",
            }}
          >
            Online : {onlineUsers}
          </h5>
          {/* <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button> */}
        </nav>
        <div ref={chatContainerRef} className={styles.chat_container}>
          <p
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "10px",
              background: "grey",
              margin: "0% 40%",
              border: "25px",
              borderRadius: "2px",
              padding: "4px 6px",
            }}
          >
            {" "}
            --Welcome To Chat Feature--
          </p>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={
                user === chat.user
                  ? styles.sent_message
                  : styles.received_message
              }
            >
              <p
                style={{ fontSize: "10px", color: "green", fontWeight: "900" }}
              >
                {chat.user}
              </p>
              {chat.message}
            </div>
          ))}
        </div>
        <div className={`${styles.input_container}`}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.input}
            />
            <button type="submit" className={styles.white_btn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
