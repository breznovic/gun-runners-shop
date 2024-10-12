import s from "./Card.module.css";

type CardProps = {
  title: string;
  subtitle: string;
  content: string;
};
const Card = ({ title, subtitle, content }: CardProps) => {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.subtitle}>{subtitle}</p>
      </div>
      <div className={s.content}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
