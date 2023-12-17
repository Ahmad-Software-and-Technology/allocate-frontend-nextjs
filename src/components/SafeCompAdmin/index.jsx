import React, { useEffect, useState } from "react";
import { AdminSafeWrapper, InputFilter } from "./SafeAdmin.styles";
import { LuSearch } from "react-icons/lu";
import AddSafe from "./AddSafe/AddSafe";
import CreateSafe from "./AddSafe/CreateSafe";
import { API } from "@/service/api/api";
import AdminSafeRequests from "../AdminSafeRequests/AdminSafeRequests";

const SafeCompAdmin = ({ addSafe, setAddSafe }) => {
  const [safes, setSafes] = useState([])
  const [showSafes, setShowSafes] = useState(false)
  const [addSafes, setAddSafes] = useState(false)

  console.log(safes)

  const handleSafes = async () => {
    await API.getUserSafe().then((res) => {
      if (res.status === 200) {
        setSafes(res.data.data)
      }
    })
  }


  const handleShowSafes = () => {
    if (safes.length > 0) {
      setShowSafes(false)
      setAddSafes(true)
    } else {
      setAddSafes(false)
      setShowSafes(true)
    }
  }

  useEffect(() => {
    handleSafes()
    handleShowSafes()
  }, [])
  return (

    <>
      {addSafes && <AdminSafeWrapper>
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

      </AdminSafeWrapper>}


      {showSafes && <AdminSafeRequests safes={safes} />}
    </>
  );
};

export default SafeCompAdmin;
