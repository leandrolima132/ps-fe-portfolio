export const Header = () => {
  return (
    <header className="mx-auto flex  px-6 py-8 lg:px-8">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <a href="/">
            <h2 className="font-poppins text-xl font-semibold  text-gray-600">
              Ferreira
            </h2>
          </a>
          <button className="bg-gradient rounded-full bg-black px-8 py-3 font-poppins font-bold text-white">
            <a
              href="https://drive.google.com/uc?export=download&id=1Pi4wFi5OYhL_sOzkSRmqNZTdIyO73O3D"
              download
              target={'_blank'}
              rel="noreferrer"
            >
              Download
            </a>
          </button>
        </div>
      </div>
    </header>
  )
}
