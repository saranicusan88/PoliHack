// Feedback.jsx

"use client";

import Footer from "../components/Footer";
import styles from "./Feedback.module.scss";
import { Flex, Layout } from "antd";

const { Header, Sider, Content } = Layout;

function Feedback() {
  return (
    <>
      <Header className={styles.header}></Header>
      <Content className={styles.content} id="background">
        {/* Form */}
        <div className={styles.formContainer}>
          <iframe
            className={styles.form}
            src="https://docs.google.com/forms/d/e/1FAIpQLSe7UsnfNKoZYfhPPdDzdxwB_XFSP_g0TCpKb9q3YpQSB6bceg/viewform?embedded=true"
            width="940"
            height="1250"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </Content>
      <Footer />
    </>
  );
}

export default Feedback;
