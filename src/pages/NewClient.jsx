import Form from "../components/Form";

const NewClient = () => {
  return (
    <main>
      <h2 className="text-3xl font-light text-center">Nuevo Cliente</h2>

      <div className="flex flex-col mt-10 items-center">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
          <div className="overflow-hidden sm:rounded-lg border-b border-gray-200 ">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewClient;
