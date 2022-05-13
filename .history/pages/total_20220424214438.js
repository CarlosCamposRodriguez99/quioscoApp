import Layout from "../layout/Layout"

export default function Total() {
  return (
    <Layout pagina='Total y Confirmar Pedido'>
      <h1 className="text-4xl font-black">Total del pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form>
        <div>
          <label 
            className="block uppercase text-slate-800 font-bold text-xl"
            htmlFor="nombre"
          >Nombre</label>

          <input 
            type="text"
            id="nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>

        <div className="mt-10">
          <p className="font-bold text-2xl">Total a pagar: {''} <span className="font-bold">
            
          </span></p>
        </div>

        <div>
          <input 
            value="Confirmar Pedido"
            className="bg-indigo-600 w-full lg:w"
          />
        </div>
      </form>
    </Layout>
  )

}