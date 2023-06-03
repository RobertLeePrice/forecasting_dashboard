import Spinner from "./common/Spinner";

export default function LoadingOverlay() {
  return (
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-800 opacity-80 flex flex-col items-center justify-center">
      <Spinner />
      <h2 class="text-center mt-4 text-white text-xl font-semibold">
        Loading...
      </h2>
    </div>
  );
}
