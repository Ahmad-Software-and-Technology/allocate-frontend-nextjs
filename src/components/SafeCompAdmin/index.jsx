import React, { useState } from "react";
import { AdminSafeWrapper, InputFilter } from "./SafeAdmin.styles";
import { LuSearch } from "react-icons/lu";
import AddSafe from "./AddSafe/AddSafe";
import CreateSafe from "./AddSafe/CreateSafe";

const SafeCompAdmin = ({ addSafe, setAddSafe }) => {
  return (
    <AdminSafeWrapper>
      {addSafe && (
        <>
          <InputFilter>
            <div className="inputWrapper">
              <span className="icon">
                <LuSearch color="var(--gray-50)" size="24" />
              </span>
              <input
                type="text"
                placeholder="Search safe by name, recipient wallet address"
              />
            </div>
          </InputFilter>
          <AddSafe setAddSafe={setAddSafe} />
        </>
      )}
      {!addSafe && <CreateSafe />}
    </AdminSafeWrapper>
  );
};

export default SafeCompAdmin;
