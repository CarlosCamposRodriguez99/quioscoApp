import { useRouter } from 'next/router';

const pasos = [
  {paso: 1, nombre: 'Menú', url: '/'},
  {paso: 2, nombre: 'Resumen', url: '/resumen'},
  {paso: 3, nombre: 'Datos & Total', url: '/total'},
];

const Pasos = () => {

  const router = useRouter()


  return (
    <>
        <div className="flex justify-between gap-6 mb-6">
          {pasos.map(paso => (
            <button
              key={paso.id}
              className="text-2xl font-bold"
            >
              {paso.nombre}
            </button>
          ))}
        </div>
    
    </>
  )
}

export default Pasos;
