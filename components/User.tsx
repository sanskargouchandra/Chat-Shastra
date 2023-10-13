
import { UserButton } from "@clerk/nextjs";
import React from "react";


type Props = {};

const User = (props: Props) => {
  return (
    <div
     
      className="relative p-1 rounded-sm h-9 w-9 text-white flex items-center justify-center"
    >
      <UserButton  />
      
    </div>
  );
};

export default User;