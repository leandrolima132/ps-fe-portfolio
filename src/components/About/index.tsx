'use client'
import { sendMessageWhatsapp } from '@/functions/send-message-whatsapp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container  text-gray-600 lg:flex-row">
        <div className="flex flex-col-reverse gap-y-4 lg:flex-row lg:gap-x-16 ">
          {/* SOCIAL */}
          <div className="mt-4 flex flex-1 flex-row items-center justify-center gap-x-4 lg:mt-0 lg:max-w-[45px] lg:flex-col lg:gap-y-4">
            <a
              href="https://github.com/leandrolima132"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-ferreira-6bb23b1a2/"
              target={'_blank'}
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/__leandrolima/"
              target={'_blank'}
              rel="noreferrer"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          {/* TEXT */}
          <div className="flex flex-1">
            <div className="mt-6 flex flex-col gap-y-4">
              <h2 className="font-poppins text-4xl font-bold leading-4">
                Leandro Ferreira
              </h2>
              <div className="flex items-center">
                <span className="mr-2 h-[1.5px] w-[50px] bg-gray-600" />
                <p className="font-alt text-2xl leading-5 text-[#FFA500]">
                  Developer FullStack
                </p>
              </div>

              <p className="font-poppins">
                Desenvolvedor Fullstack com 3 anos de experiência em projetos de
                desenvolvimento de software. Habilidade em tecnologias front-end
                e back-end, incluindo HTML, CSS, JavaScript, React, Node.js,
                Python e SQL. Experiência em trabalhar em equipes ágeis e
                projetos de ponta a ponta, focado em fornecer soluções de
                software escaláveis e eficientes. Forte habilidade de
                comunicação e colaboração. Sempre em busca de atualizações
                tecnológicas para fornecer soluções de software de alta
                qualidade.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <button
                  type="button"
                  className="btn btn-primary rounded-2xl bg-black/80 px-6 py-3 font-poppins text-sm font-semibold text-white"
                  onClick={() => sendMessageWhatsapp()}
                >
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div className="mx-auto flex max-w-max flex-1">
            <div className="mx-auto flex flex-col gap-y-4">
              <img
                src="./user0.jpeg"
                alt=""
                className="w-[280px] rounded-full border-2 border-white shadow-2xl shadow-black/60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
