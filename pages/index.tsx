import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                the Ultimate Raffle.
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            Get started by connecting your desired wallet,
            then choose a raffle!
          </p>

          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="/raffle1"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText1}>Raffle 1 ➜ Win 25 MATIC</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a
            href="/raffle2"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>Raffle 2 ➜ Win 100 MATIC</h2>
              <p>
                Deploy, configure, and manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>

          <a
            href="/raffle2"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText3}>Big Drawing ➜ Win Big Prizes</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a>
          <a
            href="https://bucolic-faun-a6318a.netlify.app/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText1}>Winners Hub ➜ Cash Out for MATIC</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
