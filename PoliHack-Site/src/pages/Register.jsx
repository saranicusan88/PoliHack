// Register.jsx

"use client";

import Footer from "../components/Footer";
import styles from "./Register.module.scss";
import Loading from "../components/Loading";
import { Flex, Layout } from "antd";

const { Header, Sider, Content } = Layout;

function Register() {
  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content} id="background">

        {/* Register Form */}
        <div className={styles.formContainer}>
          <iframe
            className={styles.form}
            src="https://forms.gle/EQrxtDr8uhcBnKyg9"
            width="940"
            height="1250"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            <Loading />
          </iframe>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Register;
