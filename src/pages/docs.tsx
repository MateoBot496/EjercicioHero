import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Docs</h1>
          <p className="text-xl mt-5 border-2 rounded-xl p-10">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem fugit minus maxime eum cupiditate ipsa culpa, praesentium dignissimos eos ipsum, porro distinctio repudiandae deserunt odio inventore eaque tempore mollitia.

          </p>
          </div>
      </section>
  );
}
