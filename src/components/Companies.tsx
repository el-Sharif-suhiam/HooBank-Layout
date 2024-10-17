import React from "react";
import { clients } from "../constents";
function Companies() {
  return (
    <div className="mt-40 flex gap-9 justify-center xs:justify-between  items-center flex-wrap mb-10 h-[60]">
      {clients.map((client) => (
        <img src={client.logo} alt="client image" key={client.id} width={190} />
      ))}
    </div>
  );
}

export default Companies;
