"use client";

import { InterfaceKit } from "interface-kit/react";
import { Agentation } from "agentation";

export default function DevTools() {
  return (
    <>
      <InterfaceKit />
      <Agentation endpoint="http://localhost:4747" />
    </>
  );
}
