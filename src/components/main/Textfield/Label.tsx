import { useContext } from "react"
import { uniqueIdContext } from "./TextfieldContext";

export function Label({children}:{children: string}) {
  const uniqueId = useContext(uniqueIdContext);
  return <label htmlFor={uniqueId}>{children}</label>;
}