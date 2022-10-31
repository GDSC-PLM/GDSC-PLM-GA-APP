import React from "react";

import AdminView from "./admin.view";
import useAdminHook from "./admin.hook";

const Admin = () => {
  const { formRef, handleForm } = useAdminHook();

  return <AdminView formRef={formRef} addQuestion={handleForm} />;
};

export default React.memo(Admin);
