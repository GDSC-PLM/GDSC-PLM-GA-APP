import React from "react";

import AdminView from "./admin.view";
import useAdminHook from "./admin.hook";

import AppContext from "../../context/app.context";

const Admin = () => {
  const { formRef, handleForm, authRef, authorize, isAuthorized } =
    useAdminHook(AppContext);

  return (
    <AdminView
      formRef={formRef}
      addQuestion={handleForm}
      authRef={authRef}
      authorize={authorize}
      isAuthorized={isAuthorized}
    />
  );
};

export default React.memo(Admin);
