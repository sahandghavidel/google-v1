import Image from "next/image";

export default function Avator() {
  return (
    <div className="h-12 w-12 rounded-full overflow-hidden cursor-pointer">
      <Image
        src="https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048"
        width={100}
        height={100}
        objectFit="cover"
      />
    </div>
  );
}
