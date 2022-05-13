import Layout from "../layout/Layout"

export default function Total() {
  return (
    <Layout pagina='Total y Confirmar Pedido'>
      <h1 className="text-4xl font-black">Total del pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form>
        <div>
          <label className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
        </div>
      </form>
    </Layout>
  )

}