"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrsipChat = () => {
  useEffect(() => {
    Crisp.configure("9deff82a-e2db-435d-939d-16531742de45");
  }, []);

  return null;
};
