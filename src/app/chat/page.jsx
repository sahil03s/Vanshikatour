'use client'

import AccessDeniedPage from "@/_components/AccessDeniedPage";
import Chat from "./Chat";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("token"));
  }, [])

  return user ? <Chat/> : <AccessDeniedPage/>
}