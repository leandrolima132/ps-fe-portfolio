export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container text-gray-600">
        <div className="flex flex-col items-start">
          <h1 className="font-poppins text-2xl font-bold">Contato</h1>
          {/* Cartão */}
          <div className="mt-6 flex flex-col gap-x-4 lg:gap-y-4">
            <a
              href="https://github.com/leandrolima132"
              target={'_blank'}
              rel="noreferrer"
            >
              Email: leandrolimaaa.ferreira@gmail.com,
            </a>

            <a
              href="https://github.com/leandrolima132"
              target={'_blank'}
              rel="noreferrer"
            >
              GitHub: leandrolima132,
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-ferreira-6bb23b1a2/"
              target={'_blank'}
              rel="noreferrer"
            >
              Linkedin: Leandro Ferreira,
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
