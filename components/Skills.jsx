import Stack from "./Stack";

function Skills() {
  return (
    <section className='m-auto h-screen flex flex-col justify-center items-center max-w-2xl p-10'>
      <h2 className='text-center'>Mis Skills</h2>
      <p className='mb-16 text-center'>Los lenguajes y tecnologias donde más tengo experiencia</p>
      <Stack />
    </section>
  )
}

export default Skills;