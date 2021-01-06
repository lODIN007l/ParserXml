import Head from "next/head";
import { useEffect, useState } from "react";
import { get } from "../controllers/parsexml";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await get(
        "https://guarded-springs-28309.herokuapp.com/employees"
      );
      setEmployes(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Parse XML</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Parse <a href="https://nextjs.org">XML</a>
        </h1>

        <p className={styles.description}>
          Lista de {"  "}
          <code className={styles.code}>Empleados</code>
        </p>
        <ul>
          {employes &&
            employes.map((item, i) => {
              return (
                <li
                  style={{
                    listStyle: "none",
                    boxShadow: "0 2px 5px #0000001a",
                    padding: 16,
                    margin: 16,
                    borderRadius: 16,
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      background: "#ccc",
                      borderRadius: 999,
                      width: 32,
                      height: 32,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <b>{item.id}</b>
                  </p>
                  <div style={{ marginLeft: 16 }}>
                    <p>
                      {item.firstName} {item.lastName}
                    </p>
                    <p>{item.emailId}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </main>
    </div>
  );
}
