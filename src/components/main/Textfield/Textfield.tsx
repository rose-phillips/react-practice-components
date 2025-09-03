import { useId, type ReactNode } from "react";
import { uniqueIdContext } from "./TextfieldContext";

function Textfield({ children }: { children: ReactNode }) {
  const uniqueId = useId();

  return (
    <uniqueIdContext.Provider value={uniqueId}>
      {children}
    </uniqueIdContext.Provider>
  );
}

export default Textfield;
