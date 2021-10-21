export default function Logo() {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white h-12 w-12 rounded-full`}
    >
      <div className="h-3 w-3 rounded-full bg-red-600 mb-1"></div>
      <div className="flex">
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></div>
        <div className="h-3 w-3 rounded-full bg-green-600"></div>
      </div>
    </div>
  );
}
