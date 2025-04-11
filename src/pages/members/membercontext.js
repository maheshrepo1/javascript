import { createContext, useState } from "react";
export const MemberContext = createContext(null);

export const MemberProvider = (props) => {
  const [memberContextData, setMemberContextData] = useState({});

  return (
    <MemberContext.Provider value={{ memberContextData, setMemberContextData }}>
      {props.children}
    </MemberContext.Provider>
  );
};
