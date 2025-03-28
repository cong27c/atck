import styles from "./Login.module.scss";
import config from "~/config";
import { useState } from "react";
import useQuery from "~/Hooks/useQuery";
import { useNavigate } from "react-router-dom";
import { postUser } from "~/Services/authServices";
import Button from "~/components/Button";

function Login() {
  const query = useQuery();
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const setFormValue = (e) => {
    setHasError(false);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await postUser("/auth/login", formValues);
      localStorage.setItem("token", data.access_token);
      navigate(query.get("continue") || config.routes.home);
    } catch {
      setHasError(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Đăng nhập</h1>
        <div className={styles.listInput}>
          <form action="" className="todoForm" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={setFormValue}
              placeholder="Email..."
            />
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={setFormValue}
              placeholder="Mật Khẩu..."
            />

            <div className={styles.buttons}>
              <Button className={styles.btn} SubmitButton>
                Đăng nhập
              </Button>
              <Button
                className={styles.btn}
                to={config.routes.register}
                SubmitButton
              >
                Đăng ký
              </Button>
            </div>
            {hasError && <p>Email hoặc mật khẩu không hợp lệ.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
