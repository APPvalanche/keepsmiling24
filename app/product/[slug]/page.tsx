import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import ImageGallery from "@/app/components/ImageGallery";

async function getData(slug: string) {
    const query = `
    *[_type == 'product' && slug.current == "${slug}"][0] {
        _id,
          name,
          images,
          description,
          price,
          'slug': slug.current,
          'categoryName': category->name,
      }`;

      const data = await client.fetch(query);

      return data;
};

export default async function ProductPage({
    params,
}: {
    params: { slug: string };
}) {
    const data: fullProduct = await getData(params.slug);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />

                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">
                                {data.categoryName}
                            </span>
                            <h2>{data.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};