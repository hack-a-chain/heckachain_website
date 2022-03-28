import Link from "next/link";

export default function NavLink(props) {
  return (
    <Link href={props.href} passHref duration={props.duration}>
      <a
        className={props.className}
        onMouseEnter={props.onMouseEnter}
        target={props.target}
        onClick={props.onClick}
        title={props.title}
      >
        {props.children ? props.children : props.text}
      </a>
    </Link>
  );
}