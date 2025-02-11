import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <div>kokot
      <Link href="../menubutton/menubutton.tsx">
        <button>Přejít na MenuButton</button>
      </Link>
    </div>
  );
}
