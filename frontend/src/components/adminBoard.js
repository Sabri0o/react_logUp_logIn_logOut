import React from "react";
import { useState, useEffect, useRef } from "react";
import showAdminContent from "../services/adminService";

export default function AdminBoard() {
  const [content, setContent] = useState("");
  const _isMounted = useRef(true);

  useEffect(() => {
    if (_isMounted.current) {
      showAdminContent()
        .then((response) => {
          setContent(response);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    return () => {
      _isMounted.current = false;
    };
  }, []);
  return (
    <div>
      <h3>{content}</h3>
    </div>
  );
}
