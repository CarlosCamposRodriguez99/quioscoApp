import Layout from "../layout/Layout"

export default function Total() {

  const colocarOrden = e => {
    e.prevend

  }


  return (
    <Layout pagina='Total y Confirmar Pedido'>
      <h1 className="text-4xl font-black">Total del pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form
        onSubmit={colocarOrden}
      >
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

        <div className="mt-5">
          <input 
            value="Confirmar Pedido"
            className="bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center"
            type="submit"
          />
        </div>
      </form>
    </Layout>
  )

}