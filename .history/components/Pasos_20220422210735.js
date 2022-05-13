import { useRouter } from 'next/router';
import useQuiosco from '../hooks/useQuiosco';

const pasos = [
  {paso: 1, nombre: 'Menú', url: '/'},
  {paso: 2, nombre: 'Resumen', url: '/resumen'},
  {paso: 3, nombre: 'Datos & Total', url: '/total'},
];

const Pasos = () => {

  const router = useRouter()
  const { handleChangePaso, paso } = useQuiosco()


  return (
    <>
        <div className="flex justify-between gap-6 mb-6">
          {pasos.map(paso => (
            <button
              key={paso.id}
              className="text-2xl font-bold"
              onClick={ () => {
                router.push(paso.url);
                handleChangePaso(paso.paso);
              }}
            >
              {paso.nombre}
            </button>
          ))}
        </div>

        <div className="bg-gray-100 mb-10">
          <div className="rounded-full bg-amber-500 text-xs leading-none h-2">

          </div>
        </div>
    
    </>
  )
}

export default Pasos;
