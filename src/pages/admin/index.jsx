import React from "react";

import AdminView from "./admin.view";
import useAdminHook from "./admin.hook";

import AppContext from "../../context/app.context";

const Admin = () => {
  const { formRef, handleForm } = useAdminHook(AppContext);

  return <AdminView formRef={formRef} addQuestion={handleForm} />;
};

export default React.memo(Admin);
