import PageHeader from "@/components/PageHeader";
import SafeCompAdmin from "@/components/SafeCompAdmin";
import SideNav from "@/components/SideNav";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import back from "../../../../public/back.png";
import Image from "next/image";

const Index = () => {
  const [addSafe, setAddSafe] = useState(true);

  return (
    <>
      <SideNav />
      <PageHeader>
        {addSafe ? (
          <>
            <FiPlusCircle color="var(--blue)" />
            Safes
          </>
        ) : (
          <>
            <Image src={back} alt="back" />
            Safes
          </>
        )}
      </PageHeader>
      <SafeCompAdmin addSafe={addSafe} setAddSafe={setAddSafe} />
    </>
  );
};

export default Index;
