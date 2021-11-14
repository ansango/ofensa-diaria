import { useCallback, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const sendData = useCallback(() => {
    setData(null);
    setIsLoading(true);
    fetch("/api/ofense", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setData(res.msg), setIsLoading(false);
        }, 300);
      });
  }, [data]);

  return (
    <div>
      <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-coolGray-100 text-coolGray-900">
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-lg font-semibold tracking-wider uppercase">
            Ofensa Diaria 🙉
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            ¿Qué clase de persona eres? ¡Descúbrelo ahora!
          </h1>
          <div className="py-10">
            <button
              type="button"
              className="px-8 py-3 font-semibold rounded bg-coolGray-800 text-coolGray-100"
              onClick={sendData}
            >
              Cliquea aquí
            </button>
          </div>
        </div>
        <div className="text-coolGray-800"></div>
        <div className="pt-12 border-t border-coolGray-300"></div>
        {data && (
          <div className="text-coolGray-800 text-center font-bold text-3xl">
            {data}
          </div>
        )}
        {isLoading && (
          <div className="text-coolGray-800 flex justify-center">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-emerald-600"></div>
          </div>
        )}
      </article>
    </div>
  );
}
