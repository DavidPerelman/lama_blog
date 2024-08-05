import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27244368/pexels-photo-27244368/free-photo-of-lake-viti-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
