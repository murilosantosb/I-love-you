const Footer = () => {
  return (
    <footer className="w-full bg-pink-100 text-gray-700 text-center py-6 mt-12">
      <p className="text-lg font-light">
        Feito com muito amor 💖 por alguém que te ama mais a cada dia.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nosso Amor • Todos os direitos reservados • Murilo
      </p>
    </footer>
  );
};

export default Footer;
