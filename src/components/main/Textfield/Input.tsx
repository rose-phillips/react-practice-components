import { useContext } from "react";
import { uniqueIdContext } from "./TextfieldContext";

export function Input() {
  const uniqueId = useContext(uniqueIdContext);
  return <input id={uniqueId} type="text" />;
}