import React from "react";
import { AdminSafeWrapper, InputFilter } from "./SafeAdmin.styles";
import { LuSearch } from "react-icons/lu";
import AddSafe from "./AddSafe/AddSafe";
import CreateSafe from "./AddSafe/CreateSafe";
import AdminSafeRequests from "../AdminSafeRequests/AdminSafeRequests";

const SafeCompAdmin = ({ addSafe, showSafes, creatingSafe, setCreatingSafe, safes }) => {
  return (
    <>
      {addSafe && !creatingSafe && (
        <AdminSafeWrapper>
          <InputFilter>
            <div className="inputWrapper">
              <span className="icon">
                <LuSearch color="var(--gray-50)" size="24" />
              </span>
              <input type="text" placeholder="Search safe by name, recipient wallet address" />
            </div>
          </InputFilter>
          <AddSafe setCreatingSafe={setCreatingSafe} />
        </AdminSafeWrapper>
      )}

      {creatingSafe && <CreateSafe />}

      {showSafes && <AdminSafeRequests safes={safes} />}
    </>
  );
};

export default SafeCompAdmin;
