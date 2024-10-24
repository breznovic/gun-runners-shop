import s from "./Header.module.css";
import Image from "next/image";
import gunLogo from "../../../../public/gunLogo.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={s.container}>
      <Link href="/">
        <Image src={gunLogo} alt="Gun logo" width={180} height={90} className={s.img}/>
      </Link>
      <h3>Gun Runners Shop</h3>
    </div>
  );
};

export default Header;
