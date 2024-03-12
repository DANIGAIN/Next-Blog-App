import Link from "next/link"

export default function author({ name, img, designation }) {
  if(!name && !img) return <></>;

  return (
    <div className="author flex py-5">
        <img src={img || ""} width={35} height={35} alt="no" className="rounded-full"></img>        
        <div className="flex flex-col justify-center px-4">
            <Link
              href={"/"}
              className="text-md font-bold text-gray-800 hover:text-gray-600">{name || "No Name"}</Link>
            <span className="text-sm text-gray-500">{designation || ""}</span>
        </div>
    </div>
  );
}
