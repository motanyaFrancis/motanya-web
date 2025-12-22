import Image from "next/image";

interface WorkItemProps {
    index: string;
    title: string;
    description: string;
    image: string;
    layout: "image-left" | "image-right";
}

export default function WorkItem({
    index,
    title,
    description,
    image,
    layout
}: WorkItemProps) {
    return (
        <div className="py-12 border-b">
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-16 items-center`}>

                {/* Index */}
                <div className="md:col-span-1 text-gray-500 text-xl">
                    ({index})
                </div>

                {/* IMAGE LEFT */}
                {layout === "image-left" && (
                    <>
                        <div className="md:col-span-6">
                            <Image
                                src={image}
                                alt={title}
                                width={700}
                                height={450}
                                className="object-cover max-w-[450px] w-full aspect-[16/9]"
                            />
                        </div>

                        <div className="md:col-span-5">
                            <h3 className="text-3xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>
                    </>
                )}

                {/* IMAGE RIGHT */}
                {layout === "image-right" && (
                    <>
                        <div className="md:col-span-5">
                            <h3 className="text-3xl font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>

                        <div className="md:col-span-6">
                            <Image
                                src={image}
                                alt={title}
                                width={700}
                                height={450}
                                className="object-cover max-w-[450px] w-full aspect-[16/9]"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
