import { Jumbotron, Benefits, Examples } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <Benefits />
      <Examples />
    </main>
  );
}

export const metadata = {
  title: "INVITASTUDIO - Inicio",
  description: "Invitaciones digitales para toda ocasión",
  icons: {
    icon: "/assets/images/logo.png",
  },
};
