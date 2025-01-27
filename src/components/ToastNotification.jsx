
import { useContext } from "react";

import style from "./ToastNotification.module.css";
import { CartContext } from "../features/ContextProvider";

const ToastNotification = () => {
  const { toast } = useContext(CartContext); // Toast state access karo

  if (!toast.show) return null; // Agar toast show nahi karna, toh return null

  return (
    <div className={`container ${style.toastContainer}`}>
      <div className="row">
        <div className="col-md-12">
          <div
            className={`alert alert-success alert-dismissible fade show ${style.alertContainer}`}
            role="alert"
          >
            <strong>{toast.message}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;
